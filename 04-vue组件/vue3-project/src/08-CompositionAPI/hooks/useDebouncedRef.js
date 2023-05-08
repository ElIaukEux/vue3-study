import { customRef } from "vue";

export function useDebouncedRef(value, delay=200) {
	return customRef((track, trigger)=>{
		let timeout;
		return {
			get() {
				track() // 
				return value;
			},
			set(newvalue) {
				clearTimeout(timeout)
				timeout = setTimeout(() => {
					value = newvalue;
					trigger()
				}, delay);
			}
		}
	})
}