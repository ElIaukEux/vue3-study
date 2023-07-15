## 1. js的缺点

+ 其实由于各种历史因素，JavaScript语言本身存在很多的缺点；
+ 比如ES5以及之前的使用的var关键字关于作用域的问题；
+ 比如最初JavaScript设计的数组类型并不是连续的内存空间；
+ 比如直到今天JavaScript也没有加入类型检测这一机制；

### 1.1 类型带来的问题

+ 首先在编程开发中我们有一个共识：错误出现的越早越好
  + 能在写代码的时候发现错误，就不要在代码编译时再发现（IDE的优势就是在代码编写过程中帮助我们发现错误）。
  + 能在代码编译期间发现错误，就不要在代码运行期间再发现（类型检测就可以很好的帮助我们做到这一点）。
  + 能在开发阶段发现错误，就不要在测试期间发现错误，能在测试期间发现错误，就不要在上线后发现错误。

### 1.2 类型错误

+ 这是我们一个非常常见的错误：
  + 这个错误很大的原因就是因为JavaScript没有对我们传入的参数进行任何的限制，只能等到运行期间才发现这个错误；
  + 并且当这个错误产生时，会影响后续代码的继续执行，也就是整个项目都因为一个小小的错误而深入崩溃；
+ 但是，如果我们可以给JavaScript加上很多限制，在开发中就可以很好的避免这样的问题了：
  + 比如我们的getLength函数中str是一个必传的类型，没有调用者没有传编译期间就会报错；
  + 比如我们要求它的必须是一个String类型，传入其他类型就直接报错；
  + 那么就可以知道很多的错误问题在编译期间就被发现，而不是等到运行时再去发现和修改；

## 2. TypeScript

### 2.1 简介

+ 我们可以将TypeScript理解成加强版的JavaScript。
+ JavaScript所拥有的特性，TypeScript全部都是支持的，并且它紧随ECMAScript的标准，所以ES6、ES7、ES8等新语法标准，它都是支持的；
+ 并且在语言层面上，不仅仅增加了类型约束，而且包括一些语法的扩展，比如枚举类型（Enum）、元组类型（Tuple）等；
+ TypeScript在实现新特性的同时，总是保持和ES标准的同步甚至是领先；
+ 并且TypeScript最终会被编译成JavaScript代码，所以你并不需要担心它的兼容性问题，在编译时也不需要借助于Babel这样的工具；
+ 所以，我们可以把TypeScript理解成更加强大的JavaScript，不仅让JavaScript更加安全，而且给它带来了诸多好用的好用特性；

### 2.2 特点

+ **始于JavaScript，归于JavaScript**
  + TypeScript从今天数以百万计的JavaScript开发者所熟悉的语法和语义开始。使用现有的JavaScript代码，包括流行的JavaScript库，并从JavaScript代码中调用TypeScript代码；
  + TypeScript可以编译出纯净、简洁的JavaScript代码，并且可以运行在任何浏览器上、Node.js环境中和任何支持ECMAScript 3（或更高版本）的JavaScript引擎中；
+ **TypeScript是一个强大的工具，用于构建大型项目**
  + 类型允许JavaScript开发者在开发JavaScript应用程序时使用高效的开发工具和常用操作比如静态检查和代码重构；
  + 类型是可选的，类型推断让一些类型的注释使你的代码的静态验证有很大的不同。类型让你定义软件组件之间的接口和洞察现有JavaScript库的行为；s
+ **拥有先进的JavaScript**
  + TypeScript提供最新的和不断发展的JavaScript特性，包括那些来自2015年的ECMAScript和未来的提案中的特性，比如异步功能和Decorators，以帮助建立健壮的组件；
  + 这些特性为高可信应用程序开发时是可用的，但是会被编译成简洁的ECMAScript3（或更新版本）的JavaScript；

### 2.3 编译环境和运行环境

#### 2.3.1 编译环境

<img src=".\img\image-20230705153914524.png"/>

+ 安装命令

​		npm install typescript -g
+ 查看版本

​		tsc --version

#### 2.3.2 运行环境

