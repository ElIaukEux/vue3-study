## 1. vue3变化？

### 1.1源码

**（1）源码通过monorepo的形式来管理源代码：**

+ Mono：单个
+ Repo:repository仓库
+ 主要是将许多项目的代码存储在同一个repository中；
+ 这样做的目的是多个包本身相互独立，可以有自己的功能逻辑、单元测试等，同时又在同一个仓库下方便管理；
+ 而且模块划分的更加清晰，可维护性、可扩展性更强； 

**（2）源码使用TypeScript：来进行重写：**

+ 在Vue2.的时候，Vue使用Flow来进行类型检测；
+ 在Vue3.x的时候，Vue的源码全部使用TypeScript来进行重构，并且Vue本身对TypeScript支持也更好了；

### 1.2 性能

**（1） 使用Proxy进行数据劫持**

+ 在Vue2.x的时候，Vue2是使用Object.defineProperty：来劫持数据的getter和setter方法的；
+ 这种方式一直存在一个缺陷就是当给对象添加或者删除属性时，是无法劫持和监听的；
+ 所以在Vue2.x的时候，不得不提供一些特殊的API，比如$set或$delete，事实上都是一些hack方法，也增加了开发者学习新的API的成本；
+ 而在Vue3.开始，Vue使用Proxy来实现数据的劫持。

**（2）删除了一些不必要的API**

+ 移除了实例上的$on,$off和$once
+ 移除了一些特性：如filter、内联模板等

**（3）编译方面的优化**

+ 生成Block Tree 、solt编译优化、diff算法优化

### 1.3 新的API

**（1）由Options API到Composition API：**

+ 在Vue2.的时候，我们会通过Options API来描述组件对象；
+ Options API包括data、props、methods、computed、.生命周期等等这些选项；
+ 存在比较大的问题是多个逻辑可能是在不同的地方：
  比如created中会使用某一个method：来修改data的数据，代码的内聚性非常差；
+ Composition API可以将相关联的代码放到同一处进行处理，而不需要在多个Options，之间寻找；

**（2）Hooks函数增强代码的复用性**

+ 在vue2中，通常使用mixins在多个组件之间共享逻辑
+ 但是有一个很大的缺陷是mixins也是由一大堆的Options组成的，并且多个mixins会存在命名冲突的问题。
+ 在vue3中，我们可以通过Hooks函数，来将一部分独立的逻辑抽取出去，并且它们还可以是响应式的。

## 2. vue的使用方式

###  2.1 在页面中通过CDN的方式来引入

​	**CDN称之为内容分发网络**（Content Delivery Networki或Content Distribution Network，缩写：CDN）

+ 它是指通过相互连接的网络系统，利用最靠近每个用户的服务器；
+ 更快、更可靠地将音乐、图片、视频、应用程序及其他文件发送给用户；
+ 来提供高性能、可扩展性及低成本的网络内容传递给用户； 

