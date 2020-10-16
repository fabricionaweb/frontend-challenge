import Vue from "vue";
import Vuex from "vuex";
import axios from "redaxios";

Vue.use(Vuex);

const API_URL = process.env.VUE_APP_API_URL;

const store = new Vuex.Store({
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
        .get(API_URL)
        .then(response => response.data)
        .then(items => {
          commit("SET_ITEMS", items);
        });
    },
  },
});

export default store;
