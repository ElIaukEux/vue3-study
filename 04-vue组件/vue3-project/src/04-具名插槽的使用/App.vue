<template>
	<div>
		<show-slot>
			<template #left>
				<button>左边按钮</button>
			</template>
			<template #center>
				<h2>中间内容</h2>
			</template>
			<template #right>
				<button>右边按钮</button>
			</template>
		</show-slot>
		<dongtai-slot :name="name">
			<template #[name]>
				<button>左边按钮2</button>
			</template>
			<template #center>
				<h2>中间内容2</h2>
			</template>
			<template #right>
				<button>右边按钮2</button>
			</template>
		</dongtai-slot>
	</div>
</template>

<script>
import ShowSlot from './showSlot.vue';
import DongtaiSlot from './dongtaiSlot.vue';

export default {
	name: '09Vue3T3App',
	components: {
		ShowSlot,
		DongtaiSlot
	},
	data() {
		return {
			name:'slotA'
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