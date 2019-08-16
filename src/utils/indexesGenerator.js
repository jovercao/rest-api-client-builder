/**
 * 以tags为属性为groupName，以operationId为方法名
 * @returns * 索引
 */


exports.tagGroup_operatorIdMethod = function(swaggerDoc) {
    return Object.entries(swaggerDoc.paths).reduce((total, [path, pathInfo]) => {
        for (const [method, methodInfo] of Object.entries(pathInfo)) {
            const groupName = methodInfo.tags[0];
            let group = total[groupName];
            if (!group) {
                group = total[groupName] = {};
            }
            const methodName = methodInfo.operationId;
            group[methodName] = [ method, path, methodInfo ];
        }
        return total;
    }, {});
};
