## 1. webpack

### 1.1 了解webpack

+ 事实上随着前端的快速发展，目前前端的开发已经变的越来越复杂了：
  + 比如开发过程中我们需要通过**模块化的方式**来开发；
  + 比如也会使用一些**高级的特性来加快我们的开发效率或者安全性**，比如通过ES6+、TypeScript开发脚本逻辑，
    通过sass、less等方式来编写css样式代码；
  + 比如开发过程中，我们还希望**实时的监听文件的变化**来并且**反映到浏览器上**，提高开发的效率；
  + 比如开发完成后我们还需要**将代码进行压缩、合并以及其他相关的优化**；
+ 但是对于很多的前端开发者来说，并不需要思考这些问题，日常的开发中根本就没有面临这些问题：
  + 这是因为目前前端开发我们通常都会直接使用三大框架来开发：**Vue、React、Angular**；
  + 但是事实上，这三大框架的创建过程我们都是**借助于脚手架（CLI）**的；
  + 事实上Vue-CLI、create-react-app、Angular-CLI都是**基于webpack**来帮助我们支持模块化、less、
    TypeScript、打包优化等的；

![image-20230322230631465](D:\a-study\study-code\09-vue3+T3\note\img\image-20230322230631465.png)

+ **webpack是一个静态的模块化打包工具，为现代的JavaScript应用程序；**
  + **打包bundler**：webpack可以帮助我们进行打包，所以它是一个打包工具
  + **静态的static**：这样表述的原因是我们最终可以将代码打包成最终的静态资源（部署到静态服务器）；
  + **模块化module**：webpack默认支持各种模块化开发，ES Module、CommonJS、AMD等；
  + **现代的modern**：我们前端说过，正是因为现代前端开发面临各种各样的问题，才催生了webpack的出现和发展；

<img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230322231024190.png" alt="image-20230322231024190" style="zoom:50%;" />

### 1.2 webpack安装

+ webpack的安装目前分为两个：**webpack、webpack-cli**
  + 两者之间关系
    + 执行webpack命令，会执行node_modules下的.bin目录下的webpack；
    + webpack在执行时是依赖webpack-cli的，如果没有安装就会报错；
    + 而webpack-cli中代码执行时，才是真正利用webpack进行编译和打包的过程；
    + 所以在安装webpack时，我们需要同时安装webpack-cli（第三方的脚手架事实上是没有使用webpack-cli的，而是类似于自己的vue-service-cli的东西）
+ ![image-20230322231509610](D:\a-study\study-code\09-vue3+T3\note\img\image-20230322231509610.png)

```npm
npm install webpack webpack-cli –g # 全局安装
npm install webpack webpack-cli –D # 局部安装
```

### 1.3 vue项目加载的文件

+ JavaScript的打包：
  + 将ES6转换成ES5的语法；
  + TypeScript的处理，将其转换成JavaScript；
+ Css的处理：
  + CSS文件模块的加载、提取；
  + Less、Sass等预处理器的处理；
+ 资源文件img、font：
  + 图片img文件的加载；
  + 字体font文件的加载；
+ HTML资源的处理：
  + 打包HTML资源文件；
+ 处理vue项目的SFC文件.vue文件；

### 1.4 webpack的默认打包

+ 我们可以通过webpack进行打包，之后运行打包之后的代码

  + 在目录下直接执行webpack 命令    
    + **webpack**

+ **生成一个dist文件夹，里面存放一个main.js的文件，就是我们打包之后的文件：**

  + 这个文件中的代码被压缩和丑化了；

  + 另外我们发现代码中依然存在ES6的语法，比如箭头函数、const等，这是因为默认情况下webpack并不清楚我
    们打包后的文件是否需要转成ES5之前的语法，后续我们需要通过babel来进行转换和设置；

+ **webpack打包确定入口**

  + 事实上，当我们运行webpack时，webpack会查找当前目录下的**src/index.js**作为入口；

  + 所以，如果当前项目中没有存在src/index.js文件，那么会报错；

  + **指定入口和出口**

    + ```js
      npx webpack --entry ./src/main.js --output-path ./build
      ```

### 1.5 创建局部的webpack

+ 第一步：创建package.json文件，用于管理项目的信息、库依赖等

  + ```npm
    npm init
    ```

+ 第二步：安装局部的webpack

  + ```npm
    npm install webpack webpack-cli -D
    ```

+ 第三步：使用局部的webpack

  + ```npm
    npx webpack
    ```

+ 第四步：在package.json中创建scripts脚本，执行脚本打包即可

  + ```npm
    npm run build
    ```

  + <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230322233012347.png" alt="image-20230322233012347" style="zoom: 67%;" />

### 1.6 webpack配置文件

在根目录下创建一个**webpack.config.js**（默认名字）文件，来作为webpack的配置文件：

<img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230323090706381.png" alt="image-20230323090706381" style="zoom:50%;" />

**指定webpack配置文件**

```npm
webpack --config wk.config.js
```

或者在package.json中新增一个新的脚本，然后通过npm run build再打包。

![image-20230323091032080](D:\a-study\study-code\09-vue3+T3\note\img\image-20230323091032080.png)

