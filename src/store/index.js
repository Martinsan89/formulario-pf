import Vue from "vue";
import Vuex from "vuex";
const axios = require("axios");
const apiURL = "https://628e2cc9a339dfef87a8fd8c.mockapi.io/api";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    users: [],
  },
  getters: {
    getDataUser(state) {
      return state.dataUser;
    },
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    },
  },
  actions: {
    async getUsers({ commit }) {
      try {
        const { data } = await axios.get(`${apiURL}/usuario`);
        data && commit("setUsers", data);
      } catch (err) {
        console.log(err);
      }
    },
  },
});
