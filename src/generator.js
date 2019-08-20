const defaultConfig = require('../config/default.config.json');
const { tppl } = require('tppl');
const http = require('axios');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');
var mkdirp = require('mkdirp');

const { tagGroup_operatorIdMethod } = require('./utils/indexesGenerator');
const langs = require('./langs');

/**
 * 
 * @param {*} tplFile 模板文件
 * @param {*} context 渲染数据
 * @param {*} outputPath 输出路径
 */
function generate(tplFile, context, outputPath) {
    var apiClientTpl = readFile(tplFile);
    const render = tppl(apiClientTpl);
    const content = render(context);
    
    const outputDir = path.dirname(outputPath);

    if (!fs.existsSync(outputDir)) {
        mkdirp.sync(outputDir);
    }
    writeFile(outputPath, content);
}


function readFile(filePath) {
    filePath = path.resolve(__dirname, filePath);
    return fs.readFileSync(filePath).toString();
}

function writeFile(filePath, data) {
    filePath = path.resolve(__dirname, filePath);
    fs.writeFileSync(filePath, data);
}

module.exports = async function run(optionsConfig) {
    const config = Object.assign({}, defaultConfig);
    var cwdConfigPath = path.resolve(process.cwd(), '.restapi.config');
    let cwdConfig, userConfig;
    if (fs.existsSync(cwdConfigPath)) {
        cwdConfig = require(cwdConfigPath);
    }
    var userConfigPath = path.resolve('~', '.restapi.config');
    if (fs.existsSync(userConfigPath)) {
        userConfig = require(userConfigPath);
    }
    Object.assign(config, cwdConfig, userConfig, optionsConfig);
    if (!config.baseUrl && config.swaggerUrl.startsWith('http')) {
        config.baseUrl = new URL(config.swaggerUrl).origin;
    }

    // 语言上下文对象
    const langSettings = langs[config.lang];

    if (!config.swaggerUrl) {
        console.error('ERROR: 未配置swaggerUrl，您也可以在配置文件中添加该项，也可以从参数进行传递');
        return;
    }

    try {
        let swaggerDoc;
        try {
            if (config.swaggerUrl.startsWith('http')) {
                let response = await http.get(config.swaggerUrl);
                swaggerDoc = response.data;
            } else {
                const absPath = path.resolve(process.cwd(), config.swaggerUrl);
                swaggerDoc = require(absPath);
            }
        } catch(ex) {
            console.error(ex);
            return;
        }

        if (typeof swaggerDoc !== 'object' || !swaggerDoc.paths) {
            console.error('ERROR: 请填写正确的swaggerUrl。');
            return;
        }

        const indexes = tagGroup_operatorIdMethod(swaggerDoc);

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
                    };
                    const fileName = item.output.replace('${namespace}', config.namespace).replace('${name}', group);
                    const outputPath = path.resolve(process.cwd(), config.outputDir, fileName);
                    generate(item.tpl || item.tplFile, context, outputPath);
                }
            } else {
                const context = {
                    $helpers: langSettings.helpers,
                    $config: config,
                    current: indexes,
                    $name: config.name,
                    $doc: swaggerDoc
                };
                const fileName = item.output.replace('${namespace}', config.namespace).replace('${name}', config.name);
                const outputPath = path.resolve(process.cwd(), config.outputDir, fileName);
                generate(item.tpl || item.tplFile, context, outputPath);
            }
        }

        const modelsDir = path.resolve(process.cwd(), config.outputDir, config.modelsDir || 'models');
        if (!fs.existsSync(modelsDir)) {
            mkdirp.sync(modelsDir);
        }


        // 生成client客户端
        for (const item of langSettings.model) {
            if (langSettings.model.multiFile) {
                for([name, model] of Object.entries(swaggerDoc.definitions)) {
                    // 上下文对象
                    const context = {
                        $helpers: langSettings.helpers,
                        $config: config,
                        current: model,
                        $name: name,
                        $doc: swaggerDoc
                    };
                    const fileName = item.output.replace('${namespace}', config.namespace).replace('${name}', name);
                    const outputPath = path.resolve(process.cwd(), config.outputDir, config.modelsDir, fileName);
                    generate(item.tpl || item.tplFile, context, outputPath);
                }
            } else {
                // 上下文对象
                const context = {
                    $helpers: langSettings.helpers,
                    $config: config,
                    current: swaggerDoc.definitions,
                    $name: config.name,
                    $doc: swaggerDoc
                };
                const fileName = item.output.replace('${namespace}', config.namespace).replace('${name}', context.name);
                const outputPath = path.resolve(process.cwd(), config.outputDir, config.modelsDir, fileName);
                generate(item.tpl || item.tplFile, context, outputPath);
            }
        }
    } catch(ex) {
        console.error(ex);
    }
};
