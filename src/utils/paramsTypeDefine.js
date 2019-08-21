
/**
 * 通过参数描述，生成类型定义
 * @param {array} params 参数列表
 * @param {string} typeName 类型名称
 * @returns {array} 返回类型定义列表
 */
function makeTypeDefine(params, typeName) {
    // 当前对象类型
    const mainTypeDefine = {
        type: 'object',
        properties:{}
    };

    const defines = {
        [typeName]: mainTypeDefine
    };

    function makeParamDefine(param) {
        const { type, format, items, schema, description } = param;
        const typeInfo = { type, format, items, schema, description };
        const paths = param.name.split('.');
        const propName = paths[paths.length - 1];
        if (paths.length <= 1) {
            mainTypeDefine.properties[propName] = typeInfo;
            return;
        }

        // 建立类型
        for (let i = 0; i < paths.length - 1; i++) {
            const _typeName = typeName + paths.slice(0, i + 1).map(p => p[0].toUpperCase() + p.substring(1)).join('');
            if (!defines[_typeName]) {
                defines[_typeName] = {
                    type: 'object',
                    properties: {}
                };
            }

            const parentTypeName = typeName + paths.slice(0, i).map(p => p[0].toUpperCase() + p.substring(1)).join('');
            const _propName = paths[i];

            // 添加类型引用
            defines[parentTypeName].properties[_propName] = {
                schema: {
                    $ref: `#/definitions/${_typeName}`
                }
            };
        }
 
        const thisTypeName = typeName + paths.slice(0, paths.length - 1).map(p => p[0].toUpperCase() + p.substring(1)).join('');
        defines[thisTypeName].properties[propName] = typeInfo;
    }

    params.forEach(p => makeParamDefine(p));

    return defines;
}

function makeMethodParamTypeDefines(methodInfo) {
    const params = methodInfo.parameters || [];
    const queryParams = params.filter(p => p.in === 'query');
    const queryTypeName = methodInfo.tags[0] + methodInfo.operationId + 'QueryInfo';
    const queryTypeDefines = makeTypeDefine(queryParams, queryTypeName);

    const bodyParams = params.filter(p => p.in === 'body');
    const bodyTypeName = methodInfo.tags[0] + methodInfo.operationId + 'BodyInfo';
    const bodyTypeDefines = makeTypeDefine(bodyParams, bodyTypeName);

    return {
        ...queryTypeDefines,
        ...bodyTypeDefines
    };
}

/**
 * 创建所有方法的参数类型定义
 * @param {*} swaggerDoc swagger文档
 * @returns {array} 返回所有类型定义数组
 */
function makeAllParamsDefines(swaggerDoc) {
    const methodInfos = [].concat(...Object.values(swaggerDoc.paths).map(p => Object.values(p)));
    const defines = {};
    methodInfos.forEach(m => {
        Object.assign(defines, makeMethodParamTypeDefines(m));
    });

    return defines;
}

module.exports = makeAllParamsDefines;
