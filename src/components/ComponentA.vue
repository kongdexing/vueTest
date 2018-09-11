<template>
	<div class="comA">
		<p>{{message}}</p>
		<input v-model="username" />
		<button @click="onClickA">ClickA</button>
	</div>
</template>

<script>
	export default {
		data: function () {
			return {
				message: '子组件向父组件传递数据',
				username:''
			}
		},
		props:['msgFromP'],
		methods: {
			onClickA: function () {
				console.log('component a click '+this.username);
				//将username传递给父组件PageA
				this.$emit("transferUser",this.username);
			}
		}
	}
</script>

<style>
	.comA{
		padding: 20px;
		background-color: aliceblue;
	}
</style>
