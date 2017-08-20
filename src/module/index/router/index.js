import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

Vue.use(Router)

var routes = [
	{
	    path: '/',
	    component: () => import('@/components/Hello'),
	},
	{
	    path: '/tag',
	    component: () => import('../views/study_dosm/tag'),
	},
	{
	    path: '/content',
	    component: () => import('../views/study_dosm/content'),
	},
	{
	    path: '/data',
	    component: () => import('../views/study_dosm/data'),
	},
]

const router = new Router({
	mode: 'history',
  	routes
})

export default router