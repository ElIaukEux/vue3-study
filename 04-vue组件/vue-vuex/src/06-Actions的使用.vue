<template>
<div>
  <span>{{$store.state.count}}</span>
  <button @click="$store.dispatch('incrementActions')">+1</button>
  <button @click="$store.commit('decrement')">-1</button>
  <button @click="$store.commit('incrementN', 10)">+10</button>
  <hr>
  <button @click="incrementActions">+1</button>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',
  methods: {
    // ...mapActions(['incrementActions'])
    ...mapActions({
      incrementActions : 'incrementActions'
    })
  }
}
</script>

<style>
</style>
