<template>
	<div>
		<button @click = ceshiCick>ceshi</button>
	</div>
</template>

<script>
import emitter from './emitter';
export default {
	name: '09Vue3T3About',

	data() {
		return {
			
		};
	},

	mounted() {

	},

	methods: {
		ceshiCick() {
			console.log('about被点击');
			emitter.emit('about',{name:'xiaoming',age: 19})
			emitter.emit('test',{name:'test',age: 29})
		}
	},
};
</script>

<style scoped>

</style>