<template>
	<div id="pic">
		<!--这里放置真实显示的DOM内容-->
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="pic in picArr">
				<a href="/PicDetailsPage">
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
						"imgUrl": "http://118.178.243.105/img/2,01fd7d2e8c946b.jpg",
						"keyWord": "你好",
						"describe": "这里显示文章摘要，让读者对文章内容有个粗略的概念..."
					},
					{
						"imgUrl": "http://118.178.243.105/img/3,01fe95f93c284f.jpg",
						"keyWord": "你好",
						"describe": "这里显示文章摘要，让读者对文章内容有个粗略的概念..."
					},
					{
						"imgUrl": "http://118.178.243.105/img/7,01fd07f9803742.jpg",
						"keyWord": "你好",
						"describe": "这里显示文章摘要，让读者对文章内容有个粗略的概念..."
					},
					{
						"imgUrl": "http://118.178.243.105/img/5,01fcdf9bc495e6.jpg",
						"keyWord": "你好",
						"describe": "这里显示文章摘要，让读者对文章内容有个粗略的概念..."
					},
					{
						"imgUrl": "http://118.178.243.105/img/5,01f67c0a9ced13.jpg",
						"keyWord": "你好",
						"describe": "这里显示文章摘要，让读者对文章内容有个粗略的概念..."
					},
					{
						"imgUrl": "http://118.178.243.105/img/3,01b45b4ef95089.jpg",
						"keyWord": "你好",
						"describe": "这里显示文章摘要，让读者对文章内容有个粗略的概念..."
					},
					{
						"imgUrl": "http://118.178.243.105/img/5,01fcdf9bc495e6.jpg",
						"keyWord": "你好",
						"describe": "这里显示文章摘要，让读者对文章内容有个粗略的概念..."
					},
					{
						"imgUrl": "http://118.178.243.105/img/6,01fce0d6b31bc7.jpg",
						"keyWord": "你好",
						"describe": "这里显示文章摘要，让读者对文章内容有个粗略的概念..."
					},
					{
						"imgUrl": "http://118.178.243.105/img/1,015d0b4d02d778.jpg",
						"keyWord": "你好",
						"describe": "这里显示文章摘要，让读者对文章内容有个粗略的概念..."
					},
					{
						"imgUrl": "http://118.178.243.105/img/3,01b45b4ef95089.jpg",
						"keyWord": "你好",
						"describe": "这里显示文章摘要，让读者对文章内容有个粗略的概念..."
					},
					{
						"imgUrl": "http://118.178.243.105/img/7,01e92a2d56f427.jpg",
						"keyWord": "你好",
						"describe": "这里显示文章摘要，让读者对文章内容有个粗略的概念..."
					},
					{
						"imgUrl": "http://118.178.243.105/img/5,9a2893d77567.jpg",
						"keyWord": "你好",
						"describe": "这里显示文章摘要，让读者对文章内容有个粗略的概念..."
					}
				],
			}
		}
	}
	mui.init();
	mui.ready(function() {

	})
</script>

<style scoped>
	#pic {
		margin-bottom: 45px;
	}
</style>
