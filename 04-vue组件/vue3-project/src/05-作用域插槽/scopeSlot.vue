<template>
	<div>
		<template v-for="(item,index) in friends">
			<slot :item="item" :index="index"></slot>
		</template>
	</div>
</template>

<script>
export default {
	name: '09Vue3T3ScopeSlot',
	props: {
		friends: Array
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