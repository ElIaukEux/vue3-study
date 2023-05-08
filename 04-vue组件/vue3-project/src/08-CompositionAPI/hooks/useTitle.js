import { ref, watch } from 'vue'
export function useTitle(title = '默认值') {
	const titleRef = ref(title);
	watch(titleRef, (newOld)=>{
		document.title = newOld;
	},{
		immediate: true
	})
	return titleRef
}