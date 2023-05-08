<template>
	<div class="app" >
			<home-father></home-father>
			<button @click="messageClick">测试</button>
	</div>
</template>


<script>
import {computed} from 'vue'
import HomeFather from './homeFather.vue';

export default {
	name: 'App',
	components :{
		HomeFather
	},
	
	data() {
		return {
			friends: ['xiaoming','xiaohuang','xw']
		};
	},
  provide() {
		return {
			name: 'xw',
			message: 78,
			length: computed(() =>  this.friends.length)
		}
	},
	mounted() {
		
	},

	methods: {
		messageClick() {
			this.friends.push('aaa')
			console.log(this.friends);
		}
	},
	setup() {
		return{
			computed
		}
	}
};
</script>

<style scoped>

</style>