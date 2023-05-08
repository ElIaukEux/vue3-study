<template>
	<div>
		<input type="number" v-model="number" step="100">
		<h2>{{animatedNumber}}</h2>
	</div>
</template>

<script>
import gsap from 'gsap';
export default {
	name: '09Vue3T3App3',

	data() {
		return {
			number: [],
			showNumber: 0,
		};
	},
	computed: {
		animatedNumber() {
			return this.showNumber.toFixed(0);
		}
	},
	watch:{
		number(newval) {
			gsap.to(this,{
				direction: 1,
				showNumber: newval
			});
		}
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