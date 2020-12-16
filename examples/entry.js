import Vue from 'vue';
import entry from './app';
import VueRouter from 'vue-router';
import Element from 'main/index.js';
// import hljs from 'highlight.js';
import routes from './route.config';

import 'packages/theme-chalk/src/index.scss';

Vue.use(Element);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
});

new Vue({ // eslint-disable-line
  ...entry,
  router
}).$mount('#app');
