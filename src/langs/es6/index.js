const path = require('path');

const { resolveTypescriptType } = require('../../utils/typeResolvers');
const { tagGroup_operatorIdMethod } = require('../../utils/indexesGenerator');

module.exports = {
    // 默认命名空间
    namespace: "api",
        // 功能函数
    helpers: {
        resolveType: resolveTypescriptType,
        // 获取方法名与组的索引
        getIndexes: tagGroup_operatorIdMethod
    },
    client: [
        {
            tplFile: path.join(__dirname, './tpl/client.js.tppl'),
            output: '${name}Client.js'
        },
        // {
        //     tplFile: path.join(__dirname, './tpl/client.d.ts.tppl'),
        //     output: '${namespace}Client.client.d.ts'
        // }
    ],
    model: [
        // {
        //     // 使用单文件，默认为多文件械
        //     multiFile: false,
        //     tplFile: path.join(__dirname, 'model.d.ts.tppl'),
        //     output: '${namespace}.models.d.ts'
        // }
    ]
};
