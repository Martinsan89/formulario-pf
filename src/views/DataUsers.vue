<template>
<div class="container">
  <div class="form">
    <router-link to="/" class="link">Ver form</router-link>
  </div>
  <table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Email</th>
      <th scope="col">Pass</th>
      <th scope="col">Genero</th>
      <th scope="col">Edad</th>
      <th scope="col">Pisada</th>
      <th scope="col">Peso</th>
      <th scope="col">Altura</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(user, index) in usuarios" :key="index" class="text"> 
      <th>{{user.nombre}}</th>
      <th>{{user.email}}</th>
      <th>{{user.pass}}</th>
      <th>{{user.genero}}</th>
      <th>{{user.edad}}</th>
      <th>{{user.pisada}}</th>
      <th>{{user.peso}}</th>
      <th>{{user.altura}}</th>

    </tr>
  </tbody>
</table>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const axios = require("axios");
const apiURL = "https://628e2cc9a339dfef87a8fd8c.mockapi.io/api";

let usuarios = ref(null);

const loadDataUsers = async () => {
    try {
      const dataUser = await axios.get(`${apiURL}/usuario`);
      return (usuarios = dataUser),
      console.log(usuarios)
    } catch (err) {
      console.log(err);
    }
  };

onMounted(() => {
  loadDataUsers();
})  

</script>

<style scoped>
.form {
  margin: 2rem 3rem;
  border-radius: 2rem;
}
.link {
  background-color: white;
  color: black;
  padding: 1rem;
  border-radius: 2rem;
}
.text {
  color: whitesmoke;
}
</style>