<script>
import { h } from 'vue'
import HelloWorld from './03-helloWorld.vue'
	export default {
		render() {
			return h(
				'div',
				null,
				[
					h('h2',null,'我是父组件内容'),
					h(HelloWorld,null,{
						default: props => h('button',null,`父组件传的:${props.info}`)
					})
				]
			)
		}
		
	}
</script>

<style scoped>

</style>