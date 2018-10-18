import Vue from 'vue'
import Router from 'vue-router'
import DefaultPage from '@/components/DefaultPage';
import PicList from '@/components/PicList';
import PicDetailsPage from '@/components/PicDetailsPage';

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
		path: '/',
		name: 'DefaultPage',
		component: DefaultPage
	},
	{
		path: '/PicList',
		name: 'PicList',
		component: PicList
	},
	{
		path: '/PicDetailsPage',
		name: '/PicDetailsPage',
		component: PicDetailsPage
	}
	]
})
