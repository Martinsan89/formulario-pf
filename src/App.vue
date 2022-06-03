<template>
<div class="imgLogo text-center">
  <img class="logoRun" alt="logo Run" src="./assets/logoRun.jpeg">
  <br>
  <div class="usuario">
    <router-link to="/DataUser" class="link">Ver usuarios</router-link>
  </div>
  <router-view />



</div>


</template>

<script>


export default {
  name: 'App',
  
}
</script>

<style scoped>
.imgLogo {
  margin: auto;
  background-color: gray;
}
.logoRun {
  width: 25%;
  border: 2px solid black;
  margin: auto;
}
.table {
  background-color: burlywood;
  height: 5rem;
  margin-top: 3rem;
}
.usuario{
  margin: 1rem 2rem;
  border-radius: 2rem;
}
.link {
  background-color: white;
  color: black;
  padding: 1rem;
  border-radius: 2rem;
}
</style>
