
// 将schema解析为c#类型
exports.resolveCsharpType = function resolveCsharpType(schema) {
    if (schema.type) {
        if (schema.type === 'array') {
            return resolveCsharpType(schema.items) + '[]';
        }
        if (schema.format) {
            switch (schema.format) {
                case 'int32':
                    return 'int';
                case 'int64':
                    return 'long';
                case 'date-time':
                    return 'DateTime';
                default:
                    return schema.format;
            }
        }
        switch (schema.type) {
            case 'boolean':
                return 'bool';
            default:
                return schema.type;
        }
    }
    if (schema.$ref) {
        return schema.$ref.substring(schema.$ref.lastIndexOf('/') + 1);
    }
    if (schema.schema) {
        return resolveCsharpType(schema.schema);
    }
    return 'void';
    // throw new Error(`未能转换类型${schema}`);
};

// 将schema解析为typescript类型
exports.resolveTypescriptType = function resolveTypescriptType(schema) {
    if (schema.type) {
        if (schema.type === 'array') {
            return resolveTypescriptType(schema.items) + '[]';
        }
        if (schema.format) {
            switch (schema.format) {
                case 'int32':
                case 'int64':
                    return 'number';
                case 'date-time':
                    return 'date';
                default:
                    return schema.format;
            }
        }
        return schema.type;
    }
    if (schema.$ref) {
        return schema.$ref.substring(schema.$ref.lastIndexOf('/') + 1);
    }
    if (schema.schema) {
        return resolveTypescriptType(schema.schema);
    }
    return 'void';
    // throw new Error(`未能转换类型${schema}`);
};