### 1.7 loader的使用

+ **loader 可以用于对模块的源代码进行转换；**
+ 我们可以将css文件也看成是一个模块，我们是通过import来加载这个模块的；
+ 在加载这个模块时，**webpack其实并不知道如何对其进行加载**，我们必须制定对应的loader来完成这个功能；

#### 1.7.1 css-loader的使用

+ 安装：`npm install css-loader -D`

**使用**

+ **内联方式**：内联方式使用较少，因为不方便管理；
  + 在引入的样式前加上使用的loader，并且使用!分割；
  + ![image-20230323091841632](D:\a-study\study-code\09-vue3+T3\note\img\image-20230323091841632.png)

+ **loader配置方式**

  + 配置方式表示的意思是在我们的**webpack.config.js文件中写明配置信息**：

    + module.rules中允许我们配置多个loader（因为我们也会继续使用其他的loader，来完成其他文件的加载）；
    + 这种方式可以更好的表示loader的配置，也方便后期的维护，同时也让你对各个Loader有一个全局的概览；

  + **module.rules的配置如下：**

    + **rules属性对应的值是一个数组：[Rule]**

    + 数组中存放的是一个个的Rule，Rule是一个对象，对象中可以设置多个属性：
      + **test属性**：用于对resource（资源）进行匹配的，通常会设置成正则表达式；
      + **use属性**：对应的值是一个数组：[UseEntry]
        + **UseEntry是一个对象**，可以通过对象的属性来设置一些其他属性
          + **loader**：必须有一个loader属性，对应的值是一个字符串；
          + **options**：可选的属性，值是一个字符串或者对象，值会被传入到loader中；
          + **query**：目前已经使用options来替代；
        + 传递字符串（如：use: [ 'style-loader' ]）是loader 属性的简写方式（如：use: [ { loader: 'style-loader'} ]）；
      + **loader属性**： Rule.use: [ { loader } ] 的简写。

  + <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230323092824436.png" alt="image-20230323092824436" style="zoom:50%;" />

#### 1.7.2 style-loader

​	通过css-loader来加载css文件，但是这个css在我们的代码中并没有生效（页面没有效果）。因为**css-loader只是负责将.css文件进行解析**，并不会将解析之后的css插入到页面中；**如果我们希望再完成插入style的操作，那么我们还需要另外一个loader，就是style-loader；**

+ **安装** `npm install style-loader -D`

+ **配置**：

  + 因为**loader的执行顺序是从右向左（或者说从下到上，或者说从后到前的）**，所以我们需要将styleloader写到css-loader的前面；

  + ![image-20230323093153275](D:\a-study\study-code\09-vue3+T3\note\img\image-20230323093153275.png)

​	重新执行编译npm run build，那么打包后的css已经生效了。

#### 1.7.3 less-loader

​	在开发中，我们可能会使用less、sass、stylus的预处理器来编写css样式，效率会更高。**如果想要环境支持这些预处理器**，需要下载less、sass等对应的工具。

+ 安装less工具  `npm install less -D`

  + 使用`npx lessc ./src/css/title.less title.css`

+ 在项目中我们会编写大量的css，需要使用**less-loader**来转换成css。

+ 安装less-loader `npm install less-loader -D`

  + **配置webpack.config.js**

    + ![image-20230323093859917](D:\a-study\study-code\09-vue3+T3\note\img\image-20230323093859917.png)

    + 执行npm run build ,  less就可以自动转换成css，并且页面也会生效了

#### 1.7.4 PostCSS工具

+ PostCSS是一个通过JavaScript来转换样式的工具；
+ 这个工具可以帮助我们进行一些CSS的转换和适配，**比如自动添加浏览器前缀、css样式的重置**；
+ 但是实现这些功能，我们需要借助于PostCSS对应的插件；

**使用**

+ 第一步：查找PostCSS在构建工具中的扩展，比如webpack中的postcss-loader；
  + 如果要在终端使用PostCSS，需要单独安装一个工具postcss-cli
  + 安装 `npm install postcss postcss-cli -D`
+ 第二步：选择可以添加你需要的PostCSS相关的插件；
  + 需要**添加前缀**，需要安装**autoprefixer**： `npm install autoprefixer -D`
  + 直接使用使用postcss工具，并且制定使用autoprefixer
    + ·**npx postcss --use autoprefixer -o end.css ./src/css/style.css**·
  + 转换之后的css
    + <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230323094719180.png" alt="image-20230323094719180" style="zoom:50%;" />

#### 1.7.5 postcss-loader

​	真实开发中我们必然不会直接使用命令行工具来对css进行处理，而是可以借助于构建工具：在**webpack中**使用postcss就是使用**postcss-loader**来处理的；

+ **安装**：`npm install postcss-loader -D`
+ **配置**（webpack.config.js中）： 因为postcss需要有对应的插件才会起效果，所以我们需要**配置它的plugin**；
  + <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230323095211289.png" alt="image-20230323095211289" style="zoom:50%;" />

