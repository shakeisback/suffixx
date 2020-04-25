import http from '@/plugins/http';

const mutt = {
  SET_SERVICES: 'SET_SERVICES',
};

export default {
  namespaced: true,
  state: {
    services: [],
  },
  mutations: {
    [mutt.SET_SERVICES](state, services) {
      state.service = services;
    },
  },
  actions: {
    getServices({ commit, state }) {
      return new Promise((resolve) => {
        if (state.services.length) resolve(state.services);
        http.get('/api/content/sufixforlogos/services').then((res) => {
          commit(mutt.SET_SERVICES, res.data.items);
          resolve(res.data.items);
        });
      });
    },
  },
};
