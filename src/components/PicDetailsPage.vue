<template>
	<div>
		<div class="mui-card" v-for="pic in picArr">
			<div class="mui-card-header mui-card-media" style="height:100vw;" 
			:style="{backgroundImage: 'url(' + pic.imgUrl+ ')'}">
			</div>
		</div>
	</div>

</template>



<script>
	export default {
		data() {
			return {
				picArr: [{
						"imgUrl": "http://118.178.243.105/img/2,01fd7d2e8c946b.jpg",

					},
					{
						"imgUrl": "http://118.178.243.105/img/6,01d37f17f9b6b3.jpg",
					},
					{
						"imgUrl": "http://118.178.243.105/img/6,01d380a44affdb.jpg",
					},
					{
						"imgUrl": "http://118.178.243.105/img/3,01d38196a2d913.jpg",
					},
					{
						"imgUrl": "http://118.178.243.105/img/6,017477261bcad1.jpg",
					},
					{
						"imgUrl": "http://118.178.243.105/img/6,015f97eecfe77a.jpg",
					}
				],
			}
		}
	}
	mui.init();
	mui.ready(function() {});
</script>

<style scoped>

</style>
