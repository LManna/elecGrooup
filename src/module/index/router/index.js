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
	// 私人充电桩
	{
	    path: '/priCharge/login',
	    component: () => import('../views/login'),
	    meta: {headerTitle: "登陆/注册"}
	},
	{
	    path: '/priCharge/list',
	    component: () => import('../views/list'),
	    meta: {headerTitle: "充电桩列表页"}
	},
	{
	    path: '/priCharge/my',
	    component: () => import('../views/my'),
	    meta: {headerTitle: "个人中心"}
	},
	{
	    path: '/priCharge/detail',
	    component: () => import('../views/detail'),
	    meta: {headerTitle: "充电桩详情"}
	},
	{
	    path: '/priCharge/ownList',
	    component: () => import('../views/ownList'),
	    meta: {headerTitle: "我的订单"}
	},
]

const router = new Router({
	mode: 'history',
  	routes
})

export default router