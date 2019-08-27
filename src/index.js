const defaultConfig = require('../config/default.config.json')
const tppl = require('js-tppl')
const axios = require('axios')
const fs = require('fs')
const path = require('path')
const { URL } = require('url')
const mkdirp = require('mkdirp')
const https = require('https')
const makeParamsTypeDefine = require('./utils/paramsTypeDefine')

const { tagGroupOperatorIdMethod } = require('./utils/indexesGenerator')
const langs = require('./langs')

/**
 * 生成文件
 * @param {string} tpl? 模板文件
 * @param {string} tplFile 模板文件
 * @param {object} context 渲染数据
 * @param {string} outputPath 输出路径
 */
function renderToFile (tpl, tplFile, context, outputPath) {
  if (!tpl) {
    const filePath = path.resolve(__dirname, tplFile)
    tpl = fs.readFileSync(filePath).toString()
  }
  const render = tppl(tpl)
  const content = render(context)

  const outputDir = path.dirname(outputPath)

  if (!fs.existsSync(outputDir)) {
    mkdirp.sync(outputDir)
  }

  const filePath = path.resolve(__dirname, outputPath)
  fs.writeFileSync(filePath, content)
}

module.exports = async function run (optionsConfig) {
  const config = Object.assign({}, defaultConfig)
  var cwdConfigPath = path.resolve(process.cwd(), '.restclient.json')
  let cwdConfig, userConfig
  if (fs.existsSync(cwdConfigPath)) {
    cwdConfig = require(cwdConfigPath)
  }
  var userConfigPath = path.resolve('~', '.restclient.json')
  if (fs.existsSync(userConfigPath)) {
    userConfig = require(userConfigPath)
  }
  Object.assign(config, cwdConfig, userConfig, optionsConfig)

  // 语言上下文对象
  const langSettings = langs[config.lang]

  if (!langSettings) {
    console.error(`ERROR: 不支持的的语言${config.lang}`)
    return
  }
  if (!config.swaggerUrl) {
    console.error('ERROR: 未配置swaggerUrl，您也可以在配置文件中添加该项，也可以从参数进行传递')
    return
  }

  if (!config.baseUrl && config.swaggerUrl.startsWith('http')) {
    config.baseUrl = new URL(config.swaggerUrl).origin
  }

  // https时，allowUnauthorized选项
  const http = config.swaggerUrl.startsWith('https://') ? axios.create({
    httpsAgent: new https.Agent({
      rejectUnauthorized: !config.allowUnauthorized
    })
  }) : axios

  try {
    let swaggerDoc
    try {
      if (config.swaggerUrl.startsWith('http')) {
        let response = await http.get(config.swaggerUrl)
        swaggerDoc = response.data
      } else {
        const absPath = path.resolve(process.cwd(), config.swaggerUrl)
        swaggerDoc = require(absPath)
      }
    } catch (ex) {
      console.error(ex)
      return
    }

    if (typeof swaggerDoc !== 'object' || !swaggerDoc.paths) {
      console.error('ERROR: 请填写正确的swaggerUrl。')
      return
    }

    const indexes = tagGroupOperatorIdMethod(swaggerDoc)

    // 生成client客户端
    for (const item of langSettings.client) {
      // // 多文件输出
      if (item.multiFile) {
        for (const group of Object.keys(indexes)) {
          // 上下文对象
          const context = {
            $helpers: langSettings.helpers,
            $config: config,
            current: indexes[group],
            $name: group,
            $doc: swaggerDoc
          }
          const fileName = item.output.replace('${namespace}', config.namespace).replace('${name}', group)
          const outputPath = path.resolve(process.cwd(), config.outputDir, fileName)
          renderToFile(item.tpl, item.tplFile, context, outputPath)
        }
      } else {
        const context = {
          $helpers: langSettings.helpers,
          $config: config,
          current: indexes,
          $name: config.name,
          $doc: swaggerDoc
        }
        const fileName = item.output.replace('${namespace}', config.namespace).replace('${name}', config.name)
        const outputPath = path.resolve(process.cwd(), config.outputDir, fileName)
        renderToFile(item.tpl, item.tplFile, context, outputPath)
      }
    }

    const paramsDefines = makeParamsTypeDefine(swaggerDoc)
    // 获取类型定义
    const defines = {
      ...swaggerDoc.definitions,
      ...paramsDefines
    }

    // 生成Model
    for (const item of langSettings.model) {
      if (item.multiFile) {
        for (let [name, model] of Object.entries(defines)) {
          name = name.replace(/(\[|\]|,)/g, '_')

          // 上下文对象
          const context = {
            $helpers: langSettings.helpers,
            $config: config,
            current: model,
            $name: name,
            $doc: swaggerDoc
          }
          const fileName = item.output.replace('${namespace}', config.namespace).replace('${name}', name)
          const outputPath = path.resolve(process.cwd(), config.outputDir, fileName)
          renderToFile(item.tpl, item.tplFile, context, outputPath)
        }
      } else {
        // 上下文对象
        const context = {
          $helpers: langSettings.helpers,
          $config: config,
          current: defines,
          $name: config.name,
          $doc: swaggerDoc
        }
        const fileName = item.output.replace('${namespace}', config.namespace).replace('${name}', context.name)
        const outputPath = path.resolve(process.cwd(), config.outputDir, fileName)
        renderToFile(item.tpl, item.tplFile, context, outputPath)
      }
    }
  } catch (ex) {
    console.error(ex)
  }
}