![](https://github.com/ElIaukEux/vue3-study/blob/master/note/img/image-20230317214130971.png)

**常用的CDN服务器可以大致分为两种**

+ 自己的CDN服务器：需要购买自己的CDN服务器，目前阿里、腾讯、亚马逊、Googles等都可以购买CDN服务器；
+ 开源的CDN服务器：国际上使用比较多的是unpkg、JSDelivr、cdnjs；

**使用**

```js
	<div id="App"></div>
	<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
	<script>
		const app = Vue.createApp({
			template: '<h2>初体验</h2>',
		}).mount('#App');
	</script>
```

### 2.2 下载和引入

```js
	<div id="App"></div>
	<script src="./js/vue.js"></script>
	<script>
		Vue.createApp({
			template: '<h1>测试</h1>',
		}).mount('#App')
	</script>
```

**小案例--计算器**

```html
<body>
	<div id="App"></div>
	<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
	<script>
		Vue.createApp({
			template: `
			<h2>{{count}}</h2>
				<button @click='add'>+1</button>
				<button @click='sub'>-1</button>
			`,
			data() {
				return {
					count: 100,
				};
			},
			methods: {
				add() {
					this.count++
				},
				sub() {
					this.count--
				}
			},
		}).mount('#App')
	</script>
</body>
```

## 3.声明式和命令式

​	命令式编程关注的是"how to do”，声明式编程关注的是“what to do”，由框架（机器）完成“how”的过程。

+ 在原生的实现过程中，我们是如何操作的呢？
  + 我们每完成一个操作，都需要通过avaScript编写一条代码，来给浏览器一个指令；
  + 这样的编写代码的过程，我们称之为**命令式编程**；
  + 在早期的原生JavaScript和jQuery开发的过程中，我们都是通过这种命令式的方式在编写代码的；
+ 在Vue的实现过程中，我们是如何操作的呢？
  + 我们会在createApp传入的对象中声明需要的内容，模板template、数据data、方法methods；
  + 这样的编写代码的过程，我们称之为是**声明式编程**；
  + 目前Vue、React、.Angular的编程模式，我们称之为声明式编程；

## 4. MVVM模型

+ MVC是Model-View-Controller的简称，是在前期被使用非常框架的架构模式，比如iOS、前端；
  + <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230317221737084.png" alt="image-20230317221737084" style="zoom:50%;" />

+ MVM是Model--View-ViewModel的简称，是目前非常流行的架构模式；

<img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230317221909853.png" alt="image-20230317221909853" style="zoom:50%;" /><img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230317222649782.png" alt="image-20230317222649782" style="zoom:50%;" />

## 5. createApp对象

### 5.1 template属性

​	**表示的是Vue需要帮助我们渲染的模板信息**

+ 目前我们看到它里面**有很多的HML标签**，这些标签会**替换掉**我们挂载到的元素（比如id为app的div）的innerHTML

+ 模板中有一些**奇怪的语法**，比如{{}}，比如@click，这些都是**模板特有的语法**

  

  **template的两种写法**

+ 使用script标签，并且标记它的类型为X-template

  + ```html
    <body>
    	<div id="App"></div>
    	<script type="x-template" id="xw">
    		<div>
    			<h2>{{count}}</h2>
    			<button @click='add'>+1</button>
    			<button @click='sub'>-1</button>
    		</div>
    	</script>
    	<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    	<script>
    		Vue.createApp({
    			template: '#xw',
    			data() {
    				return {
    					count: 100,
    				};
    			},
    			methods: {
    				add() {
    					this.count++
    				},
    				sub() {
    					this.count--
    				}
    			},
    		}).mount('#App')
    	</script>
    </body>
    ```

+ 使用任意标签（通常使用template标签，因为不会被浏览器渲染）,设置id

  + template元素是一种用于保存客户端内容的机制，该内容再加载页面时不会被呈现，但随后可以在运行时使用JavaScript实例化；

  + ```html
    <body>
    	<div id="App"></div>
    	<template id="xw">
    		<div>
    			<h2>{{count}}</h2>
    			<button @click='add'>+1</button>
    			<button @click='sub'>-1</button>
    		</div>
    	</template>
    	<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    	<script>
    		Vue.createApp({
    			template: '#xw',
    			data() {
    				return {
    					count: 100,
    				};
    			},
    			methods: {
    				add() {
    					this.count++
    				},
    				sub() {
    					this.count--
    				}
    			},
    		}).mount('#App')
    	</script>
    </body>
    ```

### 5.2 date 属性

​	**data属性是传入一个函数，并且该函数需要返回一个对象：**

+ 在Vue2.x的时候，也可以传入一个对象（虽然官方推荐是一个函数）
+ 在Vue3.x的时候，比如传入一个函数，否则就会直接在浏览器中报错；

​	**data中返回的对象会被Vue的响应式系统劫持，之后对该对象的修改或者访问都会在劫持中被处理：**

+ 所以我们在templater中通过{{counter}}访问counter，可以从对象中获取到数据；
+ 所以我们修改counter的值时，template中的{{counter}}也会发生改变；



### 5.3 methods

​	**methods属性是一个对象，通常我们会在这个对象中定义很多的方法：**

+ 这些方法可以**被绑定到template模板**中；
+ 在该方法中，我们可以**使用this关键字**来直接访问到data中返回的对象的属性；

::warning: **注意**，不应该使用箭头函数来定义method函数（例如plus:（()→this.a++）。理由是**箭头函数绑定了父级作用域的上下文**，所以this将不会按照期望指向组件实例，this.a将是undefined。

+ **箭头函数中的this指向 window**
  + this绑定规则   
    + 默认绑定
    + 隐式绑定
    + 显示绑定 call apply bind
    + new绑定
+ 普通函数中this指向 --->  组件实例上的代理对象（data-->proxy）
+ <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230318105441941.png" alt="image-20230318105441941" style="zoom: 50%;" />

## 6.vue 源码

### 6.1 git不能克隆权限问题

```git
git config --global http.sslVerify false
```

### 6.2 vue-next

```
https://github.com/vuejs/core
```

### 6.2 调试

+ 安装 pnpm 

  + npm i pnpm -g

+ 启动项目

  + pnpm dev

+ 添加文件

  + <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230318100322875.png" alt="image-20230318100322875" style="zoom:50%;" />

  + ```htlm
    <body>
    <duv id="App"></duv>
    <template id="xw-app">
    	<div>
    		<h2>{{message}}</h2>
    	</div>
    </template>
    	<script src="../../dist/vue.global.js"></script>
    	<script>
    		debugger
    		Vue.createApp({
    			template: '#xw-app',
    			data() {
    				return {
    					message: 'value',
    				};
    			},
    		}).mount('#App');
    	</script>
    </body>
    ```

+ --sourcemap(进入源代码)

  + <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230318100559460.png" alt="image-20230318100559460" style="zoom:50%;" />

## 7. vue3基本语法

### 7.1 mustache语法

如果我们希望把数据显示到模板（template）中，使用最多的语法是“"Mustache”语法（双大括号）的文本插值。

+ data返回的对象是有添加到ue的响应式系统中；
+ 当data中的数据发生改变时，对应的内容也会发生更新。
+ 当然，Mustache中不仅仅可以是data中的属性，也可以是一个JavaScript的表达式。

### 7.2 指令

+ **v-once指令**  用于指定元素或者组件只渲染一次：

  + 当数据发生变化时，元素或者组件以及其所有的子元素将视为静态内容并且跳过；
  + 该指令可以用于**性能优化**；

+ **v-text**  等价于mustache

+ **v-html** 展示内容本身html

  + 默认情况下，如果我们展示的内容本身是html的，那么vue并不会对其进行特殊的解析。如果我们希望这个内容被Vue可以解析出来，那么可以使用v-html来展示；

+ **v-pre** 

  + 跳过元素和它的子元素的编译过程，显示原始的Mustache标签

+ **v-cloak**

  + 这个指令保持在元素上直到关联组件实例结束编译。
  + 和CSS规则如[v-cloak]{display:none}一起用时，这个指令可以隐藏未编译的Mustache标签直到组件实例准备完毕。

+ **v-bind** 动态绑定某些属性的值

  + 比如a元素的href属性、img元素的src属性

  + 缩写  ：

  + <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230318115639151.png" alt="image-20230318115639151" style="zoom:50%;" />

  + **绑定class**

    + 对象语法：

      + ```js
        <div :class='{"active": true}'>
        ```

    + 数组语法：

      + ```js
        <div :class="['abc','cbd',isActive ? 'active':'']">
        <div :class="['abc','cbd',{isActive:true]">  // 数组语法可以嵌套对象语法
        ```

    + <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230318121327916.png" alt="image-20230318121327916" style="zoom:50%;" />

  + **绑定style**

    + 对象语法

      + ```html
        <div :style="{color: finalColor,'font-size':'30px'}">哈哈哈</div>
        <div :style="{color: finalColor,fontSize:'30px'}">哈哈哈</div>
        ```

      + <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230318122121437.png" alt="image-20230318122121437" style="zoom:50%;" />

    + 数组语法  将多个样式对象应用到同一个元素上；

      + <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230318122254278.png" alt="image-20230318122254278" style="zoom:50%;" />

  + **动态绑定属性**

    + 前端我们无论绑定src、href、class、style，属性名称都是固定的；如果属性名称不是固定的，我们可以使用：[属性名]=“值”的格式来定义这种绑定的方式，我们称之为动态绑定属性；
    + <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230318122813063.png" alt="image-20230318122813063" style="zoom:50%;" />

  + **直接绑定一个对象**

    + <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230318124449946.png" alt="image-20230318124449946" style="zoom:50%;" />

+ **v-on** 绑定事件-->交互

  + 缩写 @
  + 修饰符
    + .stop-调用event..stopPropagation（）
    + .prevent-调用event..preventDefault（）。
    + .capture-添加事件侦听器时使用capture模式。
    + .self-只当事件是从侦听器绑定的元素本身触发时才触发回调。
    + .{keyAlias}-仅当事件是从特定键触发时才触发回调。
    + .once-只触发一次回调。
    + .left-只当点击鼠标左键时触发。
    + .right-只当点击鼠标右键时触发。
    + .middle-只当点击鼠标中键时触发。
    + .passive-{passive:true}模式添加侦听器
  + **绑定一个对象**  可以给某一个元素添加多种事件
    + <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230318130253009.png" alt="image-20230318130253009" style="zoom:50%;" />
  + **绑定一个表达式**
    + <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230318130127569.png" alt="image-20230318130127569" style="zoom:50%;" />
  + **event对象**
    + 默认会传递一个event对象
    + 如果还需要传递其他参数，则可以使用$event传递
      + <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230318130917176.png" alt="image-20230318130917176" style="zoom:50%;" />


### 7.3 条件渲染

#### v-if、v-else、v-else-if

**v-if、v-else、v-else-if** 用于根据条件来渲染某一块的内容：

+ 这些内容只有在条件为true时，才会被渲染出来
+ 这三个指令与JavaScript的条件语句if、else、else if类似；

<img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230318191759140.png" alt="image-20230318191759140" style="zoom:50%;" />

**v-if的渲染原理**：

+ v-if是惰性的；
+ 当条件为false时，其判断的内容完全不会被渲染或者会被销毁掉；
+ 当条件为true时，才会真正渲染条件块中的内容；

**v-if使用在template上**

+ 因为v-if是一个指令，所以必须将其添加到一个元素上：
+ 但是如果我们希望切换的是多个元素
+ 此时我们渲染div，但是我们并不希望di这种元素被渲染；
+ 这个时候，我们可以选择使用template；

​	template元素可以当做不可见的包裹元素，并且在v-if上使用，但是最终template不会被渲染出来

#### v-show

​	v-show和v-if的用法看起来是一致的，也是根据一个条件决定是否显示元素或者组件。通过改变display：none来实现。

#### v-if和v-show的区别

+ v-show是不支持template。v-show不可以和v-else一起使用。
+ v-show元素无论是否需要显示到浏览器上，它的DOM实际都是有渲染的，只是通过CSS的display属性来进行切换；
+ v-if当条件为false时，其对应的原生压根不会被渲染到DOM中；
+ 开发中选择：如果我们的原生需要在显示和隐藏之间频繁的切换，那么使用v-show；如果不会频繁的发生切换，那么使用V-if；

### 7.4 列表渲染

#### 基本使用

+ v-for的基本格式是**"item in数组"**：

  + 数组通常是来自**data或者prop**，也可以是其他方式；

  + item是我们给每项元素起的一个**别名**，这个别名可以自定来定义；

+ <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230318203442504.png" alt="image-20230318203442504" style="zoom:50%;" />

+ 我们知道，在遍历一个数组的时候会经常需要拿到数组的索引：
  + 如果我们需要索引，可以使用格式："（item，index）in数组"；
  + 注意上面的顺序：数组元素项item是在前面的，索引项index是在后面的；
+ 类似于v-if，你可以使用**template**元素来循环渲染一段包含多个元素的内容：
  + 我们使用template：来对多个元素进行包裹，而不是使用div来完成；
  + <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230318205619858.png" alt="image-20230318205619858" style="zoom:50%;" />

#### 数组更新检测

​	Vue将被侦听的数组的变更方法进行了包裹，所以它们也将会触发视图更新。这些被包裹过的方法包括：push()、pop()、shift()、unshift()、splice()、sort()、reverse()

​	**替换数组的方法** 上面的方法会直接修改原来的数组，但是某些方法不会替换原来的数组，而是会生成新的数组，比如filter()、concat()和slice()，

#### v-for中key作用

​	在使用v-for进行列表渲染时，我们通常会给元素或者组件绑定一个key属性

​	::one:**vue3官方的解释：**

	+ key属性主要用在Vue的**虚拟DOM算法**，在**新旧nodes**对比时辨识**VNodes**； 
	+ 如果**不使用key**，Vue会使用一种最大限度减少动态元素并且尽可能的尝试就地**修改/复用相同类型元素**的算法
	+ 而**使用key**时，它会基于key的变化**重新排列元素顺序**，并且会**移除/销毁key**不存在的元素；

​	::two:**vnode概念**---> 虚拟节点

+ 事实上，无论是组件还是元素，它们最终在Vue中表示出来的都是一个个VNode；
+ VNode的本质是一个JavaScript对象
  + <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230319002337854.png" alt="image-20230319002337854" style="zoom:50%;" /><img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230319002518191.png" alt="image-20230319002518191" style="zoom:50%;" />

​	::three:**虚拟DOM ** --->做跨平台，可以在服务端渲染，也可在移动端进行渲染

​	如果我们不只是一个简单的div，而是有一大堆的元素，那么它们应该会形成一个**VNode Tree**

<img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230319002849157.png" alt="image-20230319002849157" style="zoom:50%;" />

::four:**插入F案例**

<img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230319102012188.png" alt="image-20230319102012188" style="zoom:50%;" />

上面的案例在更新时对于ui和button是不需要更新的，只需要更新li列表。

+ 在Vue中，对于相同父元素的子元素节点并不会重新渲染整个列表；
+ 因为对于列表中a、b、c、d它们都是没有变化的；
+ 在操作真实DOM的时候，我们只需要在中间插入一个f的li即可；

**vue中对于列表的更新操作如下：**

+ 对于有key和没有key会调用两个不同的方法
  + 判断是否有key
    + <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230319110511250.png" alt="image-20230319110511250" style="zoom:50%;" />

+ **有key**，那么就使用patchkeyedChildren方法 （比较中如果新旧都有值，则进行的是更新操作(update)，如果只有新节点，则进行的是挂载操作(mount),只有旧节点，则进行的是卸载操作(unmount))

  + **从头开始遍历（while），比较新旧节点是否相同（节点类型相同，并且key相同）**
    + 相同则，继续遍历执行patch操作
    + 不同则，跳出循环
    + ![image-20230319115223251](D:\a-study\study-code\09-vue3+T3\note\img\image-20230319115223251.png)
      + **从尾部开始遍历**
        + 相同则继续遍历
        + 不同则跳出循环
        + ![image-20230319115244315](D:\a-study\study-code\09-vue3+T3\note\img\image-20230319115244315.png)
    + **如果旧节点遍历完了，依然有新的节点，那么就创建新的节点并进行添加** 
      + ![image-20230319115314013](D:\a-study\study-code\09-vue3+T3\note\img\image-20230319115314013.png)
  +  **如果新的节点遍历完毕，但是依然有旧的节点，那么就移除旧节点**
    + ![image-20230319115353607](D:\a-study\study-code\09-vue3+T3\note\img\image-20230319115353607.png)

  + **特殊的情况，中间还有很多未知的或者乱序的节点：**
    + ![image-20230319115619405](D:\a-study\study-code\09-vue3+T3\note\img\image-20230319115619405.png)

<img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230319110542040.png" alt="image-20230319110542040" style="zoom:50%;" />



+ 没有key，那么就使用patchUnkeyedChildren方法
  + 获取新旧节点的长度
  + 比较哪个更短，拿更短的长度进行遍历
  + 每次取一个旧的和一个新的进行patch操作 --> 对比当前同层的虚拟节点是否为同一种类型的标签
    + 是：继续执行`patchVnode方法`进行深层比对
    + 否：没必要比对了，直接整个节点替换成`新虚拟节点`
  + 遍历完成后判断新旧哪个长度更短
    + 如果新的长度短则操作结束
    + 如果新的长度长则重新剩余元素直接添加到后面即可。

<img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230319110348096.png" alt="image-20230319110348096" style="zoom:50%;" />

**所以，Vue在进行diff算法的时候，会尽量利用我们的key来进行优化操作：**

+ 在没有key的时候我们的效率是非常低效的；
+ 在进行插入或者重置顺序的时候，保特相同的key可以让dff算法更加的高效；

### 7.5 computed 

​	**复杂data 的处理方式**

