<template>
	<div>
		<button @click="show = !show">进入/离开</button>
		<transition name="xw"
																@enter="enter"
																@leave="leave">
			<h2 v-if="show">hello world</h2>
		</transition>
	</div>
</template>

<script>
import gsap from 'gsap';
export default {
	name: '09Vue3T3App3',

	data() {
		return {
			show: false
		};
	},

	mounted() {
		
	},

	methods: {
		enter(el,done) {
			gsap.from(el,{
				scale: 0,
				x:200,
				onComplete: done
			})
		},
					leave(el,done) {
				gsap.to(el,{
					scale: 0,
					x: 200,
					onComplete: done
				})
			}
	},
};
</script>

<style scoped>

</style>