+ **单独配置**（postcss.config.js）:在根目录下创建postcss.config.js
  + ![image-20230323095631852](D:\a-study\study-code\09-vue3+T3\note\img\image-20230323095631852.png)
  + **事实上，在配置postcss-loader时，我们配置插件并不需要使用autoprefixer。可以使用另外一个插件：postcss-preset-env**
    + **postcss-preset-env**也是一个postcss的插件；
    + 它可以帮助我们将一些**现代的CSS特性，转成大多数浏览器认识的CSS**，并且会根据目标浏览器或者运行时环境
      添加所需的polyfill；
    + 也包括会自动帮助我们添加autoprefixer（所以**相当于已经内置了autoprefixer**）；
  + 安装postcss-preset-env：`npm install postcss-preset-env -D`
    + ![image-20230323100136088](D:\a-study\study-code\09-vue3+T3\note\img\image-20230323100136088.png)
    + **在使用某些postcss插件时，也可以直接传入字符串**
      + ![image-20230323100220110](D:\a-study\study-code\09-vue3+T3\note\img\image-20230323100220110.png)

#### 1.7.6 file-loader

​	要处理jpg、png等格式的图片，我们也需要有对应的loader：file-loader，**file-loader的作用**就是帮助我们处理import/require()方式引入的一个文件资源，并且会将它放到我们输出的文件夹中；

+ **安装：** `npm install file-loader -D`
+ **配置：** 
  + ![image-20230326131955611](D:\a-study\study-code\09-vue3+T3\note\img\image-20230326131955611.png)
  + **文件的命名规则：**
    + [ext]： 处理文件的扩展名；
    + [name]：处理文件的名称；
    + [hash]：文件的内容，使用MD4的散列函数处理，生成的一个128位的hash值（32个十六进制）；
    + [contentHash]：在file-loader中和[hash]结果是一致的（在webpack的一些其他地方不一样）；
    + [hash:<length>]：截图hash的长度，默认32个字符太长了；
    + [path]：文件相对于webpack配置文件的路径；
    + ![image-20230326132241373](D:\a-study\study-code\09-vue3+T3\note\img\image-20230326132241373.png)
    + **outputPath** 设置输出的文件夹。

#### 1.7.7 url-loader

​	url-loader和file-loader的工作方式是相似的，但是可以将较小的文件，转成base64的URI。

+ **安装：** `npm install url-loader -D`
+ **配置：** 
  + ![image-20230326132515065](D:\a-study\study-code\09-vue3+T3\note\img\image-20230326132515065.png)
  + 在dist文件夹中，我们会看不到图片文件：
  + 这是因为默认情况下url-loader会将所有的图片文件转成base64编码，但是开发中我们往往是**小的图片需要转换，但是大的图片直接使用图片**即可。这是因为小的图片转换base64之后可以和页面一起被请求，减少不必要的请求过程；而大的图片也进行转换，反而会影响页面的请求速度；
  + **limit**属性：以限制哪些大小的图片转换和不转换
    + ![image-20230326132715512](D:\a-study\study-code\09-vue3+T3\note\img\image-20230326132715512.png)

#### 1.7.8 asset module type

​	在webpack5之前，加载这些资源我们需要使用一些loader，比如raw-loader 、url-loader、file-loader；在webpack5开始，我们可以直接使用**资源模块类型（asset module type-->不需安装）**，来替代上面的这些loader；

+ asset/resource 发送一个单独的文件并导出URL。之前通过使用file-loader 实现；
+ asset/inline 导出一个资源的data URI。之前通过使用url-loader 实现；
+ asset/source 导出资源的源代码。之前通过使用raw-loader 实现；
+ asset 在导出一个data URI 和发送一个单独的文件之间自动选择。之前通过使用url-loader，并且配置资源体积限制实现；
+ **配置**
  + 自定义文件的输出路径和文件名
    + 方式一：修改output，添加assetModuleFilename属性；
      + ![image-20230326133249402](D:\a-study\study-code\09-vue3+T3\note\img\image-20230326133249402.png)
    + 方式二：在Rule中，添加一个generator属性，并且设置filename；
      + ![image-20230326133347443](D:\a-study\study-code\09-vue3+T3\note\img\image-20230326133347443.png)
  + url-loader的limit效果
    + 步骤一：将type修改为asset；
    + 步骤二：添加一个parser属性，并且制定dataUrl的条件，添加maxSize属性；
      + ![image-20230326133502915](D:\a-study\study-code\09-vue3+T3\note\img\image-20230326133502915.png)
  + **加载字体文件**
    + 可以选择使用file-loader来处理，也可以选择直接使用webpack5的资源模块类型来处理；
      + ![image-20230326133631349](D:\a-study\study-code\09-vue3+T3\note\img\image-20230326133631349.png)

#### 1.7.9 babel-loader

​	**见1.10**

#### 1.7.10 vue-loader

+ **安装：** `npm install vue-loader -D`
+ **配置:**
  + ![image-20230326200845048](D:\a-study\study-code\09-vue3+T3\note\img\image-20230326200845048.png)
  + 我们必须添加@vue/compiler-sfc来对template进行解析：`npm install @vue/compiler-sfc -D`
  + 配置对应的Vue插件
    + ![image-20230326201012008](D:\a-study\study-code\09-vue3+T3\note\img\image-20230326201012008.png)
    + ![image-20230326201018488](D:\a-study\study-code\09-vue3+T3\note\img\image-20230326201018488.png)