+ 方式一：webpack配置

   ::one: **项目环境的基础配置**

  为了我们之后的学习和使用方便，我们来配置一个webpack的环境：

  - 在环境中我们编写对应的TypeScript代码，让webpack自动帮助我们编译，并且在浏览器中查看结果

  **1. 创建一个简单的项目目录结构**

  新建一个新的目录：LearnTypeScript，并且创建如下的目录结构

  ```
  │  index.html
  ├─build
  │      webpack.config.js
  └─src
          main.ts
  ```
  
  目录和文件夹结构分析:

  - index.html是跑在浏览器上的模块文件
  - build文件夹中用于存放webpack的配置信息
  - src用于存放我们之后编写的所有TypeScript代码
  
  **2. 使用npm管理项目的依赖**

  webpack本身需要有很多的依赖，并且之后我们也需要启动node服务来快速浏览index.html模板以及编译后的JavaScript代码。

  我们要使用npm来初始化package.json文件：

  ```
  npm init -y
  ```
  
  <img src=".\img\640.png"/>初始化package.json

  **3. 本地依赖TypeScript**

  为什么需要本地依赖TypeScript：

  - 因为我们之后是通过webpack进行编译我们的TypeScript代码的，并不是通过tsc来完成的。（tsc使用的是全局安装的TypeScript依赖）
  - 那么webpack会在本地去查找TypeScript的依赖，所以我们是需要本地依赖TypeScript的；
  
  安装本地TypeScript依赖

  ```
  npm install typescript
  ```
  
  <img src=".\img\642.png"/>本地安装TypeScript

  **4. 初始化tsconfig.json文件**

  在进行TypeScript开发时，我们会针对TypeScript进行相关的配置，而这些配置信息是存放在一个tsconfig.json文件中的

  我们并不需要手动去创建它，可以通过命令行直接来生成这样的一个文件：

  ```
  tsc --init
  ```
  
  <img src=".\img\641.jpg"/>初始化tsconfig.json

  **5. 配置tslint来约束代码**

  为了让大家按照严格的TypeScript风格学习代码，这里我希望大家可以加入tslint

  全局安装tslint：

  ```
  npm install tslint -g
  ```
  
  在项目中初始化tslint的配置文件：tslint.json

  ```
  tslint -i
  ```
  
  <img src=".\img\643.jpg"/>初始化tslint.json

  ::two: **项目环境的Webpack**

  下面我们开始配置webpack相关的内容

  **1. 安装webpack相关的依赖**

  使用webpack开发和打开，需要依赖webpack、webpack-cli、webpack-dev-server

  ```
  npm install webpack webpack-cli webpack-dev-server -D
  ```
  
  <img src=".\img\644.png"/>安装webpack依赖

  **2. 在package.json中添加启动命令**

  为了方便启动webpack，我们在package.json中添加如下启动命令

  ```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "serve": "cross-env NODE_ENV=development webpack-dev-server --mode=development --config build/webpack.config.js"
  },
  ```
  
  <img src=".\img\645.jpg"/>自定义启动脚本

  **3. 添加webpack的其他相关依赖**

  依赖一：cross-env

  这里我们用到一个插件 "cross-env" ，这个插件的作用是可以在webpack.config.js中通过 process.env.NODE_ENV 来获取当前是开发还是生产环境，我们需要这个插件：

  ```
  npm install cross-env -D
  ```
  
  依赖二：ts-loader

  因为我们需要解析.ts文件，所以需要依赖对应的loader：ts-loader

  ```
  npm install ts-loader -D
  ```
  
  依赖三：html-webpack-plugin

  编译后的代码需要对应的html模块作为它的运行环境，所以我们需要使用html-webpack-plugin来将它插入到对应的模板中：

  ```
  npm install html-webpack-plugin -D
  ```
  
  **4. 配置webpack.config.js文件**

  将如下配置到webpack.config.js文件中：

  - 这里不再给出详细的说明信息，webpack后面我可能会再开一个专栏来讲解

  ```
  const HtmlWebpackPlugin = require("html-webpack-plugin");
  
  module.exports = {
    entry: "./src/main.ts",
    output: {
      filename: "build.js"
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"]
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/
        }
      ]
    },
    devtool: process.env.NODE_ENV === "production" ? false : "inline-source-map",
    devServer: {
      contentBase: "./dist",
      stats: "errors-only",
      compress: false,
      host: "localhost",
      port: 8080
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html"
      })
    ]
  };
  ```
  
  ### 2.3. 项目环境下代码测试

  下面我们就可以愉快的在main.ts中编写代码，之后只需要启动服务即可：

  <img src=".\img\646.png"/>测试代码

  在终端中启动服务：

  ```
  npm run serve
  ```
  
  <img src=".\img\647.png"/>程序运行

  在浏览器中打开：http://localhost:8080/

  <img src=".\img\648.png"/>查看结果

  修改代码，直接可以看到修改后的效果：不需要手动进行任何刷新

  <img src=".\img\650.png"/>