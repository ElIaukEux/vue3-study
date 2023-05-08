<script>
	export default {
		render() {
			return (
				<div>
					<h2>我是hello world 内容</h2>
					<div>
						{
							this.$slots.default ? this.$slots.default({name:'xw'}) : <span>我是子组件默认内容</span>
						}
					</div>
				</div>
			)
		}
	}
</script>

<style scoped>

</style>