<template>
	<!-- 侧滑导航根容器 -->
	<div id="app" class="mui-off-canvas-wrap mui-draggable">
		<!-- 菜单容器 -->
		<aside class="mui-off-canvas-left menu-style">
			<div class="mui-scroll-wrapper">
				<div class="mui-scroll">
					<!-- 菜单具体展示内容 -->
					菜单具体展示内容
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
			<VFoot></VFoot>
		</div>
	</div>
</template>

<script>
	import VHeader from '@/components/VHeader';
	import VFoot from '@/components/VFoot';

	export default {
		components: {
			VHeader,
			VFoot
		},
	}
	// 	mui.init({
	// 		pullRefresh: {
	// 			container: "#myScroll", //待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
	// 			up: {
	// 				height: 50, //可选.默认50.触发上拉加载拖动距离
	// 				auto: true, //可选,默认false.自动上拉加载一次
	// 				contentrefresh: "正在加载...", //可选，正在加载状态时，上拉加载控件上显示的标题内容
	// 				contentnomore: '没有更多数据了', //可选，请求完毕若没有更多数据时显示的提醒内容；
	// 				callback: "console.log(123)" //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
	// 			}
	// 		}
	// 	});
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
