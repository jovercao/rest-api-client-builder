/*
* C# 生成器配置
*/

const path = require('path');

const { tagGroup_operatorIdMethod } = require('../../utils/indexesGenerator');
const { resolveCsharpType } = require('../../utils/typeResolvers');

module.exports = {
    // 默认命名空间
    namespace: "RestApi",
    // 功能函数
    helpers: {
        // 转换为c#类型
        resolveType: resolveCsharpType,
        // 获取方法名与组的索引
        getIndexes: tagGroup_operatorIdMethod
    },
    // 客户端生成项配置
    client: [
        {
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
};