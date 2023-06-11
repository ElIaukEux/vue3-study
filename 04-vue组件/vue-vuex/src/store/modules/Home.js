const homeModule = {
	namespaced: true,
	state() {
		return {
			homeCount: 10
		}
	},
	getters: {
		doubleHomeCount(state) {
			return state.homeCount * 2
		}
	},
	mutations: {
		increment(state) {
			state.homeCount++
		}
	},
	actions:{
		incrementAction({state, dispatch, commit, rootState, getters, rootGetters}) {
			commit('increment')
			commit('increment', null, {root: true})  // 代表提交到root中的increment
		}
	}
}

export default homeModule