+ 在模板中可以直接通过插值语法显示一些data中的数据。
+ 但是在某些情况，我们可能需要对数据进行一些**转化后再显示，**或者需要**将多个数据结合**起来进行显示；
  + 比如我们需要对多个dta数据进行运算、三元运算符来决定结果、数据进行某种转化后显示；
  + 在模板中使用表达式，可以非常方便的实现，但是设计它们的初衷是用于简单的运算；
  + 在模板中放入太多的逻辑会让模板过重和难以维护；
  + 并且如果多个地方都使用到，那么会有大量重复的代码；
+ 解决办法
  + 将逻辑抽取到一个**method中**，放到methods的options中；但是，这种做法有一个直观的弊端，就是所有的data使用过程都会变成了一个方法的调用；
  + 另外一种方式就是使用计算属性**computed**

**计算属性与其他方法的比较**

+ 在模板语法中直接使用表达式

  + 模板中存在大量的复杂逻辑，不便于维护（模板中表达式的初衷是用于简单的计算）；

  + 当有多次一样的逻辑时，存在重复的代码；

  + 多次使用的时候，很多运算也需要多次执行，没有缓存；

  + ```html
    	<template id="my-app">
    		<div>
    				<h2>{{fistName+''+lastName}}</h2>
    				<h2>{{score > 60 ? '及格':'不及格'}}</h2>
    				<h2>{{message.split(' ').reverse().join(' ')}}</h2>
    		</div>
    	</template>
    ```

+ 使用method对逻辑进行抽离

  + 我们事实上先显示的是一个结果，但是都变成了一种方法的调用；

  + 多次使用方法的时候，没有缓存，也需要多次计算；

  + ```js
    methods: {
        getFullName() {
            return this.fistName + '' + this.lastName
        },
        getResult() {
            return this.score >=60 ? '及格': '不及格'
        },
        getReverseMessage() {
            return this.message.split(' ').reverse().join(' ');
         }
    },
    ```

+ 使用计算属性

  + 计算属性看起来像是一个函数，但是我们在使用的时候不需要加()

  + 我们会发现无论是直观上，还是效果上计算属性都是更好的选择

  + 并且计算属性是有缓存的；

    + 计算属性会基于data的依赖关系进行缓存。
    + 在数据不发生变化的时候，计算属性是不需要重新计算的
    + 但是如果依赖的数据发生变化时，在使用时，计算属性依然会重新进行计算

  + ```js
    			computed: {
      				fullName() {
      					return this.fullName + '' + this.lastName
      				},
      				result() {
      					return this.score >=60 ? '及格':'不及格'
      				},
      				reverseMessage() {
      					return this.message.split(' ').reverse().join(' ');
      				}
      			},
    ```

**计算属性的用法**

+ 选项： computed
+ 类型： {[key:string]:Function|{get:Function,set:Function}}

**计算属性的get和set方法**

+ ```js
  			computed: {
    				fullName() {
    					return this.firstName + ' ' + this.lastName
    				},
                      // 上面的写法相当于是下面get方法的简写
    				fullName: {
    					get: function() {
    						return this.firstName + ' ' + this.lastName
    					},
    					set: function(newval) {
    						console.log(newval);
    						const names = newval.split(' ');
    						this.firstName = names[0];
    						this.lastName = names[1]
    					}
    				}
    			},
  ```

### 7.6 watch

+ 开发中我们在data返回的对象中定义了数据，这个数据通过插值语法等方式绑定到template中；
+ 当数据变化时，templates会自动进行更新来显示最新的数据；
+ 但是在某些情况下，我们希望在代码逻辑中**监听某个数据的变化**，这个时候就需要用**侦听器wtch**来完成了；

**用法：** 类型：{[key:string]：string|Function|Object|Array}

**基本使用：**

<img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230319181435466.png" alt="image-20230319181435466" style="zoom:50%;" /><img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230319181447227.png" alt="image-20230319181447227" style="zoom:50%;" />

​	

**深度监听**  watch在侦听对象时，如果只是内部某个属性发生改变，则不会做出响应，就可以使用深度监听

+ **监听属性的值为对象**--> handler 监听函数，**deep是否深度监听**，immediate页面一进来就会立即监听。 
  + ![image-20230319183054468](D:\a-study\study-code\09-vue3+T3\note\img\image-20230319183054468.png)
  + 其中newValue,oldValue为引用对象类型时，所以指向的是同一个对象，所以打印出来结果一致。

+ **监听属性的值为字符串**  可以将该字符串对应的方法写在methods中进行调用
  + ![image-20230319184435396](D:\a-study\study-code\09-vue3+T3\note\img\image-20230319184435396.png)

+ **监听属性的值为数组时** 如果监听时有多个函数要执行，则可以使用数组，它们会逐一调用

  + <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230319184714037.png" alt="image-20230319184714037" style="zoom:50%;" />

+ **其他写法**

  + ![image-20230319185815401](D:/a-study/study-code/09-vue3+T3/note/image-20230319185815401.png)

  + 在created中使用this.$watchs()来监听
    + 第一个参数是要侦听的源；
    + 第二个参数是侦听的回调函数callback；
    + 第三个参数是额外的其他选项，比如deep、immediate；
    + ![image-20230319190641620](D:\a-study\study-code\09-vue3+T3\note\img\image-20230319190641620.png)

**综合案例--书籍**

![image-20230319191547950](D:\a-study\study-code\09-vue3+T3\note\img\image-20230319191547950.png)

```js
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<style>
		table ,th,tr,td{
			border: 1px solid black;
			text-align: center;
			border-collapse: collapse;
		}
		th,td {
			padding: 8px 16px ;
			text-align: left;
		}
	</style>
</head>
<body>
	<div id="App"></div>
	<template id="my-app">
		<template v-if="books.length >0">
			<table>
				<thead>
					<th></th>
					<th>书籍名称</th>
					<th>出版日期</th>
					<th>价格</th>
					<th>购买数量</th>
					<th>操作</th>
				</thead>
				<tbody>
						<tr v-for="(item,index) in filterBooks" :keys="index">
							<td>{{index+1}}</td>
							<td>{{item.bookName}}</td>
							<td>{{item.publishTime}}</td>
							<td>{{item.jiage}}</td>
							<td>
								<button :disabled="item.bugNum <= 1" @click="subFn(index)">-</button>
								<span style="margin:5px">{{item.bugNum}}</span>
								<button @click="addFun(index)">+</button>
							</td>
							<td>
								<button @click="removeFun(index)">删除</button>
							</td>
						</tr>
				</tbody>
			</table>
			<p>总价￥{{total}}</p>
		</template>
		<template v-else>
			<h2>购物车为空</h2>
		</template>
	</template>
	<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
	<script>
		Vue.createApp({
			template: '#my-app',
			data() {
				return {
					books: [
						{
							bookName:'算法导论',
							publishTime:'2022-10-09',
							jiage:20,
							bugNum:1
						},{
							bookName:'java高级程序设计',
							publishTime:'2022-04-13',
							jiage:67,
							bugNum:1
						},{
							bookName:'你不知道的javascript',
							publishTime:'2011-10-09',
							jiage:40,
							bugNum:1
						},{
							bookName:'代码大全',
							publishTime:'2018-11-09',
							jiage:20,
							bugNum:1
						}
					]
				};
			},
			computed: {
				total() {
					let finalPrice = 0
					for(var i = 0; i<this.books.length;i++) {
						finalPrice += this.books[i].bugNum *this.books[i].jiage
					}
					return finalPrice;
				},
				filterBooks() {
					return this.books.map(item => {
						const newItem = Object.assign({},item);
						newItem.jiage = '￥'+item.jiage
						return newItem
					});
				}
			},
			methods: {
				subFn(index) {
					this.books[index].bugNum--
				},
				addFun(index) {
					this.books[index].bugNum++
				},
				removeFun(index) {
					this.books.splice(index,1)
				}
			},
		}).mount('#App')
	</script>
</body>
</html>
```

**补充：监听数组中对象的某一个属性**

+ 通过创建一个组件，把data中数据的每一项传递过去，然后在组件中监听props中父组件传递过来的值即 可

![image-20230319202814001](D:\a-study\study-code\09-vue3+T3\note\img\image-20230319202814001.png)

### 7.7 v-model

#### 基本使用

表单提交是开发中非常常见的功能，也是和用户交互的重要手段：

+ 比如用户在**登录、注册**时需要提交账号密码；
+ 比如用户在**检索、创建、更新信息**时，需要提交一些数据；

这些都要求我们可以在代码逻辑中获取到用户提交的数据，我们通常会使用v-mod指令来完成：

+ v-model指令可以在表单input、textarea以及select元素上创建双向数据绑定；
+ 它会根据控件类型自动选取正确的方法来更新元素；
+ 尽管有些神奇，**但v-model本质上不过是语法糖**，它**负责监听用户的输入事件来更新数据**，并在某种极端场景下进行一些特殊处理；

![image-20230319224535679](D:\a-study\study-code\09-vue3+T3\note\img\image-20230319224535679.png)

#### v-model原理

+ v-bind绑定value属性的值；
+ v-on绑定input事件监听到函数中，函数会获取最新的值赋值到绑定的属性中；
+ ![image-20230319224630308](D:\a-study\study-code\09-vue3+T3\note\img\image-20230319224630308.png)

#### v-model绑定textarea

![image-20230319230115326](D:\a-study\study-code\09-vue3+T3\note\img\image-20230319230115326.png)

#### v-model绑定checkbox

+ **单个勾选框**
  + v-model即为布尔值。
  + 此时input的value：并不影响v-model的值。
  + ![image-20230319230213380](D:\a-study\study-code\09-vue3+T3\note\img\image-20230319230213380.png)
+ **多个复选框**
  + 当是多个复选框时，因为可以选中多个，所以对应的data中属性是一个数组
  + 当选中某一个时，就会将**input的value**添加到数组中
  + ![image-20230319230322611](D:\a-study\study-code\09-vue3+T3\note\img\image-20230319230322611.png)

#### v-model绑定radio

​	**用于选择其中一项；**

​	![image-20230319230358180](D:\a-study\study-code\09-vue3+T3\note\img\image-20230319230358180.png)

#### v-model绑定select

+ **单选**
  + v-model绑定的是一个值；
  +  当我们选中option中的一个时，会将它对应的value赋值到fruit中；
  + ![image-20230319230458582](D:\a-study\study-code\09-vue3+T3\note\img\image-20230319230458582.png)
