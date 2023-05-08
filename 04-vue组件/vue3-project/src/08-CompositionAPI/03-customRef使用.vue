<template>
	<div>
		<input type="text" v-model="message">
		<h2>{{message}}</h2>
	</div>
</template>

<script>
	import { reactive, toRefs } from 'vue'
	import { useDebouncedRef } from './hooks/useDebouncedRef'
	
	export default {
		setup () {
			const message = useDebouncedRef('hello world');
		
			return {
				message
			}
		}
	}
</script>

<style scoped>

</style>