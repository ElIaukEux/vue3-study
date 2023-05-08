<template>
	<div>
		<button @click="changeAge">年龄增加 {{age}}</button>
		<h2 ref="testName">{{name}}</h2>
	</div>
</template>

<script>
import { ref, watchEffect } from'vue'
	export default {
		setup() {
			const age = ref(0)
			const name = ref('xw');
			let testName = ref(null);
			watchEffect(()=>{
				console.log(testName.value);
			},{
				flush: 'post' //它会在元素挂载或者更新之后执行
			})
			const stop = watchEffect((onInvalidate)=> {
				console.log('年龄变了',age.value);
				const timer = setTimeout(() => {
					console.log('2s之后执行');
				}, 2000);
				onInvalidate(()=> {  // 当频繁请求时可将上次的请求取消。
					clearTimeout(timer)
				})
			})
			const changeAge = () => {
				age.value++
				name.value = 'xxww'
				if( age.value >= 10 ) {
					stop()// 停止监听
				}
			}
			return{
				age,
				name,
				testName,
				changeAge
			}
		}
	}
</script>

<style scoped>

</style>