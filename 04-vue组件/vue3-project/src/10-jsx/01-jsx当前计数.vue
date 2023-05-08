<script>
import { ref } from 'vue'
	export default {
		render() {
			return (
				<div>
					<h2>当前计数：{this.count}</h2>
					<button onClick={this.increment}>+1</button>
					<button onClick={this.decrement}>-1</button>
				</div>
			)
		},
		setup() {
			const count = ref(0);
			const increment = () => count.value ++;
			const decrement = () => count.value --;

			return {
				count,
				increment,
				decrement
			}
		}
	}
</script>

<style scoped>

</style>