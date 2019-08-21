# C# RestApiClient代码生成器

> 用于生成C#，RestApiClient客户端库的代码生成器

该生成器使用nodejs编写，使用前请安装Nodejs。
使用 `jojoin/tppl` 模板引擎生成代码。

## 与VisualStudio自带生成器对比

- 支持net framework 4.0（XP系统应用开发必须）
- 可配置
- 可脱离visual studio环境运行

## 使用方法

**安装：**
```shell

# 安装到全局npm
npm install --global rest-api-client-builder

```

**生成命令：**

```shell
# 生成 http://your-host.com/swagger/docs/v1 到目录 d:\rest-client\ 下
restclient -o "d:\rest-client\" "http://your-host.com/swagger/docs/v1"

```

您还可以使用以下命令查看命令说明：

```shell
restclient --help
```

## 依赖项说明

生成后的代码是有依赖的，具体依赖请看下文。

### cs

- `RestSharp@105.2.3.0`
- `Newtonsoft.Json@8.0.3`

请为使用代码的项目添加以上Nuget依赖。

### es6

ES6生成代码后依赖以下库运行：

- axios
- qs

## 配置文件

本工具还支持配置文件，配置路径为当前路径下的 `.restclient.json` 文件，如果没有配置文件  
你也可以添加用户默认配置文件:`~/.restclient.json`
具体配置参考如下：  

```json
{
    // swagger服务器地址
    "swaggerUrl": "http://your-host.com/swagger/docs/v1",
    // 客户端默认命名空间（完整命名空间），ApiClient类存于此处，默认值: RestApiClient
    "namespace": "RestApiClient",
    // Client的名称，默认为`api`
    "name": "Api",
    // 输出的语言，默认为`es6`
    "lang": "es6",
    // 不验证https证书，默认为`false`，用于自生成证书的swagger路径访问
    "allowUnauthorized": false,
    // 生成的文件输出路径，默认值：outputs
    "outputDir": "../",
    // Models的输出路径，默认值：ClientModels
    "modelsDir": "ClientModels"
}
```
