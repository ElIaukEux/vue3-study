<template>
	<div>
		<h2>插槽开始</h2>
		<div class="left">
			<slot></slot>
		</div>
		<div class="center">
			<slot></slot>
		</div>
		<div class="right">
			<slot></slot>
		</div>
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