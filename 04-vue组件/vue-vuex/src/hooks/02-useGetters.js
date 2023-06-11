import { mapGetters, createNamespacedHelpers } from 'vuex'
import { useMapper } from './useMapper'
export function useGetters(mapper, moduleName) {
	let gettersFn = mapGetters;
	if(moduleName) {
		gettersFn = createNamespacedHelpers(moduleName).mapGetters
	}
	return useMapper(mapper, gettersFn)
}