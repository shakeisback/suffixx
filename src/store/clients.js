import http from '@/plugins/http';

const mutt = {
  SET_CLIENTS: 'SET_CLIENTS',
  SET_CLIENT: 'SET_CLIENT',
};

export default {
  namespaced: true,
  state: {
    clients: [],
    client: [],
  },
  mutations: {
    [mutt.SET_CLIENTS](state, clients) {
      state.clients = clients;
    },
    [mutt.SET_CLIENT](state, value) {
      state.client = value;
    },
    [mutt.DELETE_CLIENT](state) {
      state.client = [];
    },
  },
  actions: {
    getClients({ commit, state }) {
      if (state.clients.length) {
        return true;
      }
      return new Promise((resolve) => {
        http.get('/api/content/sufixforlogos/clients').then((res) => {
          commit(mutt.SET_CLIENTS, res.data.items);
          resolve(res.data.items);
        });
      });
    },
    getClientsBySlug({ commit }, slug) {
      return new Promise((resolve) => {
        http.get('/api/content/sufixforlogos/clients', {
          params: {
            $filter: `data/slug/iv eq '${slug}'`,
          },
        }).then((res) => {
          commit(mutt.SET_CLIENT, res.data.items);
          resolve(res.data.items);
        });
      });
    },
  },
};
