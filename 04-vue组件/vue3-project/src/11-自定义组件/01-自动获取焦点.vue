<template>
	<div>
		<input type="text" v-focus:info.aaa.bbb = "{name:'xw',age:23}">
	</div>
</template>

<script>
	export default {
		directives: {
			focus: {
				mounted(el,bindings) {
					el.focus()
					console.log(bindings);  // bindings可获取传的参数，+ info是参数的名称；aaa-bbb是修饰符的名称；后面是传入的具体的值
				},				
			}
		}
	}
</script>

<style scoped>

</style>