<template>
	<div>
		<button @click="isShow = !isShow">点击</button>
		<transition name="hello">
			<h2 v-if="isShow">hello world</h2>
		</transition>
	</div>
</template>

<script>
export default {
	name: '09Vue3T3App',

	data() {
		return {
			isShow:true
		};
	},

	mounted() {
		
	},

	methods: {
		
	},
};
</script>

<style scoped>
	.hello-enter-from,
	.hello-leave-to {
		opacity: 0;
	}
	.hello-enter-to,
	.hello-leave-from {
		opacity: 1;
	}
	.hello-enter-active,
	.hello-leave-active {
		transition: opacity 1s ease;
	}
</style>