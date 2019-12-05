- typescript   ----   react     他们的关系？
  这两个结合就是一个 超级大项目的技术栈
  typescript  js 的超集  
  webpack  src
  index.js    loader  index.ts  入口文件
  index.jsx            index.tsx  
- 安装依赖： npm i webpack webpack-cli webpack-dev-server babel-core babel-preset-env --save-dev
            npm i typescript awesome-typescript-loader --save-dev
            npm i bootstrap
            npm i html-webpack-plugin mini-css-extract-plugin --save-dev
            npm i react react-dom
            npm i @types/react @types/react-dom --save-dev   让react可以与typescript结合使用，要添加类型定义
            npm i react-router react-router-dom @types/react-router @types/react-router-dom