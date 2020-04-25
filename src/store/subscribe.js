import http from '@/plugins/http';


const mutt = {
  SET_SUBSCRIBE: 'SET_SUBSCRIBE',
};

export default {
  namespaced: true,
  state: {
    subscribe: [],
  },
  mutations: {
    [mutt.SET_SUBSCRIBE](state, subscribe) {
      state.subscribe = subscribe;
    },
  },
  actions: {
    getSubscribe({ commit, state }) {
      return new Promise((resolve) => {
        if (state.subscribe.length) resolve(state.subscribe);
        http.get('/api/content/sufixforlogos/subscribe').then((res) => {
          commit(mutt.SET_SUBSCRIBE, res.data.items);
          resolve(res.data.items);
        });
      });
    },
  },
};
