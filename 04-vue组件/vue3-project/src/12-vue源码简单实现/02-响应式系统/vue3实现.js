

// 依赖收集
class Dep {
	constructor() {
		this.subscribers = new Set();
	}
	depend () {
		if(acctiveEffect) {
			this.subscribers.add(acctiveEffect)
		}
	}
	notice() {
		this.subscribers.forEach(effect => {
			effect()
		});
	}
}

// 收集相关函数
// const dep = new Dep();
let acctiveEffect = null 
function watchEffect (effect) {
	acctiveEffect = effect
	// dep.depend()
	effect()
	acctiveEffect = null
}

// 根据传进来的对象和值返回一个dep
let targetMap = new WeakMap();
function getDep(target, key) {
	let depsMap = targetMap.get(target)
	if(!depsMap) {
		depsMap = new Map()
		targetMap.set(target,depsMap)
	}

	let dep = depsMap.get(key);
	if(!dep) {
		dep = new Dep();
		depsMap.set(key, dep);
	}
	 return dep;
}

function reactive(raw) {
	return new Proxy(raw, {
		get(target, key) {
			const dep = getDep(target, key);
			dep.depend();
			return target[key]
		},
		set(target,key,value) {
				const dep = getDep(target,key);
				target[key] = value
				dep.notice()
		}
	})
}

// function reactive(raw) {
// 	return new Proxy(raw, {
// 		get(target, key, receiver) {
// 			const dep = getDep(target, key);
// 			dep.depend();
// 			return Reflect.get(target, key, receiver)
// 		},
// 		set(target,key,value, receiver) {
// 				const dep = getDep(target,key);
// 				const result = Reflect.set(target, key, value, receiver)
// 				dep.notice()
// 				return result
// 		}
// 	})
// }

// 测试代码
const info = reactive({
	name: 'xw',
	age:24
})
const other =reactive( {
	friends: 34
})

watchEffect(() => {
	console.log('第一个',info.name,other.friends);
})
watchEffect(() => {
	console.log('第二个',info.age,other.friends);
})
watchEffect(() => {
	console.log('第三个',info.name,info.age);
})
watchEffect(() => {
	console.log('第四个',other.friends);
})

other.friends = 23
