/*
* C# 生成器配置
*/

const path = require('path')

const { tagGroupOperatorIdMethod } = require('../../utils/indexesGenerator')
const { resolveCsharpType, resolveCsharpQueryParamsType, resolveCsharpBodyParamsType } = require('../../utils/typeResolvers')

module.exports = {
  // 默认命名空间
  namespace: 'RestApi',
  // 功能函数
  helpers: {
    // 解释为c#类型名称
    resolveType: resolveCsharpType,
    // 解释为c# query参数类型名称
    resolveQueryType: resolveCsharpQueryParamsType,
    // 解析为c# body 参数类型名称
    resolveBodyType: resolveCsharpBodyParamsType,
    // 获取方法名与组的索引
    getIndexes: tagGroupOperatorIdMethod
  },
  // 客户端生成项配置
  client: [
    {
      multiFile: true,
      tplFile: path.resolve(__dirname, './tpl/ApiClient.tppl'),
      // 可用参数：name - 名称， namespace - 命名空间
      output: '${name}Client.cs'
    }
  ],
  // model生成项配置
  model: [
    {
      multiFile: true,
      tplFile: path.resolve(__dirname, './tpl/Model.tppl'),
      output: 'Model/${name}.cs'
    }
  ]
}
