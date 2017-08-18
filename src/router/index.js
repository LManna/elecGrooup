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
	    path: '/dosm/tag',
	    component: () => import('../view/study_dosm/tag'),
	},
	{
	    path: '/dosm/content',
	    component: () => import('../view/study_dosm/content'),
	},
	{
	    path: '/dosm/data',
	    component: () => import('../view/study_dosm/data'),
	},
]

const router = new Router({
	mode: 'history',
  	routes
})

export default router