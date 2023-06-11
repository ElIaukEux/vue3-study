import { mapState, createNamespacedHelpers } from 'vuex'
import { useMapper } from './useMapper'
export function useState(mapper, moduleName) {
	let stateFn = mapState;
	if(moduleName) {
		stateFn = createNamespacedHelpers(moduleName).mapState
	}
	return useMapper(mapper, stateFn)
}