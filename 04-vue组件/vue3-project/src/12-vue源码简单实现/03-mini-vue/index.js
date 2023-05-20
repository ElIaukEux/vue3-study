function createApp(rootComponent) {
	return {
		mount(selector) {
			const container = document.querySelector(selector)
			let isMounted = false;
			let oldVnode = null
			watchEffect(function() {
				if(!isMounted) {
					console.log('走1');
					oldVnode = rootComponent.render()
					mount(oldVnode, container)
					isMounted = true
				}else {
					console.log('走2');
					const newVnode = rootComponent.render();
					patch(oldVnode, newVnode);
					oldVnode = newVnode
				}
			})
		}
	}
}