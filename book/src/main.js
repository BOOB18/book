import Vue from 'vue'//不加路径是默认去node_modules中查找
import App from './App.vue'
import router from './router/router.js'
import store from  './store/store'
import './less/common.less'


import '../node_modules/swiper/css/swiper.css'
Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
