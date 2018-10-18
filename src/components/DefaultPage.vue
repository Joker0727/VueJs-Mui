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
						"imgUrl": "static/img/1.jpg",
						"describe": "这里显示文章摘要，让读者对文章内容有个粗略的概念..."
					},
					{
						"imgUrl": "static/img/2.jpg",
						"describe": "这里显示文章摘要，让读者对文章内容有个粗略的概念..."
					},
					{
						"imgUrl": "static/img/3.jpg",
						"describe": "这里显示文章摘要，让读者对文章内容有个粗略的概念..."
					},
					{
						"imgUrl": "static/img/4.jpg",
						"describe": "这里显示文章摘要，让读者对文章内容有个粗略的概念..."
					},
					{
						"imgUrl": "static/img/2.jpg",
						"describe": "这里显示文章摘要，让读者对文章内容有个粗略的概念..."
					},
					{
						"imgUrl": "static/img/1.jpg",
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
