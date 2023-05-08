<template>
	<div>
		<button  @click='add'>添加元素</button>
		<button @click="sub">删除元素</button>
		<button @click="change">打乱元素</button>
		<transition-group tag="p" name="xw">
			<span v-for="(item) in number" :key="item" class="span">{{item}}</span>
		</transition-group>
	</div>
</template>

<script>
import gsap from 'gsap';
import _ from 'lodash'
export default {
	name: '09Vue3T3App3',

	data() {
		return {
			number: [1,2,3,4],
			numberCon: 4
		};
	},
	mounted() {
		
	},

	methods: {
		randomNum() {
			return Math.floor(Math.random()*this.number.length);
		},
		add() {
			this.number.splice(this.randomNum(),0,this.numberCon++)
		},
		sub() {
			this.number.splice(this.randomNum(),1);
		},
		change() {
			this.number = _.shuffle(this.number)
		}
	},
};
</script>

<style scoped>
span{
	display: inline-block;
	margin-right: 20px;
}
.xw-enter-from,
.xw-leave-to {
	opacity: 0;
	transform: translateY(30px);
}
.xw-leave-active,
.xw-enter-active {
	transition: all 1s ease;
}
.xw-move {
	transition: transform 1s ease;
}
</style>