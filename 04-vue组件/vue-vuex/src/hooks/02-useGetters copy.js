import { useStore, mapGetters } from 'vuex'
import { computed } from 'vue'
export function useGetters(mapper) {
	const store = useStore();

	const storeStateFns = mapGetters(mapper)

	const storeState = {}

	Object.keys(storeStateFns).forEach(item => {
		const fn = storeStateFns[item].bind({$store: store})
		storeState[item] = computed(fn)
	})
	return storeState
}