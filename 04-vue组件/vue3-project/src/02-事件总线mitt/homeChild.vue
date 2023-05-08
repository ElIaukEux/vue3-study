<template>
	<div>

	</div>
</template>

<script>
import emitter from './emitter';

export default {
	name: 'HomeChild',
	data() {
		return {
			
		};
	},

	mounted() {
		
	},
	created() {
		emitter.on('about',(info)=>console.log(info))
		emitter.on('test',(info)=>console.log(info))
		emitter.on('*',(type,info)=>console.log('*****',type,'fffffffffff',info))
	},
	methods: {
		
	},
};
</script>

<style scoped>

</style>