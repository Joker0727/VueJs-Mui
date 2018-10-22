<template>
	<div id="defaultPage">
		<div class="mui-card" v-for="card in cardArr">
			
			<div class="mui-card-header mui-card-media" style="height:40vw;" :style="{backgroundImage: 'url(' + card.imgUrl+ ')'}">
				
			</div>
			<div class="mui-card-footer">
				<p>{{card.describe}}</p>
			</div>
		</div>
	</div>
</template>

<script scoped>
	export default {
		data() {
			return {
				cardArr: [{
						"imgUrl": "http://118.178.243.105/img/2,01fd7d2e8c946b.jpg",
						"describe": "这里显示文章摘要，让读者对文章内容有个粗略的概念..."
					},
					{
						"imgUrl": "http://118.178.243.105/img/6,01fce0d6b31bc7.jpg",
						"describe": "这里显示文章摘要，让读者对文章内容有个粗略的概念..."
					},
					{
						"imgUrl": "http://118.178.243.105/img/6,01fd0a25ddf67f.jpg",
						"describe": "这里显示文章摘要，让读者对文章内容有个粗略的概念..."
					},
					{
						"imgUrl": "http://118.178.243.105/img/5,01fcdf9bc495e6.jpg",
						"describe": "这里显示文章摘要，让读者对文章内容有个粗略的概念..."
					},
					{
						"imgUrl": "http://118.178.243.105/img/3,01fe95f93c284f.jpg",
						"describe": "这里显示文章摘要，让读者对文章内容有个粗略的概念..."
					},
					{
						"imgUrl": "http://118.178.243.105/img/2,01f73a8c8cf9bd.jpg",
						"describe": "这里显示文章摘要，让读者对文章内容有个粗略的概念..."
					}
				],
			}
		}
	}
	mui.init();
	mui.ready(function() {
		mui("#defaultPage").on("tap", ".mui-card", toPicList);
	})

	function toPicList() {
		mui.openWindow({
			url: '/PicList',
			extras: {
				id: '100'
			}
		});
	}
</script>

<style scoped>
	#defaultPage {
		width: 100%;
		margin-bottom: 45px;
	}
</style>
