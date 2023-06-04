import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
	{ path:'/',redirect: '/home' },
	{ 
		path:'/home', 
		component: ()=> import(/*webpackChunkName: 'Home-chunk'*/ '../pages/HomePage.vue'),
		children: [
			{
				path: '',
				redirect: '/home/product'
			},
			{
				path: 'product',
				component: () => import ('../pages/ProductPage.vue')
			}
		]
	},
	{ path:'/about', component: ()=> import('../pages/AboutPage.vue') },
	{ path:'/user/:id', component: ()=> import('../pages/UserPage.vue') },
	{ path:'/:pathMatch(.*)*', component: ()=> import('../pages/NotFoundPage.vue') },
]

const router = createRouter({
	routes,
	history: createWebHashHistory()
})
export default router