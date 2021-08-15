import Vue from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';
import VueRouter from 'vue-router';
import routes from './router/index';
Vue.config.productionTip = false;

Vue.use(Antd);
Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
