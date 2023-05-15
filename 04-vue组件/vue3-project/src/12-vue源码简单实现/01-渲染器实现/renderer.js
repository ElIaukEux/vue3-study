const h = (tag, props, children) => {
	return {  //h函数返回一个虚拟node
		tag,
		props,
		children
	}
}

const mount = (vnode, container) => {
	const el = vnode.el = document.createElement(vnode.tag)  //vnode.el 是vue中会保存的一份真实dom
	if(vnode.props) {
		for(const key in vnode.props) {
			let value = vnode.props[key]
			if(key.startsWith('on')) {
				el.addEventListener(key.slice(2).toLowerCase(), value) // 判断是否是 事件
			}else {
				el.setAttribute(key,value)  //添加属性
			}
		}
	}
	if(vnode.children) {
		// debugger	
		if(typeof vnode.children === 'string') {
			el.textContent = vnode.children;
		}else {
			vnode.children.forEach(item => {
				mount(item,el)
			});
		}
	}
	container.appendChild(el)
}

const patch = (n1, n2) => {
	// console.log(n1, n2);
	if(n1.tag == n2.tag) {
		const el = n2.el = n1.el
		
		// props处理
		const n1Props = n1.props || {}
		const n2Props = n2.props || {}

		// 1. 先将新节点的prop全部挂载到el上
		for(const key in n2Props) {
			let value = n2Props[key]
			if (key.startsWith('on')) {
				el.addEventListener(key.slice(2).toLowerCase(), value)
			}else {
				el.setAttribute(key, value)
			}
		}
		// 2. 判断旧节点上的属性新节点没有时，删除对应的属性
		for(const key in n1Props) {
			if(!(key in n2Props)) {
				el.removeAttribute(key)
			}
		}

		// child 处理
		const n1Child = n1.children;
		const n2Child = n2.children;
		// 1. 如果新节点的child是一个字符串，则直接将el设置为新节点的内容
		if(typeof n2Child === 'string') {
			el.textContent = n2Child
		}else {
		 // 2. 旧节点如果不是字符串
		 if(typeof n1Child === 'string') {
			 // 2.1 旧节点是一个字符串，将textContent 设置为空字符串
			el.innerHtml = ''
			// 2.2 新节点遍历，直接挂在到el
			n2Child.forEach(item => {
					mount(item, el)
			})
		 }else {
			// 3. 旧节点也是数组
			const MinLength = Math.min(n1Child.length, n2Child.length);
			// 3.1 遍历所有节点，新旧节点进行比较
			for(let i = 0 ; i < MinLength; i++ ) {
				patch(n1Child[i], n2Child[i])
			}
			// 3.2 如果新节点的length长,则剩余节点进行挂载
			if(n1Child.length < n2Child.length) {
				for(let i = MinLength ; i < n2Child.length; i++ ) {
					mount(n2Child[i], el)
				}
			}
			// 3.3 如果旧节点的length长，则剩余旧节点进行删除
			if(n1Child.length > n2Child.length) {
				for(let i = MinLength ; i < n1Child.length; i++ ) {
					el.removeChild(n1Child[i].el)
				}
			}
		 }
		}
	}else {
		// 新旧节点tag不同 --> 直接删除旧节点，挂在新节点
		let n1Parent = n1.el.parentNode;
		n1Parent.removeChild(n1.el);
		mount(n2, n1Parent)
	}
}