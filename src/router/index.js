import Vue from 'vue';
import store from '@/store';
import VueRouter from 'vue-router';
//
import Home from '../views/Home.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/soloBlog',
    name: 'soloBlog',
    component: () => import('@/views/soloBlog.vue'),
  },
  {
    path: '/clients',
    name: 'clients',
    component: () => import('@/views/clients.vue'),
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404.vue'),
  },
  {
    path: '/soloBlog/:slug',
    name: 'SoloBlogItem',
    component: () => import('@/views/soloBlogItem.vue'),
  },
  {
    path: '/client/:slug',
    name: 'client',
    component: () => import('@/views/client.vue'),


  },
];


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  store.dispatch('auth/login').then(
    () => {
      next();
    },
    () => {
      next('/login');
    },
  );
});

export default router;