+ 多选
  + v-model绑定的是一个数组；
  + 当选中多个值时，就会将选中的option对应的value添加到数组fruit中；
  + ![image-20230319230549087](D:\a-study\study-code\09-vue3+T3\note\img\image-20230319230549087.png)

#### v-model值绑定

目前我们在前面的案例中大部分的值都是在template中固定好的：

+ 比如gender的两个输入框值male、female；
+ 比如hobbies的三个输入框值basketball、football、tennis；
+ 在真实开发中，我们的数据可能是来自服务器的，那么我们就可以先将值请求下来，绑定到data返回的对象中，
  再**通过v-bind来进行值的绑定，这个过程就是值绑定**。

#### v-model修饰符

+ **lazy**
  + 默认情况下，v-model在进行双向绑定时，绑定的是input事件，那么会在每次内容输入后就将最新的值和绑定
    的属性进行同步；
  + 如果我们在v-model后跟上lazy修饰符，**那么会将绑定的事件切换为change 事件**，只有在提交时（比如回车）
    才会触发；
  + ![image-20230319233022606](D:\a-study\study-code\09-vue3+T3\note\img\image-20230319233022606.png)

+ **number**
  + message总是**string类型**，即使在我们设置**type为number也是string类型**；
  + 如果我们希望转换为**数字类型**，那么可以使用**.number** 修饰符：
  + 另外，在我们进行逻辑判断时，如果是一个string类型，在可以转化的情况下会进行隐式转换的：
    + 下面的score在进行判断的过程中会**进行隐式转化**的；
    + ![image-20230319233405124](D:\a-study\study-code\09-vue3+T3\note\img\image-20230319233405124.png)

+ **trim**

  + 如果要自动过滤用户输入的首尾空白字符，可以给v-model添加trim 修饰符：

  + ![image-20230319233859746](D:\a-study\study-code\09-vue3+T3\note\img\image-20230319233859746.png)

## 8.vue组件化

### 8.1 注册组件

**全局注册：**在任何其他的组件中都可以使用的组件 

+ 全局组件需要使用我们全局创建的app来注册组件；
+ 通过component方法传入组件名称、组件对象即可注册一个全局组件了；
+ 之后，我们可以在App组件的template中直接使用这个全局组件：
+ <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230322220006202.png" alt="image-20230322220006202" style="zoom:50%;" /><img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230322220020367.png" alt="image-20230322220020367" style="zoom:50%;" />
+ **定义组件名**的方式有两种：
  + **使用kebab-case（短横线分割符）**
    + 当使用kebab-case (短横线分隔命名) 定义一个组件时，你也必须在引用这个自定义元素时使用kebab-case，
      例如<my-component-name>；
  + **使用PascalCase（驼峰标识符）**
    + 当使用PascalCase (首字母大写命名) 定义一个组件时，你在引用这个自定义元素时两种命名法都可以使用。也
      就是说<my-component-name> 和<MyComponentName> 都是可接受的；

**局部注册：**只有在注册的组件中才能使用的组件； 

+ **全局组件往往是在应用程序一开始就会全局组件完成，那么就意味着如果某些组件我们并没有用到，也会一起被注**
  **册：**
  + 比如我们注册了三个全局组件：ComponentA、ComponentB、ComponentC；
  + 在开发中我们只使用了ComponentA、ComponentB，如果ComponentC没有用到但是我们依然在全局进行
    了注册，那么就意味着类似于webpack这种打包工具在打包我们的项目时，我们依然会对其进行打包；
  + 这样最终打包出的JavaScript包就会有关于ComponentC的内容，用户在下载对应的JavaScript时也会增加包
    的大小；
+ **所以在开发中我们通常使用组件的时候采用的都是局部注册：**
  + 局部注册是在我们需要使用到的组件中，通过components属性选项来进行注册；
  + 比如之前的App组件中，我们有data、computed、methods等选项了，事实上还可以有一个components选
    项；
  + 该components选项对应的是一个对象，对象中的键值对是组件的名称: 组件对象；
+ <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230322221733631.png" alt="image-20230322221733631" style="zoom:50%;" />

### 8.2 vue的开发模式

​	后缀名为.vue 的single-file components (单文件组件)

+ **如果我们想要使用SFC的.vue文件，比较常见的是两种方式：**
  + 方式一：**使用Vue CLI来创建项目**，项目会默认帮助我们配置好所有的配置选项，可以在其中直接使用.vue文件；
  + 方式二：自己**使用webpack或rollup或vite这类打包工具**，对其进行打包处理；
+ 我们最终，无论是后期我们做项目，还是在公司进行开发，通常都会采用Vue CLI的方式来完成。

### 8.3 组件的通信

![image-20230416172733920](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416172733920.png)

#### 8.3.1 父组件传递给子组件

​	**通过props来完成组件之间的通信；**

+ Props是你可以在组件上注册一些自定义的attribute；
+ 父组件给这些attribute赋值，子组件通过attribute的名称获取到对应的值；
  + **Props有两种常见的写法：**
    + 方式一：字符串数组，数组中的字符串就是attribute的名称；
      + ![image-20230416173019803](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416173019803.png)
    + 方式二：对象类型，对象类型我们可以在指定attribute名称的同时，指定它需要传递的类型、是否是必须的、默认值等等；
      + ![image-20230416173053097](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416173053097.png)
      + type的类型
        + String
        + Number
        + Boolean
        + Array
        + Object
        + Date
        + Function
        + Symbol
      + 对象类型的其他写法
        + ![image-20230416173203171](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416173203171.png)
        + ![image-20230416173209817](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416173209817.png)
      + Prop 的大小写命名
        + HTML 中的attribute 名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符；
        + 这意味着当你使用DOM 中的模板时，camelCase (驼峰命名法) 的prop 名需要使用其等价的kebab-case (短
          横线分隔命名) 命名；
        + ![image-20230416173328518](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416173328518.png)

**非Prop的Attribute**

​	当我们传递给一个组件某个属性，但是该属性并没有定义对应的props或者emits时，就称之为非Prop的Attribute；常见的包括class、style、id属性等；

+ Attribute继承：当组件有单个根节点时，非Prop的Attribute将自动添加到根节点的Attribute中：
+ ![image-20230416173623455](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416173623455.png)
+ **禁用Attribute继承和多根节点**
  + 如果我们不希望组件的根元素继承attribute，可以在组件中设置inheritAttrs: false：
    + 禁用attribute继承的常见情况是需要将attribute应用于根元素之外的其他元素；
    + 可以通过$attrs来访问所有的非props的attribute；
    + ![image-20230416173752155](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416173752155.png)
  + **多个根节点的attribute**
    + 多个根节点的attribute如果没有显示的绑定，那么会报警告，我们必须手动的指定要绑定到哪一个属性上：
    + ![image-20230416173835014](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416173835014.png)

#### 8.3.2 子组件传递给父组件

+ 首先，我们需要在子组件中定义好在某些情况下触发的事件名称；
+ 其次，在父组件中以v-on的方式传入要监听的事件名称，并且绑定到对应的方法中；
+ 最后，在子组件中发生某个事件的时候，根据事件名称触发对应的事件；
+ <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230416175017056.png" alt="image-20230416175017056" style="zoom:50%;" /><img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230416175031430.png" alt="image-20230416175031430" style="zoom:50%;" />

​	

+ 传参
  + ![image-20230416175125832](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416175125832.png)



+ 验证参数![image-20230416175215618](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416175215618.png)

#### 8.3.3 非父子组件的通信

+ **Provide/Inject；  用于非父子组件之间共享数据：**

  + 比如有一些深度嵌套的组件，子组件想要获取父组件的部分内容；在这种情况下，如果我们仍然将props沿着组件链逐级传递下去，就会非常的麻烦；对于这种情况下，我们可以使用Provide 和Inject ：
  + 无论层级结构有多深，父组件都可以作为其所有子组件的**依赖提供者**；父组件有一个**provide 选项**来提供数据；子组件有一个**inject 选项**来开始使用这些数据；
  + ![image-20230416175732965](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416175732965.png)
  + 如果Provide中提供的一些数据是来自data，那么我们可能会想要通过this来获取：那么**Provide就必须是一个函数**
    + ![image-20230416175900305](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416175900305.png)
    + **处理响应式数据**
      + 如果我们修改了this.names的内容，那么使用length的子组件是不会响应式的，这是因为当我们修改了names之后，之前在provide中引入的this.names.length 本身并不是响应式的；可以使用响应式的一些API来完成这些功能，**比如说computed函数；**
      + ![image-20230416180207656](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416180207656.png)![image-20230416180236525](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416180236525.png)
      + 需要配置
      + ![image-20230416180323440](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416180323440.png)

+ **Mitt全局事件总线；**

  + Vue3从实例中移除了$on、$off 和$once 方法，所以我们如果希望继续使用全局事件总线，要通过第三方的库：Vue3官方有推荐一些库，例如mitt 或tiny-emitter；

  + **mitt库**

    + 安装`npm install mitt`

    + 封装一个工具eventbus.js：

      + ![image-20230416180515459](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416180515459.png)

      + 在App.vue中触发事件；在Home.vue中监听事件；

        + <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230416182112743.png" alt="image-20230416182112743" style="zoom:50%;" /><img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230416182117331.png" alt="image-20230416182117331" style="zoom:50%;" />

        + 取消掉之前注册的函数监听
          + ![image-20230416182237486](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416182237486.png)

### 8.4 插槽

​	插槽的使用过程其实是**抽取共性、预留不同；**将共同的元素、内容依然在组件内进行封装；同时会将不同的元素使用slot作为占位，让外部决定到底显示什么样的元素；

+ 使用

  + Vue中将<slot> 元素作为承载分发内容的出口；
  + 在封装组件中，使用特殊的元素<slot>就可以为封装组件开启一个插槽；
  + 该插槽插入什么内容取决于父组件如何使用；

