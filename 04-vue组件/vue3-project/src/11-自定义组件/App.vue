<template>
	<div>
		<span class="box">测试111</span>
		<span v-format-date>1684037616</span>
	</div>
</template>

<script>
import { reactive,ref } from 'vue'
	export default {
		setup() {
			const bgColor = ref ('#ddd')
			return {
				bgColor
			}
		}
	}
</script>

<style scoped>
.box {
	color: v-bind(bgColor);
}
</style>