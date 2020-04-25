import http from '@/plugins/http';

const mutt = {
  SET_TOKEN: 'SET_TOKEN',

};

export default {
  namespaced: true,
  state: {
    token: null,

  },
  mutations: {
    [mutt.SET_TOKEN](state, token = localStorage.token) {
      state.token = token;
      localStorage.token = token;
      http.defaults.headers.common.Authorization = `Bearer ${token}`;
    },

  },
  actions: {
    login({ commit, getters }) {
      if (getters.isLogin) return Promise.resolve();

      return new Promise((resolve) => {
        const body = new FormData();
        body.set('grant_type', 'client_credentials');
        body.set('client_id', 'sufixforlogos:default');
        body.set('scope', 'squidex-api');
        body.set(
          'client_secret',
          'bi3pahhwozfjqofpgamyzvxcznoqbpyvmtjvmvqwsyax',
        );

        http.post('/identity-server/connect/token', body).then(
          (r) => {
            const token = r.data.access_token;
            commit(mutt.SET_TOKEN, token);
            // dispatch('translations/getAll', null, { root: true });
            resolve(r.data);
          },

        );
      });
    },
  },
  getters: {
    isLogin(state) {
      return !!state.token && localStorage.token;
    },
  },
};