+ 基本使用

  + 一个组件MySlotCpn.vue：该组件中有一个插槽，我们可以在插槽中放入需要显示的内容；在App.vue中使用它们：我们可以插入普通的内容、html元素、组件元素，都可以是可以的；
  + <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230416182754111.png" alt="image-20230416182754111" style="zoom:50%;" /><img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230416182804118.png" alt="image-20230416182804118" style="zoom:50%;" />
  + **插槽的默认内容**
    + 有时候我们希望在使用插槽时，如果没有插入对应的内容，那么我们需要显示一个默认的内容：
    + ![image-20230416182915386](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416182915386.png)

  + **多个插槽的效果**
    + 如果一个组件中含有多个插槽，我们插入多个内容时，会发现默认情况下每个插槽都会获取到我们插入的内容来显示；
    + ![image-20230416183016403](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416183016403.png)
  + **具名插槽的使用**
    + 具名插槽顾名思义就是给插槽起一个名字，<slot> 元素有一个特殊的attribute：name；
    + 一个不带name 的slot，会带有隐含的名字default；
    + ![image-20230416183123515](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416183123515.png)
    + 缩写：把参数之前的所有内容(v-slot:) 替换为字符#；

  + **动态插槽名**
    + 可以通过v-slot:[dynamicSlotName]方式动态绑定一个名称；
    + ![image-20230416183202760](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416183202760.png)

  + **渲染作用域**

    + 父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的；
    + ![image-20230416183511950](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416183511950.png)

  + **作用域插槽**

    + 当一个组件被用来渲染一个数组元素时，我们使用插槽，并且希望插槽中没有显示每项的内容；这个Vue给我们提供了作用域插槽；
    + 案例：
      + 1.在App.vue中定义好数据
      + 2.传递给ShowNames组件中
      + 3.ShowNames组件中遍历names数据
      + 4.定义插槽的prop
      + 5.通过v-slot:default的方式获取到slot的props
      + 6.使用slotProps中的item和index
      + ![image-20230416183712995](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416183712995.png)

    + **独占默认插槽的缩写**
      + 如果我们的插槽是默认插槽default，那么在使用的时候v-slot:default="slotProps"可以简写为vslot="slotProps"：
      + ![image-20230416185038010](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416185038010.png)
      + 并且如果我们的插槽只有默认插槽时，组件的标签可以被当做插槽的模板来使用，这样，我们就可以将v-slot 直接用在组件上：
      + ![image-20230416185131019](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416185131019.png)

    + **默认插槽和具名插槽混合**

      + 如果有默认插槽和具名插槽，那么按照完整的template来编写。
      + ![image-20230416185228406](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416185228406.png)

      + 只要出现多个插槽，那么所有的插槽使用完整的基于<template> 的语法：
      + ![image-20230416185321490](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416185321490.png)

### 8.5 动态组件

​	实现了一个功能：点击一个tab-bar，切换不同的组件显示；

​	![image-20230416185459911](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416185459911.png)

+ **方式一**通过v-if来判断，显示不同的组件；
  + ![image-20230416185601059](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416185601059.png)
+ **方式二**动态组件的方式；
  + 动态组件是使用**component 组件**，通过一个特殊的attribute **is** 来实现：
  + ![image-20230416185651115](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416185651115.png)
  + **这个currentTab的值需要是**
    + 可以是通过component函数注册的组件；
    + 在一个组件对象的components对象中注册的组件；
  + **动态组件的传值**
    + ![image-20230416185821431](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416185821431.png)

### 8.6 keep-alive

​	在切换组件时，about组件会被销毁掉，再次回来时会重新创建组件；但是，在开发中某些情况我们希望继续保持组件的状态，而不是销毁掉，这个时候我们就可以使用一个内置组件：keep-alive。

​	![image-20230416190015701](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416190015701.png)

+ **keep-alive属性**

  + **include** - string | RegExp | Array。只有名称匹配的组件会被缓存；

  + **exclude** - string | RegExp | Array。任何名称匹配的组件都不会被缓存；
  + **max** - number | string。最多可以缓存多少组件实例，一旦达到这个数字，那么缓存组件中最近没有被访问的实例会被销毁；

+ include 和exclude prop 允许组件有条件地缓存：二者都可以用逗号分隔字符串、正则表达式或一个数组来表示；匹配首先检查组件自身的name 选项；
  + ![image-20230416190230660](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416190230660.png)
+ **缓存组件的生命周期**
  + 对于缓存的组件来说，再次进入时，我们是不会执行created或者mounted等生命周期函数的：
  + 但是有时候我们确实希望监听到何时重新进入到了组件，何时离开了组件；
  + 这个时候我们可以使用activated 和deactivated 这两个生命周期钩子函数来监听；
  + ![image-20230416190337375](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416190337375.png)

### 8.7异步组件

​	对于某些组件我们希望通过异步的方式来进行加载（目的是可以对其进行分包处理），那么Vue中给我们提供了一个函数：defineAsyncComponent。

+ **defineAsyncComponent**接受两种类型的参数：
  + 类型一：工厂函数，该工厂函数需要返回一个Promise对象；
    + ![image-20230422122026872](D:\a-study\study-code\09-vue3+T3\note\img\image-20230422122026872.png)
  + 类型二：接受一个对象类型，对异步函数进行配置；
    + ![image-20230422122041639](D:\a-study\study-code\09-vue3+T3\note\img\image-20230422122041639.png)
+ **Suspense组件**
  + Suspense是一个内置的全局组件，该组件有两个插槽：
    + default：如果default可以显示，那么显示default的内容；
    + fallback：如果default无法显示，那么会显示fallback插槽的内容；
  + ![image-20230422122203164](D:\a-study\study-code\09-vue3+T3\note\img\image-20230422122203164.png)

## 9. Webpack的代码分包

+ 默认的打包过程：
  + 默认情况下，在构建整个组件树的过程中，因为组件和组件之间是通过模块化直接依赖的，那么webpack在打包时就会将组
    件模块打包到一起（比如一个app.js文件中）；
  + 这个时候随着项目的不断庞大，app.js文件的内容过大，会造成首屏的渲染速度变慢；
+ 打包时，代码的分包：
  + 所以，对于一些不需要立即使用的组件，我们可以单独对它们进行拆分，拆分成一些小的代码块chunk.js；
  +  这些chunk.js会在需要时从服务器加载下来，并且运行代码，显示对应的内容；
  + ![image-20230416190707526](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416190707526.png)

+ **Vue中实现异步组件**
  + 如果我们的项目过大了，对于某些组件我们希望通过异步的方式来进行加载（目的是可以对其进行分包处理），那么Vue中给我们提供了一个函数：**defineAsyncComponent**。
  + **defineAsyncComponent接受两种类型的参数：**
    + 类型一：工厂函数，该工厂函数需要返回一个Promise对象；
    + ![image-20230416190832843](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416190832843.png)
    + 类型二：接受一个对象类型，对异步函数进行配置；
    + ![image-20230416190841005](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416190841005.png)
+ **异步组件和Suspense**
  + Suspense是一个内置的全局组件，该组件有两个插槽：
    + default：如果default可以显示，那么显示default的内容；
    + fallback：如果default无法显示，那么会显示fallback插槽的内容；
    + ![image-20230416191039041](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416191039041.png)

## 10.$refs、$parent、$root

+ $refs
  + 某些情况下，我们在组件中想要直接获取到元素对象或者子组件实例：在Vue开发中我们是不推荐进行DOM操作的；这个时候，我们可以给元素或者组件绑定一个ref的attribute属性；
  + 组件实例有一个$refs属性：它一个对象Object，持有注册过ref attribute 的所有DOM 元素和组件实例。
    + ![image-20230416191446302](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416191446302.png)
+ $parent、$root
  + 我们可以通过$parent来访问父元素。
  + 这里我们也可以通过$root来实现，因为App是我们的根组件；
  + ![image-20230416191524613](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416191524613.png)
+ 注意：在Vue3中已经移除了$children的属性，所以不可以使用了。

## 11. 生命周期

+ 什么是生命周期

  每个组件都可能会经历从创建、挂载、更新、卸载等一系列的过程；在这个过程中的某一个阶段，用于可能会想要添加一些属于自己的代码逻辑（比如组件创建完后就请求一些服务器数据），Vue给我们提供了组件的生命周期函数；

+ **生命周期函数：**

  + 生命周期函数是一些钩子函数，在某个时间会被Vue源码内部进行回调；
  + 通过对生命周期函数的回调，我们可以知道目前组件正在经历什么阶段；
  + 那么我们就可以在该生命周期中编写属于自己的逻辑代码了；

+ <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230416191803914.png" alt="image-20230416191803914" style="zoom:50%;" /><img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230416191808469.png" alt="image-20230416191808469" style="zoom:50%;" />

## 12. 组件的v-model

当我们在组件上使用v-model的时候，等价于如下的操作：

![image-20230416191928897](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416191928897.png)

那么，为了我们的MyInput组件可以正常的工作，这个组件内的<input> 必须：

+ 将其value attribute 绑定到一个名叫modelValue 的prop 上；

+ 其input 事件被触发时，将新的值通过自定义的update:modelValue 事件抛出；
+ ![image-20230416211831233](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416211831233.png)
+ ![image-20230416211837202](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416211837202.png)
+ **通过computed实现**
  + ![image-20230416212003503](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416212003503.png)

+ **绑定多个属性**
  + 如果我们希望绑定更多，可以给v-model传入一个参数，那么这个参数的名称就是我们绑定属性的名称；
  + ![image-20230416212102110](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416212102110.png)
  + **v-model:title相当于做了两件事：**
    + 绑定了title属性；
    + 监听了@update:title的事件；
    + ![image-20230416212144893](D:\a-study\study-code\09-vue3+T3\note\img\image-20230416212144893.png)

## 13.过渡和动画

+ 在开发中，我们想要给一个组件的显示和消失添加某种过渡动画，可以很好的增加用户体验：
  + React框架本身并没有提供任何动画相关的API，所以在React中使用过渡动画我们需要使用一个第三方库react-transition-group；
  + Vue中为我们提供一些内置组件和对应的API来完成动画，利用它们我们可以方便的实现过渡动画效果；

### 13.1 vue的transition动画

+ Vue 提供了transition 的封装组件，在下列情形中，可以给任何元素和组件添加进入/离开过渡：
  + **条件渲染(使用v-if)条件展示(使用v-show)**
    + ![image-20230422133441524](D:\a-study\study-code\09-vue3+T3\note\img\image-20230422133441524.png)
    + ![image-20230422133448500](D:\a-study\study-code\09-vue3+T3\note\img\image-20230422133448500.png)
  + **动态组件**
    + ![image-20230422182725385](D:\a-study\study-code\09-vue3+T3\note\img\image-20230422182725385.png)
  + **组件根节点**
