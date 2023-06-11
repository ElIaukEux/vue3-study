import { useStore } from 'vuex'
import { computed } from 'vue'
export function useMapper(mapper, mapFn) {
	const store = useStore();

	const storeStateFns = mapFn(mapper)

	const storeState = {}

	Object.keys(storeStateFns).forEach(item => {
		const fn = storeStateFns[item].bind({$store: store})
		storeState[item] = computed(fn)
	})
	return storeState
}