### 1.8 Plugin的使用

+ 与loader的区别
  + Loader是**用于特定的模块类型**进行转换；
  + Plugin可以**用于执行更加广泛的任务**，比如打包优化、资源管理、环境变量注入等；

#### 1.8.1 CleanWebpackPlugin

在修改了一些配置，重新打包时，都需要手动删除dist文件夹：我们可以借助于一个插件来帮助我们完成，这个插件就是CleanWebpackPlugin；

+ **安装：** `npm install clean-webpack-plugin -D`
+ **配置：** 
  + ![image-20230326133955592](D:\a-study\study-code\09-vue3+T3\note\img\image-20230326133955592.png)

#### 1.8.2 HtmlWebpackPlugin

​	我们的HTML文件是编写在根目录下的，而最终打包的dist文件夹中是没有index.html文件的。在进行项目部署的时，必然也是需要有对应的入口文件index.html；所以我们也需要**对index.html进行打包处理；**

+ **安装：** `npm install html-webpack-plugin -D`
+ **配置：** 
  + ![image-20230326134125704](D:\a-study\study-code\09-vue3+T3\note\img\image-20230326134125704.png)

+ **分析：**
  + 我们会发现，现在自动在dist文件夹中，生成了一个index.html的文件：该文件中也自动添加了我们打包的bundle.js文件；
    + ![image-20230326135335195](D:\a-study\study-code\09-vue3+T3\note\img\image-20230326135335195.png)
  + **文件的生成过程**
    + 默认情况下是根据**ejs**的一个模板来生成的；
    + 在html-webpack-plugin的源码中，有一个default_index.ejs模块；
+ **自定义HTML模板**
  + 如果我们想在自己的模块中加入一些比较特别的内容：
    + 比如添加一个noscript标签，在用户的JavaScript被关闭时，给予响应的提示；
    + 比如在开发vue或者react项目时，我们需要一个可以挂载后续组件的根标签<div id="app"></div>；
    + 这个我们需要一个属于自己的index.html模块：
      + ![image-20230326135623474](D:\a-study\study-code\09-vue3+T3\note\img\image-20230326135623474.png)
      + 上面的代码中，会有一些**类似这样的语法<% 变量%>，这个是EJS模块**填充数据的方式。
  + **配置 HtmlWebpackPlugin时，添加如下配置：**
    + template：指定我们要使用的模块所在的路径；
    + title：在进行htmlWebpackPlugin.options.title读取时，就会读到该信息；
    + ![image-20230326140619690](D:\a-study\study-code\09-vue3+T3\note\img\image-20230326140619690.png)

​	

#### 1.8.3 DefinePlugin

在上面的index.html模板中使用了一个常量**BASE_URL**，想要定义该常量值，需要使用DefinePlugin

+ DefinePlugin允许在编译时创建配置的全局常量，是一个webpack内置的插件**（不需要单独安装）**：
+ ![image-20230326140924157](D:\a-study\study-code\09-vue3+T3\note\img\image-20230326140924157.png)

#### 1.8.4 CopyWebpackPlugin

​	在vue的打包过程中，如果我们将一些文件放到public的目录下，那么这个目录会被复制到dist文件夹中。这个**复制的功能**，我们可以使CopyWebpackPlugin来完成；

+ **安装：** `npm install copy-webpack-plugin -D`
+ **配置：**
  + from：设置从哪一个源中开始复制；
  + to：复制到的位置，可以省略，会默认复制到打包的目录下；
  + globOptions：设置一些额外的选项，其中可以编写需要忽略的文件：
    + .DS_Store：mac目录下回自动生成的一个文件；
    + index.html：也不需要复制，因为我们已经通过HtmlWebpackPlugin完成了index.html的生成；

### 1.9 mode配置

​	Mode配置选项，可以告知webpack使用响应模式的内置优化：

+ 默认值是production（什么都不设置的情况下）；

+ 可选值有：'none' | 'development' | 'production'；
+ 区别：
  + ![image-20230326141501426](D:\a-study\study-code\09-vue3+T3\note\img\image-20230326141501426.png)

### 1.10 Babel

​	Babel是一个工具链，主要用于旧浏览器或者环境中将ECMAScript 2015+代码转换为向后兼容版本的JavaScript；包括：语法转换、源代码转换等；

![image-20230326190955203](D:\a-study\study-code\09-vue3+T3\note\img\image-20230326190955203.png)

+ babel本身可以作为一个独立的工具（和postcss一样），**不和webpack等构建工具配置来单独使用。**

+ **安装：**

  + @babel/core：babel的核心代码，必须安装；
  + @babel/cli：可以让我们在命令行使用babel；
  + `npm install @babel/cli @babel/core -D`

