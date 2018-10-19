<template>
	<div>
		<div class="mui-card" v-for="i in 10">
			<div class="mui-card-header mui-card-media" 
			style="height:100vw;backgroundImage:url(static/img/1.jpg)">				
			</div>
		</div>
	</div>
	
</template>



<script>
	export default {

	}
	mui.init();
	mui.ready(function() {});
</script>

<style scoped>
	
</style>
