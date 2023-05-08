<template>
	<div>
		<button @click="changeMessage">修改test</button>
	</div>
</template>

<script>
import {reactive,ref} from 'vue'
export default {
	name: '09Vue3T3App',
	props: {
		test: {
			type: Object	
		}
	},
	setup(props,context) {
		const  changeMessage = ()=> {
			props.test.name = '想要修改'
		}
		return {
			changeMessage
		}
	}
};
</script>

<style scoped>

</style>