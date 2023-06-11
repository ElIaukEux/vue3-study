<template>
<div>
  <h2>根组件：{{$store.state.rootCount}}</h2>
  <h2>home组件：{{$store.state.home.homeCount}}</h2>
  <h2>user根组件：{{$store.state.user.userCount}}</h2>
  <hr>
   <!-- // 如果模块内没有namespaced时，默认会合并到index中的getters，就可以直接获取 -->
  <!-- <h2>homeGetter：{{$store.getters.doubleHomeCount}}</h2>  -->
  <h2>homeGetter：{{$store.getters['home/doubleHomeCount']}}</h2> 
   <!-- // 如果模块内没有namespaced时，默认会执行所有模块中的同一个名字的mutations函数  -->
  <button @click="$store.commit('home/increment')">+1</button>
</div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
</style>
