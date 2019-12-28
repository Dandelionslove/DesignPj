// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 定义中央事件总线
const EventBus = new Vue();
// 将中央事件总线赋值到 Vue.prototype 上，这样所有组件都能访问到了
Vue.prototype.$EventBus = EventBus;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
