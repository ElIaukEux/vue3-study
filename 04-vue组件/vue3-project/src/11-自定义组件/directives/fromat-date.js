	import dayjs from 'dayjs'

	export default function(app) {
		let format = 'YYYY-MM-DD HH:mm:ss'
		app.directive('format-date',{
			created(el,bingings) {
				if (bingings.value) {
					format = bingings.value
				}
			},
			mounted(el) {
				const textContent = el.textContent;
				let timestamp = parseInt(el.textContent)
				if(textContent.length == 10 ) {
					timestamp = timestamp * 1000 // 有的时间戳不是毫秒得转换
				}
				el.textContent = dayjs(timestamp).format(format);
			}
		})
	}