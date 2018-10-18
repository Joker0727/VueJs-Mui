<template>
	<div id="pic">
		<!--这里放置真实显示的DOM内容-->
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="pic in picArr">
				<a href="javascript:void(0)">
					<img class="mui-media-object mui-pull-left" :src="pic.imgUrl">
					<div class="mui-media-body">
						{{pic.keyWord}}
						<p class="mui-ellipsis">{{pic.describe}}</p>
					</div>
				</a>
			</li>
		</ul>
	</div>
</template>

<script scoped>
	export default {
		data() {
			return {
				picArr: [{
						"imgUrl": "static/img/1.jpg",
						"keyWord": "你好",
						"describe": "这里显示文章摘要，让读者对文章内容有个粗略的概念..."
					},
					{
						"imgUrl": "static/img/2.jpg",
						"keyWord": "你好",
						"describe": "这里显示文章摘要，让读者对文章内容有个粗略的概念..."
					},
					{
						"imgUrl": "static/img/3.jpg",
						"keyWord": "你好",
						"describe": "这里显示文章摘要，让读者对文章内容有个粗略的概念..."
					},
					{
						"imgUrl": "static/img/4.jpg",
						"keyWord": "你好",
						"describe": "这里显示文章摘要，让读者对文章内容有个粗略的概念..."
					},
					{
						"imgUrl": "static/img/2.jpg",
						"keyWord": "你好",
						"describe": "这里显示文章摘要，让读者对文章内容有个粗略的概念..."
					},
					{
						"imgUrl": "static/img/1.jpg",
						"keyWord": "你好",
						"describe": "这里显示文章摘要，让读者对文章内容有个粗略的概念..."
					},
					{
						"imgUrl": "static/img/4.jpg",
						"keyWord": "你好",
						"describe": "这里显示文章摘要，让读者对文章内容有个粗略的概念..."
					},
					{
						"imgUrl": "static/img/1.jpg",
						"keyWord": "你好",
						"describe": "这里显示文章摘要，让读者对文章内容有个粗略的概念..."
					},
					{
						"imgUrl": "static/img/3.jpg",
						"keyWord": "你好",
						"describe": "这里显示文章摘要，让读者对文章内容有个粗略的概念..."
					},
					{
						"imgUrl": "static/img/4.jpg",
						"keyWord": "你好",
						"describe": "这里显示文章摘要，让读者对文章内容有个粗略的概念..."
					},
					{
						"imgUrl": "static/img/1.jpg",
						"keyWord": "你好",
						"describe": "这里显示文章摘要，让读者对文章内容有个粗略的概念..."
					},
					{
						"imgUrl": "static/img/3.jpg",
						"keyWord": "你好",
						"describe": "这里显示文章摘要，让读者对文章内容有个粗略的概念..."
					}
				],
			}
		}
	}
	mui.init();
	mui.ready(function() {
		mui("#pic").on("tap", "li", toPicDetailsPage);
	})

	function toPicDetailsPage() {
		console.log("li");
		mui.openWindow({
			url: '/PicDetailsPage',                
			extras: {
				id: '100'
			}
		});
	}
</script>

<style scoped>
	#pic {
		margin-bottom: 45px;
	}
</style>
