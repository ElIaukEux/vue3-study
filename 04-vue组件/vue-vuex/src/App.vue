<template>
<div>
  <h2>根组件：{{$store.state.rootCount}}</h2>
  <h2>home组件：{{homeCount}}</h2>
  <h2>user根组件：{{$store.state.user.userCount}}</h2>
  <hr>
</div>
</template>

<script>
// import { mapState, mapGetters, mapMutations, mapActions} from 'vuex'
import { createNamespacedHelpers} from 'vuex'
import { useState, useGetters} from './hooks/index'
const { mapState } = createNamespacedHelpers('home')
export default {
  name: 'App',
  computed: {
    // 写法一
    // ...mapState({
    //   homeCount : (store) => store.home.homeCount
    // })
    // 写法二
    // ...mapState('home', ['homeCount'])

    // 写法三
    // ...mapState(['homeCount'])
  },
  setup() {
    const homeState = useState(['homeCount'], 'home')
    return {
      ...homeState
    }
  }
}
</script>

<style>
</style>
