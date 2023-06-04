<template>
	<div>
		<h3>user内容1-{{$route.params.id}}</h3>
		<h3>user内容2-{{route.params.id}}</h3>
	</div>
</template>

<script>
import { useRoute } from 'vue-router'
	export default {
		setup() {
			const route = useRoute()
			return{
				route
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>