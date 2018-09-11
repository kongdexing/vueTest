<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		 
		<div id="app1">
			<span v-bind:title="datatime" v-on:click="spanClick1()">
				PageC！
			</span>
		</div>
	
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data() {
			return {
				msg: 'Welcome to Your Vue.js',
				datatime:'页面加载于'+new Date().toLocaleString()
			}
		},
		methods:{
			spanClick1:function(){
				console.log('span click');
				this.$router.push({name: 'pagec',params:{ id:'1'}});
			}
		}
	}
	
	
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1,
	h2 {
		font-weight: normal;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>
