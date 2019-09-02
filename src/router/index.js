import Vue from 'vue'
import Router from 'vue-router'
import { topRouterMap } from "./topRouter"
import { Layout,Content }  from "../layout"; // 页面整体布局

process.env.NODE_ENV === "development" ? Vue.use(Router) : null;

function filterTopRouterMap(name){
	let router = topRouterMap.find((item) => {
		return item.parentName === name;
	});
	return router.data; // arr
}

//默认不需要权限的页面
export const constantRouterMap = [
  {
    path: '/',
    component: Layout,
		redirect: '/home',
		hidden: true
  },
  { path: '/login',
    name: 'login',
    component:() => import('@/pages/login'),
    hidden: true
  },
  { path: '/404',
    component: () => import('@/pages/errorPage/404'),
    hidden: true
  },
  { path: '/401',
    component: () => import('@/pages/errorPage/401'),
    hidden: true
  },
  {
		path: '/home',
		name: 'home',
    component:Layout,
    meta: {
			title:'首页',
		  icon: 'icondashboard',
    },
    noDropdown: true,
    children:[
			{
				path: 'index',
				meta: {
					title:'首页',
					icon:'icondashboard',
				  routerType:'leftmenu'
				},
        component: () => import('@/pages/index/index')
			}
		]
  }
]

export default new Router({
	mode:'history', // 默认为'hash'模式
	base: '/', // 添加跟目录,对应服务器部署子目录
	routes: constantRouterMap
})

//异步路由（需要权限的页面）
export const asyncRouterMap = [
	{
		path:'/userManager',
		name: 'userManage',
		component: Layout,
		meta: {
			title:'用户管理',
			icon: 'iconuser',
		},
		noDropdown: true,
		children:[
			{
				path:'userList',
				meta:{
					title:'用户管理',
					icon:'iconuser',
				  routerType:'leftmenu'
				},
				component: () => import('@/pages/userList/userList')
			}
		]
	},
	{
		path:'/share',
		name: 'share',
		component: Layout,
		meta: {
			title:'分享功能',
			icon: 'iconshare',
		},
		noDropdown: true,
		children:[
			{
				path:'share',
				meta:{
				  title:'分享功能',
				  icon:'iconshare',
				  routerType:'leftmenu'
				},
				component: () => import('@/pages/share'),
			}
		]
	},
  {
    path: '/error',
    component: Layout,
    name: 'errorPage',
    meta: {
      title: '错误页面',
      icon: 'iconError'
    },
    children: [
			{
				path: '401',
				name: 'page401',
				component: () => import('@/pages/errorPage/401'),
				meta: {
					title: '401',
					noCache: true
			  }
			},
			{
				path: '404',
				name: 'page404',
				component: () => import('@/pages/errorPage/404'),
				meta: {
					title: '404',
					noCache: true
				}
			}
    ]
  },
	{ path: '*', redirect: '/404', hidden: true }
	];

	/**
	 *  路由设置要求：
	 * 1、该路由有子菜单,可以设置多层嵌套路由children;如果没有子菜单,不需要设置children;通过item.children.length来判断路由的级数;
	 * 2、登录成功后,定位到系统首页时,需要加载页面整体布局组件Layout并进行子路由定向加载;
	 *
	 * 按需加载路由组件的2种方法：
	 * 1、component: () => import('@/page/login')
	 * 2、component:resolve => require(['@/page/fundPosition'], resolve)
	 *
	 *
	 *
	 * 什么情况下，路由会定位到404页面?
	 * 路由中redirect:'',不起作用？
	 * 三级子菜单要在顶部展示？
	 *
	 *
	 *
	 */
