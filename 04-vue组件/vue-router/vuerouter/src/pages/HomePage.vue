<template>
	<div>
		<h3>home内容</h3>
		<button @click="proClick">产品</button>
		<router-view></router-view>
	</div>
</template>

<script>
import { useRouter } from 'vue-router'
	export default {
		setup() {
			const router = useRouter()
			const proClick = () => {
				// console.log('22222222');
				router.push('/home/product')
			}
			return {
				proClick
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>