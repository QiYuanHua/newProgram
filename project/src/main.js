// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import 'lib-flexible'
import Axios from 'axios'
import store from './store'
Vue.config.productionTip = false

Vue.use(MintUI)
Vue.prototype.$http = Axios;
Vue.prototype.baseUrl="/api";
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
