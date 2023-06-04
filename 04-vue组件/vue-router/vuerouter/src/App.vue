<template>
  <h4>vue-router</h4>
  <router-link to="/home">home </router-link>
  <router-link to="/about">about </router-link>
  <router-link to="/user/111">user</router-link>
  <router-link to="/home" custom v-slot="props">
    <!-- props.navigate函数 相当于跳转到to对应的路径中 -->
    <button @click="props.navigate">{{ props.href }}</button>
    <span>{{ props.isActive }}</span>
  </router-link>
  <router-view v-slot="props">
    <transition name="xw">
      <component :is="props.Component"></component>
    </transition>
  </router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
  .xw-enter-from,
  .xw-leave-to {
    opacity: 0;
  }
  .xw-enter-active,
  .xw-leave-active {
    transition: opacity 1s ease-in;
  }
</style>