+ **Transition组件的原理**
  + 当插入或删除包含在transition 组件中的元素时，Vue 将会做以下处理：
    + 1.自动嗅探目标元素是否应用了CSS过渡或者动画，如果有，那么在恰当的时机添加/删除CSS类名；
    + 2.如果transition 组件提供了JavaScript钩子函数，这些钩子函数将在恰当的时机被调用；
    + 3.如果没有找到JavaScript钩子并且也没有检测到CSS过渡/动画，DOM插入、删除操作将会立即执行；



+ **过渡动画class**
  + Vue就是帮助我们在这些class之间来回切换完成的动画：
  + v-enter-from：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。
  + v-enter-active：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。
  + v-enter-to：定义进入过渡的结束状态。在元素被插入之后下一帧生效(与此同时v-enter-from 被移除)，在过渡/动画完成之后移除。
  + v-leave-from：定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。
  + v-leave-active：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。
  + v-leave-to：离开过渡的结束状态。在离开过渡被触发之后下一帧生效(与此同时v-leave-from 被删除)，在过渡/动画完成之后移除。
  
+ **class添加的时机和命名规则**
  + ![image-20230422134832095](D:\a-study\study-code\09-vue3+T3\note\img\image-20230422134832095.png)
    + 如果我们使用的是一个没有name的transition，那么所有的class是以v- 作为默认前缀；
    + 如果我们添加了一个name属性，比如<transtion name="why">，那么所有的class会以why- 开头；
  
+ **通过animation实现动画**
  + ![image-20230422182223793](D:\a-study\study-code\09-vue3+T3\note\img\image-20230422182223793.png)![image-20230422182227529](D:\a-study\study-code\09-vue3+T3\note\img\image-20230422182227529.png)
  
+ **同时设置过渡和动画**
  + 如果我们同时使用了过渡和动画，并且在这个情况下可能某一个动画执行结束时，另外一个动画还没有结束；在这种情况下，我们可以设置type 属性为animation 或者transition 来明确的告知Vue监听的类型；
  + ![image-20230422182357416](D:\a-study\study-code\09-vue3+T3\note\img\image-20230422182357416.png)
  
+ **显示的指定动画时间**
  + 指定过渡的时间，通过duration 属性。duration可以设置两种类型的值：
    + number类型：同时设置进入和离开的过渡时间；
    + object类型：分别设置进入和离开的过渡时间；
    + ![image-20230422182536550](D:\a-study\study-code\09-vue3+T3\note\img\image-20230422182536550.png)<img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230422182541277.png" alt="image-20230422182541277" style="zoom:50%;" />

+ **过渡的模式mode**
  + 当动画在两个元素之间切换的时候存在的问题：![image-20230422182641493](D:\a-study\study-code\09-vue3+T3\note\img\image-20230422182641493.png)
  + 这是因为默认情况下进入和离开动画是同时发生的；如果我们不希望同时执行进入和离开动画，那么我们需要设置transition的过渡模式：
    + in-out: 新元素先进行过渡，完成之后当前元素过渡离开；
    + out-in: 当前元素先进行过渡，完成之后新元素过渡进入；
    + <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230501101909783.png" alt="image-20230501101909783" style="zoom:50%;" />
  
+ **appear初次渲染**
  + 默认情况下，首次渲染的时候是没有动画的，如果我们希望给他添加上去动画，那么就可以增加另外一个属性appear：
  + ![image-20230422182834445](D:\a-study\study-code\09-vue3+T3\note\img\image-20230422182834445.png)

+ **animate.css库的使用**

  + 安装 `npm install animate.css`
  + 在main.js中导入animate.css：
  + 用法：
    + 用法一：直接使用animate库中定义的keyframes 动画；
      + ![image-20230501105039101](D:\a-study\study-code\09-vue3+T3\note\img\image-20230501105039101.png)
    + 用法二：直接使用animate库提供给我们的类；
      + ![image-20230501105050896](D:\a-study\study-code\09-vue3+T3\note\img\image-20230501105050896.png)

+ **gsap库**

  + 可以通过JavaScript为CSS属性、SVG、Canvas等设置动画，并且是浏览器兼容的；

  + 安装 `npm install gsap`

  + transition组件提供的JavaScript钩子

    + <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230501224302147.png" alt="image-20230501224302147" style="zoom:50%;" /><img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230501224320363.png" alt="image-20230501224320363" style="zoom:50%;" /><img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230501224326145.png" alt="image-20230501224326145" style="zoom:50%;" />

    + 当我们使用JavaScript来执行过渡动画时，需要进行done 回调，否则它们将会被同步调用，过渡会立即完成。
    + 添加**:css="false"，也会让Vue 会跳过CSS 的检测**，除了**性能略高**之外，这可以避免过渡过程中CSS 规则的影响。

  + gsap库的使用

    + ![image-20230501224530269](D:\a-study\study-code\09-vue3+T3\note\img\image-20230501224530269.png)![image-20230501224534681](D:\a-study\study-code\09-vue3+T3\note\img\image-20230501224534681.png)
    + **gsap实现数字变化**
      + ![image-20230501224612576](D:\a-study\study-code\09-vue3+T3\note\img\image-20230501224612576.png)
      + ![image-20230501224617630](D:\a-study\study-code\09-vue3+T3\note\img\image-20230501224617630.png)

+ **列表的过渡**

  + 如果希望渲染的是一个列表，并且该列表中添加删除数据也希望有动画执行,这个时候我们要使用<transition-group> 组件来完成；

  + 使用<transition-group> 有如下的特点：

    + 默认情况下，它不会渲染一个元素的包裹器，但是你可以指定一个元素并以tag attribute 进行渲染；
    + 过渡模式(model)不可用，因为我们不再相互切换特有的元素；
    + 内部元素总是需要提供唯一的key attribute 值；
    + CSS 过渡的类将会应用在内部的元素中，而不是这个组/容器本身；

  + **列表删除添加洗牌**

    + ```html
      <template>
      	<div>
      		<button  @click='add'>添加元素</button>
      		<button @click="sub">删除元素</button>
      		<button @click="change">打乱元素</button>
      		<transition-group tag="p" name="xw">
      			<span v-for="(item) in number" :key="item" class="span">{{item}}</span>
      		</transition-group>
      	</div>
      </template>
      
      <script>
      import gsap from 'gsap';
      import _ from 'lodash'
      export default {
      	name: '09Vue3T3App3',
      
      	data() {
      		return {
      			number: [1,2,3,4],
      			numberCon: 4
      		};
      	},
      	mounted() {
      		
      	},
      
      	methods: {
      		randomNum() {
      			return Math.floor(Math.random()*this.number.length);
      		},
      		add() {
      			this.number.splice(this.randomNum(),0,this.numberCon++)
      		},
      		sub() {
      			this.number.splice(this.randomNum(),1);
      		},
      		change() {
      			this.number = _.shuffle(this.number)
      		}
      	},
      };
      </script>
      
      <style scoped>
      span{
      	display: inline-block;
      	margin-right: 20px;
      }
      .xw-enter-from,
      .xw-leave-to {
      	opacity: 0;
      	transform: translateY(30px);
      }
      .xw-leave-active,
      .xw-enter-active {
      	transition: all 1s ease;
      }
      .xw-move {
      	transition: transform 1s ease;
      }
      </style>
      ```

  + **列表交错过渡案例**

    + ```js
      <template>
      	<div>
      		<input type="text" v-model="inputText">
      		<transition-group tag="ul" name="xw" :css="false" 		@enter="enter"
      															@leave="leave"
      																						@befor-enter = "beforEnter">
      			<li v-for="(item,index) in showTest" :key="item" :data-index = "index">{{item}}</li>
      		</transition-group>
      	</div>
      </template>
      
      <script>
      import gsap from 'gsap'
      export default {
      	name: '09Vue3T3App',
      
      	data() {
      		return {
      			inputText:'',
      			test: ['abc','cba','xuewen','dsg','apple','lilei','hanmeimei']
      		};
      	},
      computed: {
      	showTest() {
      		return this.test.filter(item => {
      			return item.indexOf(this.inputText) != -1
      		})
      	}
      },
      	mounted() {
      		
      	},
      
      	methods: {
      		beforEnter (el) {
      			el.style.opacity = 0;
      			el.style.height = 0;
      		},
      		enter(el,done) {
      			gsap.to(el,{
      				opacity: 1,
      				height: "1.5em",
      				delay:el.dataset.index * 0.5,
      				onComplete: done
      			}) 
      		},
      		leave(el,done) {
      			gsap.to(el,{
      				opacity: 0,
      				height: 0,
      				delay:el.dataset.index * 0.5,
      				onComplete: done
      			}) 
      		}
      	},
      };
      </script>
      
      <style scoped>
      ul {
      	font-size: 24px;
      }
      </style>
      ```

## 14. mixin、extends

### 14.1 mixin

​	组件和组件之间有时候会存在相同的代码逻辑，我们希望对相同的代码逻辑进行抽取。在Vue2和Vue3中都支持的一种方式就是使用Mixin来完成：

+ Mixin提供了一种非常灵活的方式，来**分发Vue组件中的可复用功能；**
+ 一个Mixin对象可以包含**任何组件选项；**
+ 当组件使用Mixin对象时，所有**Mixin对象的选项将被混合进入该组件本身的选项**中；

![image-20230502103912041](D:\a-study\study-code\09-vue3+T3\note\img\image-20230502103912041.png)

+ **Mixin的合并规则**
  + 情况一：如果是data函数的返回值对象
    + 返回值对象默认情况下会进行合并；
    + 如果data返回值对象的属性发生了冲突，那么会保留组件自身的数据；
  + 情况二：如何生命周期钩子函数
    + 生命周期的钩子函数会被合并到数组中，都会被调用；
  + 情况三：值为对象的选项，例如methods、components 和directives，将被合并为同一个对象。
    + 比如都有methods选项，并且都定义了方法，那么它们都会生效；
    + 但是如果对象的key相同，那么会取组件对象的键值对；
+ **全局混入Mixin**
  + 如果组件中的某些选项，是所有的组件都需要拥有的，那么这个时候我们可以使用全局的mixin：
    + 全局的Mixin可以使用应用app的方法mixin 来完成注册；
    + 一旦注册，那么全局混入的选项将会影响每一个组件；
  + ![image-20230502104453070](D:\a-study\study-code\09-vue3+T3\note\img\image-20230502104453070.png)

### 14.2 extends

允许声明扩展另外一个组件，类似于Mixins；

![image-20230502104545257](D:\a-study\study-code\09-vue3+T3\note\img\image-20230502104545257.png)

