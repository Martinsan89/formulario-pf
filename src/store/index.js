import Vue from "vue";
import Vuex from "vuex";
import Form from "./modules/Form";

Vue.use(Vuex);

export default new Vuex.Store({
  //   strict: true,
  state: {
    dataUser: [],
    mostrarTabla: false,
  },
  getters: {
    getDataUser(state) {
      return state.dataUser;
    },
  },
  mutations: {
    setDataUser: (state) => {
      state.dataUser.push(state.form);
      state.mostrarTabla = true;
    },
  },
  actions: {
    toDataUser: (context) => {
      context.commit("setDataUser");
    },
  },
  modules: {
    Form,
  },
});
