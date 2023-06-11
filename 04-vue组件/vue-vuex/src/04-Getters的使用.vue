<template>
<div>
  <span>{{$store.state.count}}</span>
  <h2>{{$store.getters.totalPrice(2)}}</h2>
  <h2>{{totalPrice(2)}}</h2>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
import { useGetters } from './hooks/02-useGetters'
export default {
  name: 'App',
  computed: {
    // 数组写法
    // ...mapGetters(['totalPrice']),
    // 对象写法
    ...mapGetters({
      totalPrice: 'totalPrice'
    })
  },
  setup() {
    const vuexGetters = useGetters(['totalPrice'])
    return {
      ... vuexGetters
    }
  }
}
</script>

<style>
</style>
