<template>
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
    <tr v-for="user in DataUser" :key="user.edad"> 
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
</template>

<script>
export default {
    props: {
        DataUser: {
            type: Array,
            required: true
        }
    }

}
</script>

<style>

</style>