<template>
	<div>
		<span>{{fullName}}</span>
		<button @click="changeName">修改fullname</button>
	</div>
</template>

<script>
	import { ref, computed} from 'vue'
	
	export default {
		setup () {
			const fristName = ref('xue')
			const lastName = ref('wen')
			// const fullName = computed(()=>{
			// 	return fristName.value + ' ' + lastName.value
			// })

			const fullName = computed({
				get() {
					return fristName.value + " " + lastName.value
				},
				set(newValue) {
					const names = newValue.split(" ")
					fristName.value = names[0]
					lastName.value = names[1]
				}
			})
			const changeName = () => {
				fullName.value = 'li xiaomin'
			}
			return {
				fullName,
				changeName
			}
		}
	}
</script>

<style scoped>

</style>