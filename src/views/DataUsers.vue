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
    <tr v-for="user in users" :key="user.id" class="text"> 
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

<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: "DataUser",
    mounted() {
      this.getUsers();
    },
    methods: {
      ...mapActions(['getUsers'])
    },
    computed: {
      ...mapState(['users'])
    }

}
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