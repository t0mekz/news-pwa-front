import axios from 'axios';
import Vue from 'vue';
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    news: []
  },
  mutations: {
    news(state, { news }) {
      // news = Deserialize.json(news);
      Vue.set(state, "news", news);
    }
  },
  actions: {
    fetch({ commit }, { path }) {
      axios.get(path).then( response => {
        commit("news", { news: response.data.articles });
      })
    }
  }
});
