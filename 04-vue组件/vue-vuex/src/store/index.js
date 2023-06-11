import { createStore } from 'vuex'
import home from './modules/Home'
import user from './modules/user'

const store = createStore({
	state() {
		return {
			rootCount : 0,
		}
	},
	getters: {
	},
	mutations: {
		increment(state) {
			state.rootCount++
		}
	},
	actions: {
	},
	modules: {
		home,
		user
	}
})

export default store


