<script>
import HelloWorld from './02-HelloWorld.vue'
	export default {
		render() {
			return (
				<div>
					<HelloWorld>
						{ //jsx语法（只能是一个大括号） 这里是传入了一个对象
							{default: props => <button>{props.name}</button>
						}
						}
					</HelloWorld>

				</div>
			)
		}
	}
</script>

<style scoped>

</style>