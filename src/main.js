import Vue from 'vue'
import App from './App.vue'
import 'carbon-components/css/carbon-components.css';
import CarbonComponentsVue from '@carbon/vue/src/index';
Vue.use(CarbonComponentsVue);

new Vue({
  el: '#app',
  render: h => h(App)
})
