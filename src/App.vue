<template>
<div class="imgLogo">
  <img class="logoRun" alt="logo Run" src="./assets/logoRun.jpeg">
</div>
  <FormLogin @submit-form="ToDataUser"
  />

  <div v-if="mostrarTabla">
  <DataUsers 
  class="table"
  :DataUser="DataUser">
  </DataUsers>
  </div>


</template>

<script>
import FormLogin from './components/FormLogin.vue'
import DataUsers from './components/DataUsers.vue'

export default {
  name: 'App',
  components: {
    FormLogin, DataUsers
  },
    data(){
      return{
        DataUser:[],
        mostrarTabla: false
      }
    },
    methods: {
      ToDataUser(form){
        let usuario = {...form};
        this.DataUser.push(usuario);
        this.mostrarTabla = true;
      }
    }
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
</style>
