<template>
	<div>
		啥呀
		<scope-slot :friends="friend" >
			<template v-slot="scopeSlot">
				<button>{{scopeSlot.item}}-{{scopeSlot.index}}</button>
			</template>
		</scope-slot>
		<!-- 当只有一个默认插槽时，可以这样传参 -->
		<scope-slot :friends="friend" v-slot="scopeSlot">
				<button>{{scopeSlot.item}}-{{scopeSlot.index}}</button>
		</scope-slot>
	</div>
</template>

<script>
import scopeSlot from './scopeSlot.vue';
export default {
	name: '09Vue3T3App',
	components: {
		scopeSlot
	},

	data() {
		return {
			friend: ['小明','小红','小黄']
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