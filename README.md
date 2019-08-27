# RestApi客户端库代码生成器

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

命令说明：

```bat
restclient [swaggerUrl] [-o outputDir] [-n name] [-N namespace] [-a allowUnauthorized] [-l lang]
```

**范例：**

```shell
# 生成 http://your-host.com/swagger/docs/v1 到目录 d:\rest-client\ 下
restclient -o "d:\rest-client\" "http://your-host.com/swagger/docs/v1"

```

您还可以使用以下命令查看命令帮助：

```shell
restclient --help
```

## 支持的生成模式(lang)

生成后的代码是有依赖的，具体依赖请看下文。

### cs - c#代码

生成可运行于`.net`及`.net core`的`c#`代码。
生成代码后依赖以下库运行：

- `RestSharp`
- `Newtonsoft.Json`
- `QuerString`

请为使用Nuget为代码的项目添加以上依赖包。

### es6 - js(es6标准)代码

生成可运行于web(webpack)/electron/nodejs环境的es6代码。

生成代码后依赖以下库运行：

- axios
- qs

### mp - 微信小程序代码

生成可运行于微信小程序的es6代码。  

生成代码依赖以下库运行：

- wx-promise-pro
- qs

## 配置文件

本工具还支持配置文件，配置路径为当前路径下的 `.restclient.json` 文件，如果没有配置文件  
你也可以添加用户默认配置文件:`~/.restclient.json`
具体配置如下：  

| 配置项  |  说明  | 默认值 |
|---|---|----|
| swaggerUrl  | swagger的Url，亦可为本地路径  | -  |
|  namespace | 命名空间，在c#中有效  | RestApiClient  |
|  name |  客户端名称  |  Api  |
|  lang | 生成的模式  | 目前支持： es6/mp/cs  |
|  outputDir | 生成代码的输出路径 |  ./outputs |
|  allowUnauthorized |  在访问swaggerUrl时，是否不验证https的ssl证书，如果有自生成证书的选项需要添加该配置，否则会生成失败  | false |

**范例：**

```json
{
    "swaggerUrl": "http://your-host.com/swagger/docs/v1",
    "namespace": "RestApiClient",
    "name": "Api",
    "lang": "es6",
    "allowUnauthorized": false,
    "outputDir": "./outputs"
}
```
