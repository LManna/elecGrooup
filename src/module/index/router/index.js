import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

Vue.use(Router)

var routes = [
	{
	    path: '/',
	    component: () => import('@/common/Hello'),
	    meta:{headerTitle: "首页"}
	},
	{
	    path: '/tag',
	    component: () => import('../views/demo/tag'),
	    meta:{headerTitle: "标签页"}
	},
	{
	    path: '/content',
	    component: () => import('../views/demo/content'),
	    meta: {headerTitle: "内容页"}
	},
	{
	    path: '/data',
	    component: () => import('../views/demo/data'),
	    meta: {headerTitle: "数据页"}
	},
]

const router = new Router({
	mode: 'history',
  	routes
})

export default router