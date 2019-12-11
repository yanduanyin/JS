## 什么是 Webpack？
- Webpack 是为浏览器构建 JavaScirpt 模块脚本的前端工具
- 核心原理
  1. 一切皆模块
    js,css,image和html文件都可以视为模块,通过require加载
  2. 按需加载
    Webpack使用许多特性来分割代码然后生成多个“bundle”文件，通过异步加载部分代码来实现按需加载功能
一、作用
  1. webpack是一个模块打包工具，用这个工具，帮助我们将不同的资源和文件，进行打包，也就是合并在一个文件里面。
  2. 进行重新加载编译。实际就是将浏览器不认识的语法编译成浏览器认识的语法。比如less编译成css，ES6 语法 转成 ES5等等。
  3. 减少io请求。通常我们在请求后，会返回一个html到浏览器。这时，我们如果打开控制台，就会发现在html页面通过script,link等标签引用的静态资源， 浏览器会再次发出请求去获取这些资源。但是webpack的打包，将所有的静态资源都合并好了，减少了io请求。
二、打包原理
  1. 识别入口文件, 分析代码, 获取模块依赖, 并且将代码打包为浏览器可以识别的代码
  2. 递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle（包）
三、具体的打包流程
  1. // 配置打包选项  development开发环境
  2. 指定入口文件 entry ：要打包的文件
  3. 指定输出文件 output ：打包之后的文件
  4. 配置资源的加载器 loader   module -> rules -> babel-loader\style-loader、css-loader\less-loader
  5. 配置插件 plugin           plugins -> HtmlWebpackPlugin\CommonsChunkPlugin

- 常用的loader和plugin
  1. babel-loader  \   style-loader、css-loader  \   style-loader、css-loader、less-loader   \   vue-loader
  2. HtmlWebpackPlugin  \   CommonsChunkPlugin   \   MiniCssExtractPlugin