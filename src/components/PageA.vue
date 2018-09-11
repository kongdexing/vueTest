<template>
	<div>
		<div @click="divClick()">
			<p>PageA</p>
			<span v-once>这个不会改变{{message}}</span>

			<h2 v-text="message"></h2>
			<br/>
			<tempClick title='wangfen'></tempClick>
			<br/>
			<tempClick title='shufen'></tempClick>
			<br/>
			<input v-model="itemAct" v-on:keyup.enter="addAct">
			<ul v-on:click="ulClick()">
				<li v-for="temp in items" :key='temp.label' v-bind:class="{lifinished:temp.isFinish}" v-on:click.prevent="finishAct(temp)">
					{{temp.label}}---{{temp.time}}
				</li>
			</ul>
			//transferUser为自定义方法，用于接收子组件传入的数据
			<component-a @transferUser="getUser" msgFromP="hello son"></component-a>
		</div>
		<!-- <div id="a_temp1"></div> -->
		<!-- <news-list></news-list> -->
	</div>
</template>

<script>
	import Vue from 'vue'
	import store from './store.js'
	import ComponentA from './ComponentA.vue'

	// console.log(store.fetch());

	export default ({
		components: {
			ComponentA
		},
		data: function () {
			return {
				message: 1,
				items: store.fetch(),
				itemAct: ''
			}
		},
		methods: {
			finishAct: function (item) {
				console.log('act click ' + item.label);
			},
			ulClick: function () {
				console.log('ul click');
			},
			divClick: function () {
				console.log('div click');
			},
			addAct: function () {
				if(this.items==undefined){
					this.items = new Array();
				}
				this.items.push({
					label: this.itemAct,
					time: '6:00',
					isFinish: false
				})
				// store.save(this.items);
				console.log('keyup ' + this.itemAct);
				this.itemAct = '';
			},
			getUser:function(name){
				this.itemAct = name;
			}
		},
		watch: {
			items: {
				handler: function (items) {
					store.save(items);
					// console.log('new val is %s,old val is %s', val, oldVal);
				},
				deep: true
			}
		},
		activated: function () {
			console.log('A activated')
		},
		beforeCreate: function () {
			console.log('A beforeCreate')
		},
		beforeMount: function () {
			console.log('A beforeMount')
		},
		beforeUpdate: function () {
			console.log('A beforeUpdate')
		},
		beforeDestroy: function () {
			console.log('A beforeDestroy')
		},
		destroyed: function () {
			this.message++;
			console.log('A destroyed ' + this.message)
		},
		created: function () {
			console.log('A created' + this.message)
		}

	})

	Vue.component("tempClick", {
		data: function () {
			return {
				count: 0
			}
		},
		props: ['title'],
		template: '<button v-on:click="count++">{{title}} clicked {{ count }} times.</button>'
	})
</script>

<style>
	.lifinished {
		text-decoration: underline;
	}
</style>
