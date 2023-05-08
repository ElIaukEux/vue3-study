const testMixin = {
	created() {
		console.log('test混入的');
	},
	methods: {
		testMethods() {
			console.log('mixin被点击');
		},
	},
}
export default testMixin