import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import WorldCup from './views/WorldCup.vue';
import Trump from './views/Trump.vue';
import Bitcoin from './views/BitCoin.vue';
import About from './views/About.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/world-cup',
      name: 'world-cup',
      component: WorldCup,
    },
    {
      path: '/trump',
      name: 'trump',
      component: Trump,
    },
    {
      path: '/bitcoin',
      name: 'bitcoin',
      component: Bitcoin,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});
