var fn = function (methodInfo) {
    const params = methodInfo.parameters || [];
    const queryParams = params.filter(p => p.in === 'query');
    const bodyParams = params.filter(p => p.in === 'body');

}

/**
 * 通过参数描述，生成类型定义
 * @param {array} 参数列表
 * @returns {array} 返回类型定义列表
 */
function generateDefine(params) {
    if (params.length === 0) return null;
    if (params.length === 1) {
        const { type, format, items, $ref } = params[0];
        return {
            type,
            format,
            items,
            $ref
        };
    }

    const define = {
        type: 'object'
    };

    const defines = [ define ];

    params.reduce((total, p) => {
        const paths = p.name.split('.');
        const name = paths[0];

        // 如果是子类型
        if (paths.length > 1) {
            // TODO: 等待完善
            const subname = paths.splice(0,1).join('.');
            paramsGroup[name] = 1;
            total[name] = 2;
        } else {
            const { type, format, items, $ref } = p;
            total[name] = { type, format, $ref };
        }
    }, define)
}

