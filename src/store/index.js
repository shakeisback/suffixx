import Vue from 'vue';
import Vuex from 'vuex';

import auth from '@/store/auth';

import accordion from '@/store/accordion';
import services from '@/store/services';
import blog from '@/store/blog';
import translations from '@/store/translations';
import subscribe from '@/store/subscribe';
import clients from '@/store/clients';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    accordion,
    services,
    blog,
    translations,
    subscribe,
    clients,
  },
});
