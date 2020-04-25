import http from '@/plugins/http';
import Vue from 'vue';
/* eslint-disable */
const mutt = {
  SET_HOME_ARTICLES: "SET_HOME_ARTICLES",
  SET_FILT_ARTICLES: "SET_FILT_ARTICLES",
  SET_ARTICLES: "SET_ARTICLES",
  SET_TAGS: "SET_TAGS",
  SET_LOADED: "SET_LOADED",
  SET_SINGLE_ARCTICLE: "SET_SINGLE_ARCTICLE",
};

export { mutt };

export default {
  namespaced: true,
  state: {
    articleHome: {
    // news:[],
    // interviews:[],
    // lifestyle:[],
    
    },
    //
    articles: [],
    filteredArticles: [],
    tags: [],
    singleArticle: null,
    loaded: false
  },
  mutations: {
    [mutt.SET_HOME_ARTICLES](state, { tag, data }) {
      Vue.set(state.articleHome, tag, data);
    },
    //
    //
    //
    [mutt.SET_FILT_ARTICLES](state, articles) {
      state.filteredArticles = articles;
    },
    [mutt.SET_ARTICLES](state, articles) {
      state.articles = articles;
    },
    [mutt.SET_TAGS](state, tags) {
      state.tags = tags;
    },
    [mutt.SET_LOADED](state) {
      state.loaded = true;
    },
    [mutt.SET_SINGLE_ARCTICLE](state,articles){
      state.singleArticle = articles;
    }
    
  },
  actions: {
    getTags({ state, commit }) {
      if (state.tags.length) return Promise.resolve();

      return new Promise((resolve, reject) => {
        http.get("/api/content/sufixforlogos/categories").then(
          r => {
            commit(mutt.SET_TAGS, r.data.items);
            resolve(r.data);
          },
          ({ response }) => {
            reject(response.data);
          }
        );
      });
    },
    getArticles({ commit, state, dispatch }) {
      if (state.loaded) return;

      commit(mutt.SET_LOADED);
      return Promise.all([
        new Promise((resolve, reject) => {
          http.get("/api/content/sufixforlogos/articles").then(
            r => {
              commit(mutt.SET_ARTICLES, r.data.items);
              resolve(r.data);
            },
            ({ response }) => {
              reject(response.data);
            }
          );
        }),
        dispatch("getTags")
      ]);
    },
    getArticleBySlug({ commit }, slug) {
      return new Promise((resolve, reject) => {
        http
          .get("/api/content/sufixforlogos/articles", {
            params: {
              $filter: `data/slug/iv eq '${slug}'`
            }
          })
          .then(
            r => {
              const data = r.data.items[0];
              if (data) {
                commit(mutt.SET_SINGLE_ARCTICLE, r.data.items[0].data);
              } else {
                router.replace("/404");
              }
              resolve(r.data);
            },
            ({ response }) => {
              reject(response.data);
            }
          );
      });
    },
     
    lastTry({ dispatch, state, commit }) {
      return dispatch('getTags').then(() => {
        const requestsByTags = state.tags.map((tag, index) => new Promise((resolve) => {
          const objectWithSettings = {
            params: {
              $filter: `data/ref/iv eq '${tag.id}'`,
              $top: index === 0 ? 6 : 3,
            },
          };
          http.get('/api/content/sufixforlogos/articles', objectWithSettings).then((res) => {
            commit(mutt.SET_HOME_ARTICLES, {
              tag: tag.data.name,
              data: res.data.items,
            });
            resolve(res.data.items);
          });
        }));

        return Promise.all(requestsByTags);
      });
    },

    // 
    getArticlesForHome({ dispatch }) {
      return dispatch("getTags").then(() => {
        return dispatch("setArticlesWithTag");
      });
    },
    //
    //
    //
    //
    //
    getArtByTag({ state, commit, dispatch }, { tagName, isTagExist }) {
      return dispatch("getTags").then(() => {
        const findTag = state.tags.find(i => i.data.name === tagName);
        if (!findTag && isTagExist) return router.replace("/404");

        // - tag exist and valid || tag is not exist

        const getQueryData = () => {
          return isTagExist
            ? {
                params: {
                  $filter: `data/ref/iv eq '${findTag.id}'`
                }
              }
            : null;
        };

        return new Promise((resolve, reject) => {
          http.get("/api/content/sufixforlogos/articles", getQueryData()).then(
            r => {
              commit(mutt.SET_FILT_ARTICLES, r.data.items);
              resolve(r.data);
            },
            ({ response }) => {
              reject(response.data);
            }
          );
        });
      });
    }
  },
  //
  //
  //
  //
  //
  //
  //
  getters: {
    tagFirst(state) {
      return state.tags[0] || null;
    },
    tagExceptFirst(state) {
      return /* [1] */ state.tags.slice(1) /* [2, 3] */ || [];
    },
    getTagById(state) {
      return function(id) {
        return state.tags.find(i => {
          // console.log(i.id, id);
          return i.id === id;
        });
      };
    },
    articlesCount(state) {
      return state.articles.length;
    },
    firstArticle(state) {
      return state.articleHome.lifestyle[5] || null;
    },
    exceptFirstArtices(state) {
      return state.articles.splice(1) || [];
    },
    doubleLifestyle(state) {
      return state.articleHome.lifestyle.slice(3, 5);
    },
    smallLifestyle(state) {
      return state.articleHome.lifestyle.slice(0, 3);
    }
  }
};
