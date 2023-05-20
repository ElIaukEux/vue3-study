
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
	Object.keys(raw).forEach(item => {
		let dep = getDep(raw, item)
		let value = raw[item]
		Object.defineProperty(raw,item,{
			get() {
				dep.depend()
				return value
			},
			set(newValue) {
				if(value !== newValue) {
					value = newValue
					dep.notice();					
				}
			}
		})
	})
	return raw
}

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

other.friends = 'llll'
// watchEffect(()=> {
// 	console.log(other.friends);	
// })
