<template>
	<div class="box">
		<h2>{{count}}</h2>
		<button @click="increment">+1</button>
		<button @click="decrement">-1</button>
		<div class="scroll">
			<h2>滚动的x轴位置{{scrollX}}</h2>
			<h2>滚动的Y轴位置{{scrollY}}</h2>
		</div>
		<div class="mouse">
			<h2>鼠标的x轴位置{{mouseX}}</h2>
			<h2>鼠标的Y轴位置{{mouseY}}</h2>
		</div>
	</div>
</template>

<script>
import {useCounter, useTitle, useScrollPosition,useMousePosition, useLocalStorage} from './hooks/index'
	export default {
		setup() {
			const {count, increment, decrement} = useCounter()

			const titleRef = useTitle('测试标题')
			console.log(titleRef.value);

			const {scrollX, scrollY}  = useScrollPosition();

			const {mouseX, mouseY } = useMousePosition();

			const data = useLocalStorage('name', 'xw');
			const data1 = useLocalStorage('name');
			console.log(data.value,data1.value	);

			return {
				count,
				increment,
				decrement,

				scrollX,
				scrollY,

				mouseX,
				mouseY
			}
		}
	}
</script>

<style scoped>
.box {
	width: 3000px;
	height: 1000px;
}
.scroll {
	position: fixed;
	bottom: 30px;
	right: 30px;
}
.mouse {
	position: fixed;
	bottom: 140px;
	right: 30px;
}
</style>