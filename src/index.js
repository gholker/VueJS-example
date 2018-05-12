require("babel-core/register");
require("babel-polyfill");

import Vue from 'vue'

import HackerNewsComponent from './components/HackerNewsComponent.vue'
import AppComponent from './components/AppComponent.vue'

Vue.component('AppComponent', AppComponent)

new Vue({
  render: h => h(HackerNewsComponent),
}).$mount('#app')
