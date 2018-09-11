<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"/> -->
		<!-- <router-link  to='/components/PageC'>PageC</router-link> -->
		<div class="nav-top">
			<router-link :to="{name:'pa'}">
				<span>PageA</span>
			</router-link>
			<router-link :to="{name:'pb'}">
				<span>PageB</span>
			</router-link>
			<router-link :to="{name:'pc'}">
				<span>PageC</span>
			</router-link>
		</div>
    <router-view/>
		<!-- <helloworld></helloworld> -->
  </div>
</template>

<script>
// 	import helloWorld from 'components/HelloWorld'
// 	export default{
// 		components:{
// 			helloWorld
// 		}
// 	}
	
export default {
  name: 'App',
	activated:function(){
		console.log('activated');
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav-top{
	width: 100%;
	background-color: antiquewhite;
}
.nav-top span{
	width: 33%;
	margin: 0 auto;
	float: left;
	text-align: center;
}
</style>
