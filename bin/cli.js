#!/usr/bin/env node
const program  = require('commander');
const { version } = require('../package.json');

program.version(version)
    .arguments('[swaggerUrl]')
    .option('-N --namespace <namespace>', '客户端默认命名空间（完整命名空间），ApiClient类存于此处')
    .option('-n --name <name>', 'Api客户端名称')
    .option('-o --output-dir <dir>', '生成的文件输出路径，默认值：outputs')
    .option('-d --models-dir <dir>', 'Models的输出路径，默认值：ClientModels')
    .option('-a --allow-unauthorized', '允许未经过签名验证的https请求')
    .option('-l --lang <lang>', '指定要生成的语言/方式， 目前支持：\n       cs - 基于RestClient的c# api客户端 \n        es6 - 基于axios的api客户端')
    .action((swaggerUrl, options) => {
        var cmdOptions = {};
        if (swaggerUrl) {
            cmdOptions.swaggerUrl = swaggerUrl;
        }
        if (options.namespace) {
            cmdOptions.clientNamespace = options.clientNamespace;
        }

        if (options.outputDir) {
            cmdOptions.outputDir = options.outputDir;
        }
        if (options.modelsDir) {
            cmdOptions.modelsDir = options.modelsDir;
        }
        if (options.lang) {
            cmdOptions.lang = options.lang;
        }
        if (options.name) {
            cmdOptions.name = options.name;
        }
        if (options.allowUnauthorized) {
            cmdOptions.allowUnauthorized = options.allowUnauthorized;
        }
        require('../index')(cmdOptions);
    });

program.parse(process.argv);
