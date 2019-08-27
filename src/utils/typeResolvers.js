/**
 * 将schema解析为c#类型
 * @param {*} schema
 */
function resolveCsharpType (schema) {
  if (schema.type) {
    switch (schema.type) {
      case 'array':
        return resolveCsharpType(schema.items) + '[]'
      case 'string':
        switch (schema.format) {
          case 'uuid':
            return 'Guid'
          case 'date-time':
            return 'DateTime'
          default:
            return 'string'
        }
      case 'integer':
      case 'number':
        switch (schema.format) {
          case 'int32':
            return 'int'
          case 'int64':
            return 'long'
          default:
            return schema.format
        }
      case 'boolean':
        return 'bool'
      default:
        return schema.type
    }
  }
  if (schema.$ref) {
    return schema.$ref.substring(schema.$ref.lastIndexOf('/') + 1).replace(/\[/g, '_').replace(/\]/g, '_').replace(/,/g, '_')
  }
  if (schema.schema) {
    return resolveCsharpType(schema.schema)
  }
  return 'void'
  // throw new Error(`未能转换类型${schema}`);
}

// 将schema解析为typescript类型
function resolveTypescriptType (schema) {
  if (schema.type) {
    switch (schema.type) {
      case 'array':
        return resolveTypescriptType(schema.items) + '[]'
      case 'integer':
      case 'double':
      case 'number':
        return 'number'
      case 'string':
        switch (schema.format) {
          case 'uuid':
            return 'Guid'
          case 'date-time':
            return 'date'
          default:
            return 'string'
        }
      default:
        return schema.type
    }
  }
  if (schema.$ref) {
    return schema.$ref.substring(schema.$ref.lastIndexOf('/') + 1).replace(/\[/g, '<').replace(/\]/g, '>')
  }
  if (schema.schema) {
    return resolveTypescriptType(schema.schema)
  }
  return 'void'
  // throw new Error(`未能转换类型${schema}`);
}

function resolveCsharpQueryParamsType (groupName, functinName) {
  return `${groupName}${functinName}QueryParam`
}

function resolveCsharpBodyParamsType (groupName, functinName) {
  return `${groupName}${functinName}BodyParam`
}

exports.resolveCsharpType = resolveCsharpType
exports.resolveTypescriptType = resolveTypescriptType
exports.resolveCsharpQueryParamsType = resolveCsharpQueryParamsType
exports.resolveCsharpBodyParamsType = resolveCsharpBodyParamsType
