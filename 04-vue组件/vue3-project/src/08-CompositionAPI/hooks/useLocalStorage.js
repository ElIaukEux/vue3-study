import { ref, watch } from 'vue'

export function useLocalStorage(key, value) {
	const data = ref(value)
	if(value) {
		window.localStorage.setItem(key,JSON.stringify(value))
	}else {
		data.value = JSON.parse(window.localStorage.getItem(key))
	}

	watch (data, (newVal) => {
		window.localStorage.setItem(key,JSON.stringify(data.value));
	}) 
	
	return data
}