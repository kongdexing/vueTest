import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PageA from '@/components/PageA'
import PageB from '@/components/PageB'
import PageC from '@/components/PageC'

Vue.use(Router)

export default new Router({
	routes:[
// 		{
// 			path: '/',
// 			name: 'HelloWorld',
// 			component: HelloWorld
// 		},
		{
			path: '/',
			name: 'pa',
			component: PageA
		},
		{
			path: '/pb',
			name: 'pb',
			component: PageB
		},
		{
			path: '/pc',
			name: 'pc',
			component: PageC
		}	
		
	]
})