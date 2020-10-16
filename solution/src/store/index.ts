import Vue from "vue";
import Vuex from "vuex";
import axios from "redaxios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    items: [],
  }),

  getters: {
    items: state => state.items,
  },

  mutations: {
    SET_ITEMS(state, items) {
      state.items = items;
    },
  },

  actions: {
    loadItems({ commit }) {
      axios
        .get("http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c")
        .then(response => response.data)
        .then(items => {
          commit("SET_ITEMS", items);
        });
    },
  },
});
