<template>
	<div class="showslot">
		<div class="left">
			<slot :name=name></slot>
		</div>
		<div class="center">
			<slot name="center"></slot>
		</div>
		<div class="right">
			<slot name="right"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: '09Vue3T3App',
	props: {
		name:{
			type: String
		}
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
.showslot{
	display: flex;
}
.left .right {
	width: 80px;
	background-color: blue;
}
.center {
	text-align: center;
	flex: 1;
	background-color: red;
}
</style>