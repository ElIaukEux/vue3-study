<template>
	<div>
		<h2>插槽开始</h2>
		<slot>
			<strong>插槽默认显示的内容</strong>
		</slot>
		<h2>插槽结束</h2>
	</div>
</template>

<script>
export default {
	name: '09Vue3T3App',

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