## 15. Composition API

### 15.1 Options API的弊端

在Vue2中，我们编写组件的方式是Options API：

+ Options API的一大特点就是在对应的属性中编写对应的功能模块；
+ 比如data定义数据、methods中定义方法、computed中定义计算属性、watch中监听属性改变，也包括生命周期钩子；

但是这种代码有一个很大的弊端：

+ 当我们实现某一个功能时，这个功能对应的代码逻辑会被拆分到各个属性中；
+ 当我们组件变得更大、更复杂时，逻辑关注点的列表就会增长，那么同一个功能的逻辑就会被拆分的很分散；
+ 尤其对于那些一开始没有编写这些组件的人来说，这个组件的代码是难以阅读和理解的（阅读组件的其他人）；
+ 这种碎片化的代码使用理解和维护这个复杂的组件变得异常困难，并且隐藏了潜在的逻辑问题；
+ 并且当我们处理单个逻辑关注点时，需要不断的跳到相应的代码块中；

**将同一个逻辑关注点相关的代码收集在一起，这就是Composition API想要做的事情，以及可以帮助我们完成的事情。**

### 15.2 setup函数

+ **setup函数的参数**

  + 第一个参数：**props**
    + 父组件传递过来的属性会被放到props对象中，我们在setup中如果需要使用，那么就可以直接通过props参数获取：
      + 对于定义props的类型，还是和之前的规则是一样的，在props选项中定义；
      + 并且在template中依然是可以正常去使用props中的属性，比如message；
      + 如果我们在setup函数中想要使用props，那么不可以通过this 去获取
      + 因为props有直接作为参数传递到setup函数中，所以我们可以直接通过参数来使用即可；
  + 第二个参数：**context**，，我们也称之为是一个SetupContext，它里面包含三个属性：
    + attrs：所有的非prop的attribute；
    + slots：父组件传递过来的插槽（这个在以渲染函数返回时会有作用）
    + emit：当我们组件内部需要发出事件时会用到emit（因为我们不能访问this，所以不可以通过this.$emit发出事件）；

+ **setup函数的返回值**

  + setup的返回值可以**在模板template**中被使用；也就是说我们可以通过setup的返回值来**替代data选项**；甚至是我们可以**返回一个执行函数**来代替在methods中定义的方法：

    + ![image-20230502105929497](D:\a-study\study-code\09-vue3+T3\note\img\image-20230502105929497.png)![image-20230502105934508](D:\a-study\study-code\09-vue3+T3\note\img\image-20230502105934508.png)

    + 将counter 在increment 或者decrement进行操作时，是不能实现界面的响应式的。因为对于一个定义的变量来说，默认情况下，Vue并不会跟踪它的变化，来引起界面的响应式操作；可通过**Reactive API、Ref API**
+ **在setup中使用ref获取元素或者组件**
  + 只需要定义一个ref对象，绑定到元素或者组件的ref属性上即可；
  + ![image-20230503115648341](D:\a-study\study-code\09-vue3+T3\note\img\image-20230503115648341.png)


### 15.3 reactive API

如果想为在setup中定义的数据提供响应式的特性，那么我们可以使用reactive的函数：

![image-20230502110904378](D:\a-study\study-code\09-vue3+T3\note\img\image-20230502110904378.png)

+ 这是因为当我们使用reactive函数处理我们的数据之后，数据再次被使用时就会进行依赖收集；
+ 当数据发生改变时，所有收集到的依赖都是进行对应的响应式操作（比如更新界面）；
+ 事实上，我们编写的data选项，也是在内部交给了reactive函数将其编程响应式对象的；

### 15.4 Ref API

​	reactive API对传入的类型是有限制的，它要求我们**必须传入的是一个对象或者数组类型**：如果我们传入一个基本数据类型（String、Number、Boolean）会报一个警告；

+ ref 会返回一个可变的响应式对象，该对象作为一个响应式的引用维护着它内部的值，这就是ref名称的来源；
+ 它内部的值是在ref的value 属性中被维护的；
+ ![image-20230502111112012](D:\a-study\study-code\09-vue3+T3\note\img\image-20230502111112012.png)
+ **注意：**
  + 在**模板中引入ref的值时**，Vue会自动帮助我们进行解包操作，所以我们并不需要在模板中**通过ref.value** 的方式来使用；
    + 模板中的解包是**浅层的解包**，如果我们的代码是下面的方式：
    + <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230502111313311.png" alt="image-20230502111313311" style="zoom:50%;" />
    + 如果我们将ref放到一个reactive的属性当中，那么在模板中使用时，它会自动解包：
      + <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230502111325881.png" alt="image-20230502111325881" style="zoom:50%;" />
  + 但是**在setup 函数内部，**它依然是一个ref引用， 所以对其进行操作时，我们**依然需要使用ref.value的方式；**

#### 15.4.1 ref其他的API

+ **unref**
  + 如果我们想要获取一个ref引用中的value，那么也可以通过unref方法：
    + 如果参数是一个ref，则返回内部值，否则返回参数本身；
    + 这是val = isRef(val) ? val.value : val 的语法糖函数；
+ **isRef**
  + 判断值是否是一个ref对象。
+ **shallowRef**
  + 创建一个浅层的ref对象；
+ **triggerRef**
  + 手动触发和shallowRef 相关联的副作用：
  + ![image-20230503103217773](D:\a-study\study-code\09-vue3+T3\note\img\image-20230503103217773.png)

### 15.5 readonly

​	我们通过reactive或者ref可以获取到一个响应式的对象，但是某些情况下，我们传入给其他地方（组件）的这个响应式对象希望在另外一个地方（组件）被使用，但是不能被修改，就可以使用readonly，**readonly会返回原生对象的只读代理**（也就是它依然是一个Proxy，这是一个proxy的set方法被劫持，并且不能对其进行修改）；

+ 在开发中常见的readonly方法会传入三个类型的参数：
  + 类型一：普通对象；
  + 类型二：reactive返回的对象；
  + 类型三：ref的对象；
+ 在readonly的使用过程中，有如下规则：
  + readonly返回的对象都是不允许修改的；
  + 但是经过readonly处理的原来的对象是允许被修改的；
    + 比如const info = readonly(obj)，info对象是不允许被修改的；
    + 当obj被修改时，readonly返回的info对象也会被修改；
    + 但是我们不能去修改readonly返回的对象info；
  + 其实本质上就是readonly返回的对象的setter方法被劫持了而已；
  + <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230502111711271.png" alt="image-20230502111711271" style="zoom:50%;" />
  + <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230502111805481.png" alt="image-20230502111805481" style="zoom:50%;" /><img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230502111821622.png" alt="image-20230502111821622" style="zoom:50%;" />

### 15.6 toRefs和toRef

​	如果我们使用ES6的解构语法，对reactive返回的对象进行解构获取值，那么之后无论是修改结构后的变量，还是修改reactive返回的state对象，数据都不再是响应式的：<img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230503102704551.png" alt="image-20230503102704551" style="zoom:50%;" />

+ **toRefs的函数，可以将reactive返回的对象中的属性都转成ref；**

​	![image-20230503102759888](D:\a-study\study-code\09-vue3+T3\note\img\image-20230503102759888.png)

​	这种做法相当于已经在state.name和ref.value之间建立了链接，任何一个修改都会引起另外一个变化；

+ 如果只希望转换一个reactive对象中的属性为ref, 那么可以使用toRef的方法：
  + ![image-20230503102918592](D:\a-study\study-code\09-vue3+T3\note\img\image-20230503102918592.png)

### 15.7 customRef

+ 创建一个自定义的ref，并对其依赖项跟踪和更新触发进行显示控制：
  + 它需要一个工厂函数，该函数接受track 和trigger 函数作为参数；
    + 一般来说，`track()` 应该在 `get()` 方法中调用，而 `trigger()` 应该在 `set()` 中调用。对何时调用、是否应该调用他们有完全的控制权。
  + 并且应该返回一个带有get 和set 的对象；
+ 案例：对双向绑定的属性进行debounce(节流)的操作；
  + ![image-20230503112225540](D:\a-study\study-code\09-vue3+T3\note\img\image-20230503112225540.png)

### 15.8 Reactive判断的API

+ **isProxy:**
  + 检查对象是否是由reactive 或readonly创建的proxy。
+ **isReactive**
  + 检查对象是否是由reactive创建的响应式代理：
  + 如果该代理是readonly 建的，但包裹了由reactive 创建的另一个代理，它也会返回true；
+ **isReadonly**
  + 检查对象是否是由readonly 创建的只读代理。
+ **toRaw**
  + 返回reactive 或readonly 代理的原始对象（不建议保留对原始对象的持久引用。请谨慎使用）。
+ **shallowReactive**
  + 创建一个响应式代理，它跟踪其自身property 的响应性，但不执行嵌套对象的深层响应式转换(深层还是原生对象)。
  + 例如：`shallowReactive({name:'xw',friends:{name:'lxm'}})`**friends不是响应式的。**
+ **shallowReadonly**
  + 创建一个proxy，使其自身的property 为只读，但不执行嵌套对象的深度只读转换（深层还是可读、可写的）。

### 15.9 computed

+ 使用
  + 方式一：接收一个getter函数，并为getter 函数返回的值，返回一个不变的ref 对象；
    + ![image-20230503112403663](D:\a-study\study-code\09-vue3+T3\note\img\image-20230503112403663.png)
  + 方式二：接收一个具有get 和set 的对象，返回一个可变的（可读写）ref 对象；
    + ![image-20230503112421788](D:\a-study\study-code\09-vue3+T3\note\img\image-20230503112421788.png)

### 15.10 侦听数据的变化 watchEffect、watch

#### 15.10.1 watchEffect

​	**用于自动收集响应式数据的依赖；**

+ 当**侦听到某些响应式数据变化时**，我们希望执行某些操作，这个时候可以**使用watchEffect**。
  + 首先，watchEffect传入的函数会被立即执行一次，并且在执行的过程中会收集依赖；
  + 其次，只有收集的依赖发生变化时，watchEffect传入的函数才会再次执行；
    + <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230503115140782.png" alt="image-20230503115140782" style="zoom:50%;" />
+ 如果在发生某些情况下，我们希望**停止侦听**，这个时候我们可以获取watchEffect的返回值函数，调用该函数即可。
  + 比如在上面的案例中，我们age达到20的时候就停止侦听：
  + ![image-20230503115239950](D:\a-study\study-code\09-vue3+T3\note\img\image-20230503115239950.png)
