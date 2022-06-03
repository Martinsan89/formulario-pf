const axios = require("axios");
const apiURL = "https://628e2cc9a339dfef87a8fd8c.mockapi.io/api";

export default {
  namespaced: true,
  state: {
    form: {
      nombre: "",
      email: "",
      pass: "",
      genero: [],
      edad: [],
      pisada: "",
      peso: "",
      altura: "",
    },
    error: {
      nombre: "",
      email: "",
      pass: "",
      edad: "",
      validacion: "",
    },
    confirmado: "",
  },
  getters: {
    getForm(state) {
      return state.form;
    },
    getError(state) {
      return state.error.nombre;
    },
  },
  mutations: {
    setValidarNombre(state) {
      const fullNameRegExp = /[a-zA-Z]{2,}\s+[a-zA-Z]{2,12}/g;
      if (state.form.nombre && fullNameRegExp.test(state.form.nombre)) {
        state.error.nombre = "";
      } else {
        state.error.nombre = "Ingresa un nombre y un apellido ";
      }
    },
    setValidarEmail(state) {
      const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (state.form.email && emailRegExp.test(state.form.email)) {
        state.error.email = "";
      } else {
        state.error.email = 'Ingresa un email valido (con "@" y ".")';
      }
    },
    setValidarPass(state) {
      if (state.form.pass.length > 4) {
        state.error.pass = "";
      } else {
        state.error.pass = "Ingresa una contrasenia de 5 caracteres";
      }
    },
    setValidarEdad(state) {
      if (state.form.edad != "") {
        state.error.edad = "";
      } else {
        state.error.edad = "Ingresa su edad";
      }
    },
    setValidarForm(state) {
      if (
        !state.form.nombre ||
        !state.form.email ||
        !state.form.pass ||
        !state.form.edad
      ) {
        state.error.validacion =
          "Debe completar los campos obligatorios(Nombre, Email, Pass y Edad)";
      } else {
        const usuario = state.form;
        axios
          .post(`${apiURL}/usuario`, usuario)
          .then((response) => {
            response.data;
          })
          .catch((err) => console.log(err));
        // Reset
        Object.keys(state.form).forEach((key) => (state.form[key] = ""));
        state.form.genero = [];
        state.form.edad = [];
        state.error.validacion = "";

        state.confirmado = "Usuario agregado correctamente";
      }
    },
    setResetConfirmado(state) {
      state.confirmado = false;
    },
  },
  actions: {
    validarNombre(context) {
      context.commit("setValidarNombre");
    },
    validarEmail(context) {
      context.commit("setValidarEmail");
    },
    validarPass(context) {
      context.commit("setValidarPass");
    },
    validarEdad(context) {
      context.commit("setValidarEdad");
    },
    validarForm(context) {
      context.commit("setValidarForm");
    },
    resetConfirmado(context) {
      context.commit("setResetConfirmado");
    },
  },
};
