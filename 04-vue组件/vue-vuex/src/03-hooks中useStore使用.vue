<template>
<div>
  <span>{{$store.state.count}}</span>
  <!-- <h2>scount: {{sCount}}</h2> -->
  <h2>name: {{name}}</h2>
  <h2>age: {{age}}</h2>
  <h2>count: {{count}}</h2>
</div>
</template>

<script>
import { useState } from './hooks/01-useStore'
export default {
  name: 'App',
  setup() {
    const stores = useState(['name', 'age', 'count'])
    return {
      ...stores
    }
  }
}
</script>

<style>
</style>
