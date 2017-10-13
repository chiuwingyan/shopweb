// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import IndexPage from './pages/index'
import VueResource from 'vue-resource'
import DetailPage from './pages/detail'
import DetailAnaPage from './pages/detail/analysis'
import DetailCouPage from './pages/detail/count'
import DetailForPage from './pages/detail/forecast'
import DetailPubPage from './pages/detail/publish'
import OrderListPages from './pages/orderList'
/* eslint-disable no-new */
Vue.use(VueRouter)
Vue.use(VueResource)
let router=new VueRouter({
	mode: 'history',
	routes:[
	{
		path:'/',
		component:IndexPage
	},
	{
		path:'/orderList',
		component:OrderListPages
	},
	{
		path:'/detail',
		component:DetailPage,
		redirect:'/detail/analysis',
		children:[
		{
		path: 'analysis',
		component:DetailAnaPage
	},
	{
		path: 'count',
		component:DetailCouPage
	},
	{
		path: 'forecast',
		component:DetailForPage
	},
	{	path: 'publish',
		component:DetailPubPage
	}
		]
	}
	]
})
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
