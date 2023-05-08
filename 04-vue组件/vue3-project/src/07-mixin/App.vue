<template>
	<div>
		<span @click="testMethods">点击</span>
	</div>
</template>

<script>
import testMixin from './mixin/test'
export default {
	name: '09Vue3T3App',
mixins:[testMixin],
created() {
	console.log('app被创建');
},

	data() {
		return {
			
		};
	},

	mounted() {
		
	},

	methods: {
		
	},
};
</script>

<style scoped>

</style>