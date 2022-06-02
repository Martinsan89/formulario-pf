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
  },
};
