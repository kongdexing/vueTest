<template>
	<div id="pagec">
		<h1 v-on:click="gotoHello">哈哈I am PageC</h1>
		<router-view/>
	</div>
</template>

<script>
	export default{
		methods:{
			gotoHello:function(){
				console.log('gotoHello');
				// alert('哈哈');
				this.$router.push({name: 'HelloWorld',params:{ id:'1'}})
			}
		}
	}
</script>

<style>
</style>
