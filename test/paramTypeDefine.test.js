const doc = require('./etshp.swagger.json');
const makeDefine = require('../src/utils/paramsTypeDefine');

describe('参数类型生成测试', function() {
    it('参数类型生成测试', function () {
        const defines = makeDefine(doc);

        console.log(defines);
    });
});