import { ref } from "vue";
const axios = require("axios");
const apiURL = "https://628e2cc9a339dfef87a8fd8c.mockapi.io/api";

export default function useUsers() {
  let usuarios = ref(null);

  const load = async () => {
    try {
      const dataUser = await axios.get(`${apiURL}/usuario`);
      return (usuarios = dataUser);
    } catch (err) {
      console.log(err);
    }
  };
  return { usuarios, load };
}
