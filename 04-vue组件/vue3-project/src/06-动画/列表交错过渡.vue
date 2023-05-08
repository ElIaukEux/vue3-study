<template>
	<div>
		<input type="text" v-model="inputText">
		<transition-group tag="ul" name="xw" :css="false" 		@enter="enter"
															@leave="leave"
																						@befor-enter = "beforEnter">
			<li v-for="(item,index) in showTest" :key="item" :data-index = "index">{{item}}</li>
		</transition-group>
	</div>
</template>

<script>
import gsap from 'gsap'
export default {
	name: '09Vue3T3App',

	data() {
		return {
			inputText:'',
			test: ['abc','cba','xuewen','dsg','apple','lilei','hanmeimei']
		};
	},
computed: {
	showTest() {
		return this.test.filter(item => {
			return item.indexOf(this.inputText) != -1
		})
	}
},
	mounted() {
		
	},

	methods: {
		beforEnter (el) {
			el.style.opacity = 0;
			el.style.height = 0;
		},
		enter(el,done) {
			gsap.to(el,{
				opacity: 1,
				height: "1.5em",
				delay:el.dataset.index * 0.5,
				onComplete: done
			}) 
		},
		leave(el,done) {
			gsap.to(el,{
				opacity: 0,
				height: 0,
				delay:el.dataset.index * 0.5,
				onComplete: done
			}) 
		}
	},
};
</script>

<style scoped>
ul {
	font-size: 24px;
}
</style>