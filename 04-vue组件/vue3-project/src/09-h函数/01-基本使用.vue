<script>
import {h} from 'vue'
	export default {
		render() {
			// return h('div',{class:'box'},'hello h函数')
		},
		setup() {
			return ()=> h('div',{class:'box'},'hello h函数')
		}
	}
</script>

<style scoped>

</style>