<template>
<div>
  <span>{{$store.state.count}}</span>
  <button @click="$store.commit('increment')">+1</button>
  <button @click="$store.commit('decrement')">-1</button>
  <button @click="$store.commit('incrementN', 10)">+10</button>
  <button @click="addN">+100</button>
  <hr>
    <button @click="increment">+1</button>
</div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'App',
  methods: {
    addN() {
      this.$store.commit('incrementN', 100)
    },
    // ...mapMutations(['increment', 'decrement']),
    ...mapMutations({
      increment: 'increment',
      decrement: 'decrement'
    })
  }
}
</script>

<style>
</style>
