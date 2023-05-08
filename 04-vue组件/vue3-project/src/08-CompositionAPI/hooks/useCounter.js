import { ref } from 'vue'
export function useCounter() {
	const count = ref(0);

	const increment = ()=> {
		count.value ++;
		console.log('加加加');
	};
	const decrement = ()=> count.value --;

	return{
		count,
		increment,
		decrement
	}
}