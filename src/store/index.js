import Vue from "vue";
import Vuex from "vuex";
import Form from "./modules/Form";
const axios = require("axios");
const apiURL = "https://628e2cc9a339dfef87a8fd8c.mockapi.io/api";

Vue.use(Vuex);

export default new Vuex.Store({
  //   strict: true,
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
      let result = null;
      result = await axios
        .get(`${apiURL}/usuario`)
        .then((response) => {
          let result = response.data.map((item) => {
            let { nombre, email, pass, edad, genero, pisada, peso, altura } =
              item;
            return { nombre, email, pass, edad, genero, pisada, peso, altura };
          });
          return result;
        })
        .catch((error) => {
          console.error(error);
        });

      if (result != null) {
        commit("setUsers", result);
      }
    },
  },
  modules: {
    Form,
  },
});
