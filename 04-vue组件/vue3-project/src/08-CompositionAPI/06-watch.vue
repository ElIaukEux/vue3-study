<template>
	<div>
		<h2>{{info.name}}-{{test}}</h2>
		<button @click="changeName">修改名字</button>
	</div>
</template>

<script>
import { reactive, ref, watch } from 'vue'
	export default {
		setup(){
			const info = reactive({
				name:'xw',
				age: 23,
				friend: {
					name: 'xm',
					age: 24
				}
			})
			const names = reactive(['abc','cba','sss'])
			const test = ref(0)

			// 1. 侦听数据源为get函数
			// watch(()=>info.name,(newVal,oldVal)=>{
			// 	console.log(newVal,oldVal);
			// })
			// // 2. 侦听数据源是响应式的对象
			// watch(test,(newVal,oldVal)=>{
			// 	console.log(newVal,oldVal);
			// })
			// 3. 侦听多个数据源
			// watch([info,test],(newVal,oldVal)=>{
			// 	console.log(newVal,oldVal);
			// })
			// 4. 侦听响应式对象
			// watch(()=>[...names],(newVal,oldVal)=>{
			// 	console.log(newVal,oldVal);
			// })
			// 5. 深层侦听、立即执行
			watch(()=>info,(newVal,oldVal)=>{
				console.log(newVal,oldVal);
			},{
				deep: true,
				immediate: true
			})
			const changeName = ()=>{
				// info.name = 'xh'
				// test.value++
				// names[0] = 'ccc'
				// names.push('ddd')
				info.friend.name = 'xxx'
			}
			return {
				info,
				test,
				changeName
			}
		}
	}
</script>

<style scoped>

</style>