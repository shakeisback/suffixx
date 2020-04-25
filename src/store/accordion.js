import http from '@/plugins/http';

const mutt = {
  SET_ACCORDION: 'SET_ACCORDION',
};

export default {
  namespaced: true,
  state: {
    collapse: [],
  },
  mutations: {
    [mutt.SET_ACCORDION](state, collapse) {
      state.collapse = collapse;
    },
  },
  actions: {
    getAccordion({ commit, state }) {
      return new Promise((resolve) => {
        if (state.collapse.length) resolve(state.collapse);
        http.get('/api/content/vsratka/accordion').then((res) => {
          commit(mutt.SET_ACCORDION, res.data.items);
          resolve(res.data.items);
        });
      });
    },
  },
};
