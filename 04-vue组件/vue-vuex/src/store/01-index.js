import { createStore } from 'vuex'

const store = createStore({
	state() {
		return {
			count : 0,
			name: '小明',
			age: 23,
			books: [
				{name: 'vuejs', price: 110, count: 2},
				{name: 'vuex', price: 78, count: 2},
				{name: 'vue-router', price: 80, count: 3},
			]
		}
	},
	getters: {
		// totalPrice(state) {
		// 	let total = 0;
		// 	state.books.forEach(item => {
		// 		total+= item.price * item.count	
		// 	})
		// 	return total
		// }
		totalPrice(state, getters) {
			return function(price) {
				let total = 0;
				// state.books.forEach(item => {
				// 	if(item.count > price){
				// 		total+= item.price * item.count	
				// 	}
				// })
				for(let item of state.books) {
					if(item.count <= price) continue
					total += item.price * item.count
				}
				return total
			}
		}
	},
	mutations: {
		increment(state) {
			return state.count++
		},
		decrement(state) {
			return state.count --
		},
		incrementN(state, payload) {
			return state.count += payload
		}
	},
	actions: {
		incrementActions(context) {
			setTimeout(() => {
				context.commit('increment')
			}, 1000);
		}
	}
})

export default store


