<template>
<div>
  <span>{{$store.state.count}}</span>
  <h2>{{sCount}}</h2>
  <h2>name: {{name}}</h2>
  <h2>sName: {{sName}}</h2>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  created() {
    console.log(this.$store.state.count,'在option Api');
  },
  computed: {
    sCount() {
      return this.$store.state.count
    },
    ...mapState(['name', 'age']),
    ... mapState({
      sName: (state) => state.name 
    })
  }
}
</script>

<style>
</style>
