<template>
	<div>
		父组件传过来的{{name}}-{{message}}-{{length}}
	</div>
</template>

<script>
export default {
	name: 'HomeChild',
	inject: [
		'name','message','length'
	],
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