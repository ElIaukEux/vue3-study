<template>
	<div class="app" >
			<home-father></home-father>
			<about></about>
	</div>
</template>


<script>
import {computed} from 'vue'
import HomeFather from './homeFather.vue';
import About from './about.vue';

export default {
	name: 'App',
	components :{
		HomeFather,
		About
	},
	
	data() {
		return {
		};
	},
  provide() {
		return {

		}
	},
	mounted() {
		
	},

	methods: {

	},
	setup() {
		computed
	}
};
</script>

<style scoped>

</style>