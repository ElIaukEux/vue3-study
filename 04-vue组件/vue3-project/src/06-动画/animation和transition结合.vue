<template>
	<div class="box">
		<div style="width:500px">
					<div >
			<button @click="isShow = !isShow">点击1</button>
		</div>
		<transition name="hello">
			<h2 class=" title" v-if="isShow">hello world</h2>
		</transition>
		</div>
	</div>
</template>

<script>
export default {
	name: '09Vue3T3App2',

	data() {
		return {
			isShow: true
		};
	},

	mounted() {
		
	},

	methods: {
		
	},
};
</script>

<style scoped>
.box {
	margin: o auto;
}
.title {
	display: inline-block;
}
.hello-enter-active{
	animation: bone 1s ease;
}
.hello-leave-active {
		animation: bone 1s ease reverse;
}
@keyframes bone {
	0% {
		transform: scale(0);
	}
	50% {
		transform:scale(1.8);
	}
	100% {
		transform:scale(1);
	}
}
</style>