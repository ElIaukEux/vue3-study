## 1. vuex的状态管理

![image-20230604222320756](./img/image-20230604222320756.png)

+ 安装：`npm install vuex@next`

## 2. Vue devtool使用

+ vue其实提供了一个devtools，方便我们对组件或者vuex进行调试：
  + 我们需要安装beta版本支持vue3，目前是6.0.0 beta15；
+ 它有两种常见的安装方式：
  + 方式一：通过chrome的商店；
  + ![image-20230604223656163](./img/image-20230604223656163.png)
  + 方式二：手动下载代码，编译、安装；
    + https://github.com/vuejs/devtools/tree/v6.0.0-beta.15下载代码；
    + 执行yarn install 安装相关的依赖；
    + 执行yarn run build 打包；
    + <img src="./img/image-20230604223733834.png" alt="image-20230604223733834" style="zoom:67%;" /><img src="./img/image-20230604223742889.png" alt="image-20230604223742889" style="zoom:67%;" />

## 3. Store

+ 每一个Vuex应用的核心就是store（仓库）：

  + store本质上是一个容器，它包含着你的应用中大部分的状态（state）；

+ **Vuex和单纯的全局对象的区别**

  + Vuex的状态存储是响应式的
    + 当Vue组件从store中读取状态的时候，若store中的状态发生变化，那么相应的组件也会被更新；
  + 不能直接改变store中的状态
    + 改变store中的状态的唯一途径就显示提交(commit) mutation；
    + 这样使得我们可以方便的跟踪每一个状态的变化，从而让我们能够通过一些工具帮助我们更好的管理应用的状态

+ 使用步骤：

  + 创建Store对象；
  + 在app中通过插件安装；

+ 在模板中使用

  + ```js
    
    ```

  + 

+ 在options api中使用，比如computed；

+ 在setup中使用


