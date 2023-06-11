<template>
<div>
  <span>{{$store.state.count}}</span>
  <h2>scount: {{sCount}}</h2>
  <h2>name: {{name}}</h2>
  <h2>age: {{age}}</h2>
  <h2>count: {{count}}</h2>
</div>
</template>

<script>
import { mapState, useStore } from 'vuex'
import { computed } from 'vue'
export default {
  name: 'App',
  setup() {
    const store = useStore()
    const sCount = computed(() => store.state.count)
    const storeFns = mapState(['name', 'count', 'age'])  // 返回一个对象，每一个值是一个函数
    const stores = {}
    Object.keys(storeFns) .forEach(item => {
      const fn = storeFns[item].bind({$store: store})
      stores[item] = computed(fn)
    })
    return {
      sCount,
      ...stores
    }
  }
}
</script>

<style>
</style>