+ **使用：**

  + `npx babel src --out-dir dist `       src：是源文件的目录；p--out-dir：指定要输出的文件夹dist；
  + **插件的使用**
    + `npm install @babel/plugin-transform-arrow-functions -D`   -->**将箭头函数转换成普通函数**
    + `npx babel src --out-dir dist --plugins=@babel/plugin-transform-arrow-functions`
    + `npm install @babel/plugin-transform-block-scoping -D`  --> **将const转为var**
    + `npx babel src --out-dir dist --plugins=@babel/plugin-transform-block-scoping,@babel/plugin-transform-arrow-functions`
    + 是如果要转换的内容过多，一个个设置是比较麻烦的，我们可以使用预设**（preset）：**
      + `npm install @babel/preset-env -D`
      + `npx babel src --out-dir dist --presets=@babel/preset-env`

+ **原理：**

  + 我们可以将babel看成就是一个编译器，作用就是将我们的源代码，转换成浏览器可以直接识别的另外一段源代码；
  + ![image-20230326191814068](D:\a-study\study-code\09-vue3+T3\note\img\image-20230326191814068.png)
  + ![image-20230326191823980](D:\a-study\study-code\09-vue3+T3\note\img\image-20230326191823980.png)

+ **Babel-loader**

  + 在实际开发中，我们通常会在构建工具中通过配置babel来对其进行使用的，比如在webpack中。
  + **安装相关依赖**  `npm install babel-loader @babel/core`
  + **必须指定插件才能生效**
    + ![image-20230326192140419](D:\a-study\study-code\09-vue3+T3\note\img\image-20230326192140419.png)
    + 如果我们一个个去安装使用插件，那么需要手动来管理大量的babel插件，我们可以直接给webpack提供一个preset，webpack会根据我们的预设来加载对应的插件列表，并且将其传递给babel。
      + 比如常见的预设有三个：env、react、Typescript
      + **安装：** `npm install @babel/preset-env`
      + ![image-20230326192311382](D:\a-study\study-code\09-vue3+T3\note\img\image-20230326192311382.png)

  + **Babel的配置文件**
    + 我们可以将babel的配置信息放到一个独立的文件中，babel给我们提供了两种配置文件的编写：
      + babel.config.json（或者.js，.cjs，.mjs）文件；
        + 早期使用较多的配置方式，但是对于配置Monorepos项目是比较麻烦的；
      + .babelrc.json（或者.babelrc，.js，.cjs，.mjs）文件；
        + 可以直接作用于Monorepos项目的子包，更加推荐；
    + ![image-20230326192602504](D:\a-study\study-code\09-vue3+T3\note\img\image-20230326192602504.png)

### 1.11 Vue 代码打包

**Vue打包后不同版本解析**

+ vue(.runtime).global(.prod).js：
  + 通过浏览器中的<script src="..."> 直接使用；
  + 我们之前通过CDN引入和下载的Vue版本就是这个版本；
  + 会暴露一个全局的Vue来使用；
+ vue(.runtime).esm-browser(.prod).js：
  + 用于通过原生ES 模块导入使用(在浏览器中通过<script type="module"> 来使用)。
+ vue(.runtime).esm-bundler.js：
  + 用于webpack，rollup 和parcel 等构建工具；
  + 构建工具中默认是vue.runtime.esm-bundler.js；
  + 如果我们需要解析模板template，那么需要手动指定vue.esm-bundler.js；
+ vue.cjs(.prod).js：
  + 服务器端渲染使用；
  + 通过require()在Node.js中使用；
+ ![image-20230326195140238](D:\a-study\study-code\09-vue3+T3\note\img\image-20230326195140238.png)

+ **运行时+编译器vs 仅运行时**
  + 在Vue的开发过程中我们有三种方式来编写DOM元素：
    + 方式一：template模板的方式（之前经常使用的方式）；
    + 方式二：render函数的方式，使用h函数来编写渲染的内容；
    + 方式三：通过.vue文件中的template来编写模板；
  + 它们的模板分别是如何处理的呢？
    + 方式二中的h函数可以直接返回一个虚拟节点，也就是Vnode节点；
    + 方式一和方式三的template都需要有特定的代码来对其进行解析：
      + 方式三.vue文件中的template可以通过在vue-loader对其进行编译和处理；
      + 方式一种的template我们必须要通过源码中一部分代码来进行编译；
  + 所以，Vue在让我们选择版本的时候分为运行时+编译器vs 仅运行时
    + **运行时+编译器**包含了对template模板的编译代码，更加完整，但是也更大一些；
    + **仅运行时**没有包含对template版本的编译代码，相对更小一些；
+ **全局标识的配置**
  + ![image-20230326200621523](D:\a-study\study-code\09-vue3+T3\note\img\image-20230326200621523.png)
  + 这是两个特性的标识，一个是使用Vue的Options，一个是Production模式下是否支持devtools工具；
  + 虽然他们都有默认值，但是强烈建议我们手动对他们进行配置；

### 1.12 搭建本地服务

​	目前我们开发的代码，为了运行需要有两个操作：

+ 操作一：npm run build，编译相关的代码；
+ 操作二：通过live server或者直接通过浏览器，打开index.html代码，查看效果；

​	这个过程经常操作会影响我们的开发效率，我们希望可以做到，当文件发生变化时，可以自动的完成编译和展示；

​	**为了完成自动编译，webpack提供了几种可选的方式：**

+ webpack watch mode 
+ webpack-dev-server（常用）
+ webpack-dev-middleware

#### 1.12.1 webpack watch mode

