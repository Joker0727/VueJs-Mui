<template>
	<!-- 侧滑导航根容器 -->
	<div id="app" class="mui-off-canvas-wrap mui-draggable">
		<!-- 菜单容器 -->
		<aside class="mui-off-canvas-left menu-style">
			<div class="mui-scroll-wrapper">
				<div class="mui-scroll">
					<!-- 菜单具体展示内容 -->
					<VLeftMenu></VLeftMenu>
				</div>
			</div>
		</aside>
		<!-- 主页面容器 -->
		<div class="mui-inner-wrap">

			<!-- 主页面标题-->
			<VHeader></VHeader>

			<div id="vbody" class="mui-content mui-scroll-wrapper">
				<div id="myScroll" class="mui-scroll">
					<!-- 主界面具体展示内容 -->
					<router-view></router-view>
				</div>
			</div>

			<!-- 主页面底部 -->
			<!-- <VFoot></VFoot> -->
		</div>
	</div>
</template>

<script>
	import VHeader from '@/components/VHeader';
	import VFoot from '@/components/VFoot';
	import VLeftMenu from '@/components/VLeftMenu';
	
	export default {
		components: {
			VHeader,
			VFoot,
			VLeftMenu
		},
	}
	mui.init({
		swipeBack:true //启用右滑关闭功能
	})
	mui.ready(function() {
		mui(".mui-scroll-wrapper").scroll();
		//获得slider插件对象
		var gallery = mui('.mui-slider');
		gallery.slider({
			interval: 3000 //自动轮播周期，若为0则不自动播放，默认为0；
		});
	
	});

	function GetJsonData() {
		console.log(123);
		this.endPullupToRefresh(true | false);
	}
</script>

<style scoped>
	#myScroll {
		margin-top: 45px;
	}
</style>
