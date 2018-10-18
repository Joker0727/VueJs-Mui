// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mounted:function(){///////////很重要
	  ///mounted用来解决路由跳转冲突的问题
            mui("body").on("tap","a",function(){
				window.location.href = this.href;
			});
        }
})
