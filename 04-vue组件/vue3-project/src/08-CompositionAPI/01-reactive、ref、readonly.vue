<template>
	<div>
		<button @click="changeMessage">修改message</button>
		<span>{{message}}</span>
		<h2>{{info.name}}</h2>
		<h2>{{info.age}}</h2>
		<home :test="readonluInfo"></home>
	</div>
</template>

<script>
import {reactive,ref,readonly} from 'vue'
import Home from './01-Home.vue'
export default {
	name: '09Vue3T3App',
	components: {
		Home
	},
	setup(props,context) {
		const message = ref('Hello,world');
		const changeMessage = ()=> {
			message.value = '被修改了'
		};
		const info = reactive({
			name: 'xw',
			age: 22
		})
		const readonluInfo = readonly(info)
		return {
			message,
			changeMessage,
			info,
			readonluInfo
		}
	}
};
</script>

<style scoped>

</style>