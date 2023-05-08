<script>
import {h} from 'vue'
	export default {
		render() {
			return h(
				'div',
				{class:'hello-world'},
				[
					h('h2',null,'Hello world'),
					this.$slots.default ? this.$slots.default({info:'hhhhh'}) : h('span',null,'我是子组件默认值')  // {info:'hhhhh'}相当于作用域插槽传参
				]
			)
		}
	}
</script>

<style scoped>

</style>