+ **watchEffect清除副作用**
  + 比如在开发中我们需要在侦听函数中执行网络请求，但是在网络请求还没有达到的时候，我们停止了侦听器，或者侦听器侦听函数被再次执行了。那么上一次的网络请求应该被取消掉，这个时候我们就可以清除上一次的副作用；
  + 在我们给watchEffect传入的函数被回调时，其实可以获取到一个参数：**onInvalidate**
    + 当副作用即将重新执行或者侦听器被停止时会执行该函数传入的回调函数；
    + 我们可以在传入的回调函数中，执行一些清楚工作；
  + ![image-20230503115445415](D:\a-study\study-code\09-vue3+T3\note\img\image-20230503115445415.png)
+ **watchEffect的执行时机**
  + 默认情况下，组件的更新会在副作用函数执行之前：
    + ![image-20230503115812160](D:\a-study\study-code\09-vue3+T3\note\img\image-20230503115812160.png)![image-20230503115817043](D:\a-study\study-code\09-vue3+T3\note\img\image-20230503115817043.png)
    + 发现打印结果打印了两次：
      + 这是因为setup函数在执行时就会立即执行传入的副作用函数，这个时候DOM并没有挂载，所以打印为null；
      + 而当DOM挂载时，会给title的ref对象赋值新的值，副作用函数会再次执行，打印出来对应的元素；
  + **改变副作用函数的执行时机：它的默认值是pre**，它会在元素挂载或者更新之前执行；
    + ![image-20230503115938477](D:\a-study\study-code\09-vue3+T3\note\img\image-20230503115938477.png)
    + flush 选项还接受sync，这将强制效果始终同步触发。然而，这是低效的，应该很少需要。

#### 15.10.2 watch

​	**需要手动指定侦听的数据源；**

+ watch的API完全**等同于组件watch选项的Property**：
  + watch需要侦听特定的数据源，并在回调函数中执行副作用；
  + 默认情况下它是惰性的，只有当被侦听的源发生变化时才会执行回调；
+ **与watchEffect的比较，watch允许：**
  + 懒执行副作用（第一次不会直接执行）；
  + 更具体的说明当哪些状态发生变化时，触发侦听器的执行；
  + 访问侦听状态变化前后的值；
+ **侦听单个数据源**
  + watch侦听函数的数据源有两种类型：
    + 一个**getter函数**：但是该getter函数**必须引用可响应式的对象**（比如reactive或者ref）；
    + 直接写入一个**可响应式的对象**，reactive或者ref（比较常用的是ref）；
    + <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230503122339152.png" alt="image-20230503122339152" style="zoom:50%;" /><img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230503122342717.png" alt="image-20230503122342717" style="zoom:50%;" />
+ **侦听多个数据源**
  + ![image-20230503122428883](D:\a-study\study-code\09-vue3+T3\note\img\image-20230503122428883.png)
+ **侦听响应式对象**
  + 如果我们希望侦听一个数组或者对象，那么可以使用一个getter函数，并且对可响应对象进行解构：
  + ![image-20230503122455461](D:\a-study\study-code\09-vue3+T3\note\img\image-20230503122455461.png)
+ **watch的选项** （新旧值会一样）
  + 如果我们希望侦听一个**深层的侦听**，那么依然需要设置**deep 为true**：
  + 也可以传入**immediate** 立即执行；
  + ![image-20230503122537345](D:\a-study\study-code\09-vue3+T3\note\img\image-20230503122537345.png)

### 15.11 生命周期钩子

​	**可以使用直接导入的onX 函数注册生命周期钩子；**

![image-20230503165202466](D:\a-study\study-code\09-vue3+T3\note\img\image-20230503165202466.png)![image-20230503165205921](D:\a-study\study-code\09-vue3+T3\note\img\image-20230503165205921.png)

![image-20230503165218383](D:\a-study\study-code\09-vue3+T3\note\img\image-20230503165218383.png)

### 15.12 Provide函数、inject函数 

+ 可以通过**provide** 方法来定义每个Property；
  + provide可以传入两个参数：
    + name：提供的属性名称；
    + value：提供的属性值；
  + ![image-20230503165327876](D:\a-study\study-code\09-vue3+T3\note\img\image-20230503165327876.png)

+ 在后代组件中可以通过**inject** 来注入需要的属性和对应的值：
  + 可以通过inject 来注入需要的内容；
  + inject可以传入两个参数：
    + 要inject 的property 的name；
    + 默认值；
  + ![image-20230503165432354](D:\a-study\study-code\09-vue3+T3\note\img\image-20230503165432354.png)
+ 为了增加provide 值和inject 值之间的**响应性**，我们可以在provide 值时使用ref 和reactive。
  + ![image-20230503165519707](D:\a-study\study-code\09-vue3+T3\note\img\image-20230503165519707.png)
+ **修改响应式Property**
  + 如果我们需要修改可响应的数据，那么最好是在数据提供的位置来修改：
  + 我们可以将修改方法进行共享，在后代组件中进行调用；
  + ![image-20230503165602818](D:\a-study\study-code\09-vue3+T3\note\img\image-20230503165602818.png)

## 16. h函数

​	Vue**推荐**在绝大数情况下使用**模板**来创建你的HTML，然后一些特殊的场景，你真的需要JavaScript的完全编程的能力，这个时候你**可以使用渲染函数**，它比模板更接近编译器；

+ Vue在生成真实的DOM之前，会将我们的节点转换成VNode，而VNode组合在一起形成一颗树结构，就是虚拟DOM（VDOM）；

+ 事实上，我们之前编写的template 中的HTML **最终也是使用渲染函数生成对应的VNode**；

+ 那么，如果你想充分的利用JavaScript的编程能力，我们可以自己来编写createVNode 函数，生成对应的VNode；

+ **使用h()函数：**

  + h() 函数是一个用于创建vnode 的一个函数；
  + 其实更准备的命名是createVNode() 函数，但是为了简便，Vue将之简化为h() 函数；
  + **接受三个参数：**
    + 第一个参数：
      + ![image-20230503180205037](D:\a-study\study-code\09-vue3+T3\note\img\image-20230503180205037.png)
    + 第二个参数：
      + ![image-20230503180222339](D:\a-study\study-code\09-vue3+T3\note\img\image-20230503180222339.png)
    + 第三个参数：
      + ![image-20230503180232296](D:\a-study\study-code\09-vue3+T3\note\img\image-20230503180232296.png)
  + **注意事项：**
    + 如果没有props，那么通常可以将children作为第二个参数传入；
    + 如果会产生歧义，可以将null作为第二个参数传入，将children作为第三个参数传入；
  + **h函数的基本使用**
    + h函数可以在两个地方使用：
      + render函数选项中；
      + setup函数选项中（setup本身需要是一个函数类型，函数再返回h函数创建的VNode）；
      + <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230503180445080.png" alt="image-20230503180445080" style="zoom:50%;" />
      + <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230503180451485.png" alt="image-20230503180451485" style="zoom:50%;" />
  + **h函数计数器案例**
    + <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230503180509250.png" alt="image-20230503180509250" style="zoom:50%;" />

  + **函数组件和插槽的使用**
    + <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230503180550200.png" alt="image-20230503180550200" style="zoom:50%;" /><img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230503180554454.png" alt="image-20230503180554454" style="zoom:50%;" />

  

	## 17. jsx

+ **jsx的babel配置**
  + 如果我们希望在项目中使用jsx，那么我们需要添加对jsx的支持：
    + jsx我们通常会通过Babel来进行转换（React编写的jsx就是通过babel转换的）；
    + 对于Vue来说，我们只需要在Babel中配置对应的插件即可；**(目前已经不需要配置就可使用)**
  + **安装Babel支持Vue的jsx插件：**
    + `npm install @vue/babel-plugin-jsx -D`
  + **在babel.config.js配置文件中配置插件：**
    + ![image-20230503190148263](D:\a-study\study-code\09-vue3+T3\note\img\image-20230503190148263.png)![image-20230503190759545](D:\a-study\study-code\09-vue3+T3\note\img\image-20230503190759545.png)

## 18.自定义组件

​	在Vue中，代码的复用和抽象主要还是通过组件；通常在某些情况下，你**需要对DOM元素进行底层操作**，这个时候就会用到自定义指令；

+ **自定义指令分为两种：**
  + **自定义局部指令**：组件中通过directives 选项，只能在当前组件中使用；
  + **自定义全局指令**：app的directive 方法，可以在任意组件中被使用；
+ **案例：**当某个元素挂载完成后可以自定获取焦点
  + 实现方式一：聚焦的默认实现
    + <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230503210209242.png" alt="image-20230503210209242" style="zoom:50%;" />
  + 实现方式二：局部自定义指令
    + 在组件选项中使用directives 即可；
    + **它是一个对象**，在对象中编写我们自定义指令的名称（注意：这里不需要加v-）；
    + 自定义指令**有一个生命周期**，是**在组件挂载后调用的mounted**，我们可以在其中完成操作；
    + <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230503210317231.png" alt="image-20230503210317231" style="zoom:50%;" />
  + 方式三：自定义全局指令
    + <img src="D:\a-study\study-code\09-vue3+T3\note\img\image-20230503210333209.png" alt="image-20230503210333209" style="zoom:67%;" />
+ **指令的生命周期**
  + 一个指令定义的对象，Vue提供了如下的几个钩子函数：
    + created：在绑定元素的attribute 或事件监听器被应用之前调用；
    + beforeMount：当指令第一次绑定到元素并且在挂载父组件之前调用；
    + mounted：在绑定元素的父组件被挂载后调用；
    + beforeUpdate：在更新包含组件的VNode 之前调用；
    + updated：在包含组件的VNode 及其子组件的VNode 更新后调用；
    + beforeUnmount：在卸载绑定元素的父组件之前调用；
    + unmounted：当指令与元素解除绑定且父组件已卸载时，只调用一次；
+ **指令的参数和修饰符**
  + ![image-20230503210557163](D:\a-study\study-code\09-vue3+T3\note\img\image-20230503210557163.png)
    + info是参数的名称；
    + aaa-bbb是修饰符的名称；
    + 后面是传入的具体的值；
    + 在我们的生命周期中，我们可以通过**bindings** 获取到对应的内容：
    + ![image-20230503210632422](D:\a-study\study-code\09-vue3+T3\note\img\image-20230503210632422.png)
