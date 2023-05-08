<template>
	<div>
		<h2>当前计数：{{count}}</h2>
		<h2>shallowReactive-------{{shallowReactiveTest.friends.name }} - {{shallowReactiveTest.friends.age}}</h2>
		<h2>toref----{{age}}</h2>
		<button @click="changeF">修改friends</button>
	</div>
</template>

<script>
		import { reactive, toRefs,shallowReactive ,toRef} from 'vue'
		
		export default {
			setup () {
				const state = reactive({
					count: 0,
				})

				// 1.shallowReactive 创建一个响应式代理，它跟踪其自身property 的响应性，但不执行嵌套对象的深层响应式转换(深层还是原生对象)。
			const shallowReactiveTest = shallowReactive({
				name:'xw',
				friends: {
					name:'lxm',
					age: 24
				}
			})

			// 3. toref 只希望转换一个reactive对象中的属性为ref, 那么可以使用toRef的方法：
			const torefTest = reactive({
				name:'xw',
				age: 18
			})
			const age = toRef(torefTest,'age');

			const changeF = () =>{
				shallowReactiveTest.friends.name = 'lj'
				shallowReactiveTest.friends.age = 33
				console.log(shallowReactiveTest);  // 已经修改但是不是响应式的。
				// age.value = 23
			}




				return {
					// 2. toRefs 可以将reactive返回的对象中的属性都转成ref
					...toRefs(state),  //
					shallowReactiveTest,
					changeF,
					age
				}
			}
		}

</script>

<style scoped>

</style>