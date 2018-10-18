<template>
	<div id="vheader">
		<header class="mui-bar mui-bar-nav mui-bar-transparent">
			<a class="mui-icon mui-icon-left-nav mui-pull-left" href="javascript:void(0)" @tap="back"></a>
			<a id="moreBtn" class="mui-icon mui-icon-more mui-pull-right" href="javascript:void(0)" @tap="toggleMore"></a>
			<h1 class="mui-title">首页</h1>
		</header>		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		methods: {
			back: function() {
				if (this.$route.path != "/")
					this.$router.go(-1);
			},
			toggleMore: function() {
				mui('#more').popover('toggle');
			}
		}
	}
	mui.init();
	mui.ready(function() {

	});
</script>

<style scoped>

</style>
