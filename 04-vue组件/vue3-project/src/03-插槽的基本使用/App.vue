<template>
	<div>
		<show-slot>
			<button>插槽内容</button>
		</show-slot>
		<show-slot-default></show-slot-default>
		<some-slot-default>
			 <!-- 这三个内容会在每一个slot中都显示 -->
			<strong>内容1</strong>
			<button>内容2</button>
			<span>内容3</span>
		</some-slot-default>
	</div>
</template>

<script>
import ShowSlot from './showSlot.vue';
import ShowSlotDefault from './showSlotDefault'
import SomeSlotDefault from './someSlotDefault.vue'

export default {
	name: '09Vue3T3App',
	components: {
		ShowSlot,
		ShowSlotDefault,
		SomeSlotDefault
	},
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