​	在该模式下，webpack依赖图中的所有文件，只要有一个发生了更新，那么代码将被重新编译；我们不需要手动去运行npm run build指令.

+ 开启方式：
  + 方式一：在导出的配置中，添加watch:true
  + 方式二：在启动webpack的命令种，添加 --watch的标识
    + ![image-20230416123452734](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416123452734.png)

#### 1.12.2 webpack-dev-server

​	webpack watch mode可以监听到文件的变化，但是事实上它本身是没有自动刷新浏览器的功能的，目前，可以通过vscdode中使用live-server来完成这样的功能，但是我们希望在不使用live-server的情况下，可以具备实时加载的功能，就可以使用**webpack-dev-server**

+ 安装 
  + `npm install webpack-dev-server -D`

+ 修改配置文件，告知dev server，从什么位置查找文件：
  + <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230416124140101.png" alt="image-20230416124140101" style="zoom: 50%;" /><img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230416124153631.png" alt="image-20230416124153631" style="zoom:50%;" />
  + <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230416124213289.png" alt="image-20230416124213289" style="zoom:50%;" />

+ webpack-dev-server 在编译之后不会写入到任何输出文件。而是将bundle 文件保留在内存中：
  + 事实上webpack-dev-server使用了一个库叫memfs（memory-fs webpack自己写的）
+ 模块热替换（HMR）
  + 模块热替换是指在应用程序运行过程中，替换、添加、删除模块，而无需重新刷新整个页面；
  + HMR通过如下几种方式，来提高开发的速度：
    + 不重新加载整个页面，这样可以保留某些应用程序的状态不丢失；
    + 只更新需要变化的内容，节省开发的时间；
    + 修改了css、js源代码，会立即在浏览器更新，相当于直接在浏览器的devtools中直接修改样式；
  + 如何使用HMR呢？
    + 默认情况下，webpack-dev-server已经支持HMR，我们只需要开启即可；
    + 在不开启HMR的情况下，当我们修改了源代码之后，整个页面会自动刷新，使用的是live reloading；
  + 开启HMR
    + 修改webpack的配置：
      + ![image-20230416124615911](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416124615911.png)
    + 浏览器可以看到如下效果：
      + ![image-20230416124628609](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416124628609.png)
    + 但当我们修改了某一个模块的代码时，依然是刷新的整个页面，们需要去指定哪些模块发生更新时，进行HMR；
      + ![image-20230416124712209](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416124712209.png)
  + 在开发其他项目时，比如vue开发中，我们使用vue-loader，此loader支持vue组件的HMR，提供开箱即用的体验；比如react开发中，有React Hot Loader，实时调整react组件（目前React官方已经弃用了，改成使用reactrefresh）；
  + HMR的原理
    + webpack-dev-server会创建两个服务：提供静态资源的服务（express）和Socket服务（net.Socket）；
    + express server负责直接提供静态资源的服务（打包后的资源直接被浏览器请求和解析）；
    + HMR Socket Server，是一个socket的长连接：
      + 长连接有一个最好的好处是建立连接后双方可以通信（服务器可以直接发送文件到客户端）；
      + 当服务器监听到对应的模块发生变化时，会生成两个文件.json（manifest文件）和.js文件（update chunk）；
      + 通过长连接，可以直接将这两个文件主动发送给客户端（浏览器）；
      + 浏览器拿到两个新的文件后，通过HMR runtime机制，加载这两个文件，并且针对修改的模块进行更新；
      + ![image-20230416125033531](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416125033531.png)

### 1.13 其他配置

#### 1.13.1 hotOnly、host配置

+ host设置主机地址：
  + 默认值是localhost；
  + 如果希望其他地方也可以访问，可以设置为0.0.0.0；
+ localhost 和0.0.0.0 的区别：
  + localhost：本质上是一个域名，通常情况下会被解析成127.0.0.1;
    + 127.0.0.1：回环地址(Loop Back Address)，表达的意思其实是我们主机自己发出去的包，直接被自己接收;
    + 正常的数据库包经常应用层- 传输层- 网络层- 数据链路层- 物理层;
    + 而回环地址，是在网络层直接就被获取到了，是不会经常数据链路层和物理层的;
    + 比如我们监听127.0.0.1时，在同一个网段下的主机中，通过ip地址是不能访问的;
  + 0.0.0.0：监听IPV4上所有的地址，再根据端口找到不同的应用程序;
    + 比如我们监听0.0.0.0时，在同一个网段下的主机中，通过ip地址是可以访问的;

#### 1.13.2 port、open、compress

+ port设置监听的端口，默认情况下是8080
+ open是否打开浏览器：
  + 默认值是false，设置为true会打开浏览器；
  + 也可以设置为类似于Google Chrome等值；
+ compress是否为静态文件开启gzip compression：
  + 默认值是false，可以设置为true；
  + ![image-20230416130933923](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416130933923.png)

#### 1.13.3 Proxy

+ proxy是我们开发中非常常用的一个配置选项，它的目的设置代理来解决跨域访问的问题：
  + 比如我们的一个api请求是http://localhost:8888，但是本地启动服务器的域名是http://localhost:8000，这
    个时候发送网络请求就会出现跨域的问题；
  + 那么我们可以将请求先发送到一个代理服务器，代理服务器和API服务器没有跨域的问题，就可以解决我们的跨
    域问题了；
