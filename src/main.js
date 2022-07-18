import Vue from 'vue'
import App from './App.vue'
import store from '@/store/index'

// - - - - - STYLES - - - - - //
import '@/styles/app.scss';

// - - - - - COMPONENTS- - - - - //
import VLoader from '@/components/common/VLoader';
import VOverlay from '@/components/common/VOverlay';

Vue.component("VLoader", VLoader);
Vue.component("VOverlay", VOverlay);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
