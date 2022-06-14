<template>
    <form class="text-center" >
            <div class="form-row">
                <h4 class="text-center">Nombre y Apellido</h4>
                <div class="form-group  text-center">
                    <input type="text" 
                    class="form-control text-center" 
                    placeholder="Ingrese su nombre" 
                    name="Nombre" 
                    v-model="state.usuario.nombre"
                    >
                    <span v-for="(error, index) in v$.usuario.nombre.$errors" :key="index"  class="alert-danger">{{error.$message}}</span>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                <h4 class="text-center mt-3">Email</h4>
                <input type="email" 
                class="form-control text-center" 
                id="inputEmail4" 
                placeholder="Email" 
                name="Email"  
                v-model="state.usuario.email"
                >
                <span v-for="(error, index) in v$.usuario.email.$errors" :key="index" class="alert-danger">{{error.$message}}</span>
                </div>
                <div class="form-group ">
                <h4 class="text-center mt-3">Contrasenia LoRun</h4>
                <input type="password" 
                class="form-control text-center" 
                id="Pass" 
                placeholder="Crea tu contrasenia LoRun" 
                name="inputPass"  
                v-model="state.usuario.pass"
                >
                <span v-for="(error, index) in v$.usuario.pass.$errors" :key="index" class="alert-danger">{{error.$message}}</span>
                </div>
                <br>
            </div>    
            <h4 class="text-center mt-3">Seleccione su edad</h4>
            <div class="row checkbox-row">
                <div class="col-xl ">
                    <div class="checkbox-inline">
                    <label class="checkbox-inline">
                    <input type="checkbox" 
                    id="adulto" 
                    value="adulto" 
                    v-model="state.usuario.edad"
                    > +35</label>
                    <br>
                    <label class="checkbox-inline">
                        <input type="checkbox" 
                        id="joven" 
                        value="joven"  
                        v-model="state.usuario.edad"
                        > -35</label>
                    </div>
                <!-- <span v-if="error.edad" class="alert-danger">{{error.edad}}</span> -->
                </div>
            </div>
            <h4 class="text-center mt-3">Seleccione su genero</h4>
            <div class="row checkbox-row">
                <div class="col-xl ">
                    <div class="checkbox-inline">
                    <label class="checkbox-inline">
                    <input type="checkbox" 
                    id="hombre" 
                    value="hombre" 
                    v-model="state.usuario.genero"> Masculino</label>
                    <br>
                     <label class="checkbox-inline">
                        <input type="checkbox" 
                        id="mujer" 
                        value="mujer"   
                      v-model="state.usuario.genero"> Femenino</label>
                    </div>
                </div>
            </div>
                <h4 class="text-center mt-3">Indique su tipo de pisada</h4>
                <div class="form-group">
                    <select class="form-control text-center" id="pisada" 
                    name="inputPisada"
                    v-model="state.usuario.pisada">
                        <option>Pronador - poco arco</option>
                        <option>Neutro - arco normal</option>
                        <option>Supinador - mucho arco</option>
                    </select>
                </div>
                 <h4 class="text-center mt-3">Indique su peso y estatura </h4>
                <div class="form-group">
                    <label class="text-center">Peso</label>
                    <input type="number" 
                    class="form-control text-center" id="peso" 
                    placeholder="180"
                    name="inputPeso" 
                    v-model="state.usuario.peso">
                    <label class="text-center">Altura</label>
                    <input type="number" 
                    class="form-control text-center" id="altura" 
                    placeholder="184"
                    name="inputAltura"
                    v-model="state.usuario.altura">
                </div>
                <span v-if="v$.value" class="alert-danger">{{error.validacion}}</span>
                <br>
                <div v-if="state.confirmado" class="confirmado">
                    <span class="text">Usuario registrado!</span>
                </div>
                <button type="submit" 
                class="btn btn-primary mt-3"
                @click.prevent="validarForm"
                >INGRESAR</button>
                
    </form>

</template>

<script setup>
/* eslint-disable */
import useValidate from '@vuelidate/core';
import { required, email, minLength, helpers } from '@vuelidate/validators';
import { reactive, computed } from 'vue';

const axios = require("axios");
const apiURL = "https://628e2cc9a339dfef87a8fd8c.mockapi.io/api";

let state = reactive ({
    usuario: {
        nombre: '',
        email: '',
        pass: '',
        edad: [],
        genero: [],
        pisada: '',
        peso: '',
        altura: ''
    },
    error: {
        validacion: "",
    },
    confirmado: false,
});

const rules = computed (() => {
    return {
        usuario: {
            nombre: {
            required: helpers.withMessage('Ingrese su nombre y apellido', required)
        },
        email: {
            required: helpers.withMessage('Ingrese su email', required),
            email: helpers.withMessage('Debe tener un @ y un .', email)
        },
        pass: {
            required: helpers.withMessage('Ingrese su contraseña', required),
            minLength: helpers.withMessage('Debe tener al menos 5 caracteres', minLength(5)),
        }
        }    

    }
});
const v$ = useValidate(rules, state);

const validarForm = () => {
    v$.value.$validate();
    if (!v$.value.$error){
         const usuario = state.usuario;
            axios
            .post(`${apiURL}/usuario`, usuario)
            .then((response) => {
                response.data;
            })
            .catch((err) => console.log(err));
            // Reset
            Object.keys(state.usuario).forEach((key) => (state.usuario[key] = ""));
            state.usuario.genero = [];
            state.usuario.edad = [];
            state.error.validacion = "";

            state.confirmado = true;
    } else {
        state.error.validacion =
            "Debe completar los campos obligatorios(Nombre, Email, Pass y Edad)";
    }
};
// const resetConfirmado = () => {
//     state.confirmado = false;
// };
// onMounted(() => {
//     resetConfirmado;
// });        
</script>

<style scoped>
.confirmado {
    background-color: green;
    margin: 1rem 2rem;
}
.text {
    color: aliceblue;
}


</style>