+ 我们可以进行如下的设置：
  + target：表示的是代理到的目标地址，比如/api-hy/moment会被代理到http://localhost:8888/apihy/moment；
  + pathRewrite：默认情况下，我们的/api-hy 也会被写入到URL中，如果希望删除，可以使用pathRewrite；
  + secure：默认情况下不接收转发到https的服务器上，如果希望支持，可以设置为false；
  + changeOrigin：它表示是否更新代理后请求的headers中host地址；其实是要修改代理请求中的headers中的host属性：
    + 因为我们真实的请求，其实是需要通过http://localhost:8888来请求的；
    + 但是因为使用了代码，默认情况下它的值时http://localhost:8000；
    + 如果我们需要修改，那么可以将changeOrigin设置为true即可；
    + ![image-20230416131250582](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416131250582.png)

#### 1.13.4 historyApiFallback

historyApiFallback是开发中一个非常常见的属性，它主要的作用是**解决SPA页面在路由跳转之后，进行页面刷新时，返回404的错误。**

+ boolean值：默认是false，如果设置为true，那么在刷新时，返回404错误时，会自动返回index.html 的内容；
+ object类型的值，可以配置rewrites属性：可以配置from来匹配路径，决定要跳转到哪一个页面；
+ 事实上devServer中实现historyApiF allback功能是通过connect-history-api-fallback库的：可以查看connect-history-api-fallback 文档

#### 13.4.5 resolve模块解析--extensions和alias配置

**resolve用于设置模块如何被解析：**

+ 在开发中我们会有各种各样的模块依赖，这些模块可能来自于自己编写的代码，也可能来自第三方库；
+ resolve可以帮助webpack从每个require/import 语句中，找到需要引入到合适的模块代码；
+ webpack 使用**enhanced-resolve** 来解析文件路径；

**webpack能解析三种文件路径：**

+ 绝对路径
  + 由于已经获得文件的绝对路径，因此不需要再做进一步解析。
+ 相对路径
  + 在这种情况下，使用import 或require 的资源文件所处的目录，被认为是上下文目录；
  +  在import/require 中给定的相对路径，会拼接此上下文路径，来生成模块的绝对路径；
+ 模块路径
  + 在resolve.modules中指定的所有目录检索模块；
  + 默认值是['node_modules']，所以默认会从node_modules中查找文件；
  + 我们可以通过设置别名的方式来替换初识模块路径，具体后面讲解alias的配置

+ 如果是一个文件：
  + 如果文件具有扩展名，则直接打包文件；
  + 否则，将使用resolve.extensions选项作为文件扩展名解析；
+ 如果是一个文件夹：
  + 会在文件夹中根据resolve.mainFiles配置选项中指定的文件顺序查找；
    + resolve.mainFiles的默认值是['index']；
    + 再根据resolve.extensions来解析扩展名；

**extensions和alias配置**

+ extensions是解析到文件时自动添加扩展名：
  + 默认值是['.wasm', '.mjs', '.js', '.json']；
  + 所以如果我们代码中想要添加加载.vue 或者jsx 或者ts 等文件时，我们必须自己写上扩展名；
+ 另一个非常好用的功能是配置别名alias：
  + 特别是当我们项目的目录结构比较深的时候，或者一个文件的路径可能需要../../../这种路径片段；
  + 我们可以给某些常见的路径起一个别名；
  + ![image-20230416132104079](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416132104079.png)

### 1.14 区分开发环境

+ 方案一：编写两个不同的配置文件，开发和生成时，分别加载不同的配置文件即可；

+ 方式二：使用相同的一个入口配置文件，通过设置参数来区分它们；
+ ![image-20230416134144347](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416134144347.png)

+ **入口文件的解析**
  + 我们之前编写入口文件的规则是这样的：./src/index.js，但是如果我们的配置文件所在的位置变成了config 目录，我们是否应该变成../src/index.js呢？
    + 如果我们这样编写，会发现是报错的，依然要写成./src/index.js；
    + 这是因为入口文件其实是和另一个属性时有关的context；
  + context的作用是用于解析入口（entry point）和加载器（loader）：
    + 官方说法：默认是当前路径（但是经过测试，默认应该是webpack的启动目录）
    + 另外推荐在配置中传入一个值；
    + <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230416134432144.png" alt="image-20230416134432144" style="zoom:50%;" /><img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230416134436843.png" alt="image-20230416134436843" style="zoom:50%;" />

+ 区分开发和生成环境配置
  + webpack.comm.conf.js
  + webpack.dev.conf.js
  + webpack.prod.conf.js

## 2. Vue CLI脚手架

​	可以通过CLI选择项目的配置和创建出我们的项目；Vue CLI已经内置了webpack相关的配置，我们不需要从零来配置；

+ 安装
  + `npm install @vue/cli -g`
+ 升级Vue CLI
  + `npm update @vue/cli -g`
+ 通过Vue的命令来创建项目
  + `Vue create 项目的名称`
+ ![image-20230416134759735](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416134759735.png)
+ ![image-20230416134804138](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416134804138.png)
+ ![image-20230416134809324](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416134809324.png)

![image-20230416134814191](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416134814191.png)

**项目的目录结构**

![image-20230416134835249](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416134835249.png)



![image-20230416134840424](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416134840424.png)

**运行原理**

​	![image-20230416134900914](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416134900914.png)

## 3. vite

#### 3.1 简介

Webpack是目前整个前端使用最多的构建工具，但是除了webpack之后也有其他的一些构建工具：比如rollup、parcel、gulp、vite等等

+ 什么是vite呢？ 官方的定位：下一代前端开发与构建工具；
+ 如何定义下一代开发和构建工具呢？
+ 我们知道在实际开发中，我们编写的代码往往是不能被浏览器直接识别的，比如ES6、TypeScript、Vue文件等等；
+ 所以我们必须通过构建工具来对代码进行转换、编译，类似的工具有webpack、roll up、parcel；
+ 但是随着项目越来越大，需要处理的JavaScript呈指数级增长，模块越来越多；
+ 构建工具需要很长的时间才能开启服务器，HMR也需要几秒钟才能在浏览器反应出来；
+ Vite（法语意为"快速的"，发音/vit/) 是一种新型前端构建工具，能够显著提升前端开发体验。

#### 3.2 Vite的构造

它主要由两部分组成：

+ 一个开发服务器，它基于原生ES模块提供了丰富的内建功能，HMR的速度非常快速；
+ 一套构建指令，它使用rollup打开我们的代码，并且它是预配置的，可以输出生成环境的优化过的静态资源；

#### 3.3 浏览器原生模块的支持

![image-20230416140538021](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416140538021.png)

+ 如果我们不借助于其他工具，直接使用ES Module来开发有什么问题呢？
  + 首先，我们会发现在使用loadash时，加载了上百个模块的js代码，对于浏览器发送请求是巨大的消耗；
  + 其次，我们的代码中如果有TypeScript、less、vue等代码时，浏览器并不能直接识别；
  + 事实上，vite就帮助我们解决了上面的所有问题。

#### 3.4 安装

	npm install vite –g # 全局安装
	npm install vite –D # 局部安装
	npx vite // 启动项目

#### 3.5 对css 的支持

+ vite可以直接支持css的处理，直接导入css即可；

+ vite可以直接支持css预处理器，比如less

  + 直接导入less；

  + 之后安装less编译器；`npm install less -D`

+ vite直接支持postcss的转换：

  + 只需要安装postcss，并且配置postcss.config.js 的配置文件即可；`npm install postcss postcss-preset-env -D`
  + ![image-20230416140945475](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416140945475.png)

#### 3.6 对ts的支持

vite对TypeScript是原生支持的，它会直接使用ESBuild来完成编译：

+ 只需要直接导入即可；
+ 如果我们查看浏览器中的请求，会发现请求的依然是ts的代码：
+ 这是因为vite中的服务器Connect会对我们的请求进行转发；
+ 获取ts编译后的代码，给浏览器返回，浏览器可以直接进行解析；
+ 注意：在vite2中，已经不再使用Koa了，而是使用Connect来搭建的服务器

#### 3.7 对vue的支持

+ vite对vue提供第一优先级支持：
  + Vue 3 单文件组件支持：@vitejs/plugin-vue
  + Vue 3 JSX 支持：@vitejs/plugin-vue-jsx
  + Vue 2 支持：underfin/vite-plugin-vue2
+ 安装支持vue的插件：
  + `npm install @vitejs/plugin-vue -D`
+ 在vite.config.js中配置插件：
+ ![image-20230416141240662](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416141240662.png)

#### 3.8vite 打包项目

​	以直接通过vite build来完成对当前项目的打包工具：

![image-20230416141318701](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416141318701.png)

可以通过preview的方式，开启一个本地服务来预览打包后的效果：

`npx vite preview`

#### 3.9 ESBuild解析

ESBuild的特点：

+ 超快的构建速度，并且不需要缓存；
+ 支持ES6和CommonJS的模块化；
+ 支持ES6的Tree Shaking；
+ 支持Go、JavaScript的API；
+ 支持TypeScript、JSX等语法编译；
+ 支持SourceMap；
+ 支持代码压缩；
+ 支持扩展其他插件；

ESBuild的构建速度和其他构建工具速度对比：

![image-20230416141501471](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416141501471.png)

ESBuild为什么这么快呢？

+ 使用Go语言编写的，可以直接转换成机器代码，而无需经过字节码；
+ ESBuild可以充分利用CPU的多内核，尽可能让它们饱和运行；
+ ESBuild的所有内容都是从零开始编写的，而不是使用第三方，所以从一开始就可以考虑各种性能问题；

#### 3.10 Vite脚手架工具

+ Vite实际上是有两个工具的：
  + vite：相当于是一个构件工具，类似于webpack、rollup；
  + @vitejs/create-app：类似vue-cli、create-react-app；
+ 使用
  + npm init @vitejs/app
+ 上面的做法相当于省略了安装脚手架的过程：
  + npm install @vitejs/create-app -g
    create-app