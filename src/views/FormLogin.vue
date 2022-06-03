<template>
    <form class="text-center" @submit.prevent="validarForm">
            <div class="form-row">
                <h4 class="text-center">Nombre y Apellido</h4>
                <div class="form-group  text-center">
                    <input type="text" 
                    class="form-control text-center" 
                    placeholder="Ingrese su nombre" 
                    name="Nombre" 
                    v-model="$store.state.Form.form.nombre"
                    @keyup="validarNombre">
                    <span v-if="error.nombre" class="alert-danger">{{error.nombre}}</span>
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
                v-model="$store.state.Form.form.email"
                @keyup="validarEmail">
                <span v-if="error.email" class="alert-danger">{{error.email}}</span>
                </div>
                <div class="form-group ">
                <h4 class="text-center mt-3">Contrasenia LoRun</h4>
                <input type="password" 
                class="form-control text-center" 
                id="Pass" 
                placeholder="Crea tu contrasenia LoRun" 
                name="inputPass"  
                v-model="$store.state.Form.form.pass"
                @keyup="validarPass">
                <span v-if="error.pass" class="alert-danger">{{error.pass}}</span>
                </div>
                <br>
            </div>    
            <h4 class="text-center mt-3">Seleccione su edad</h4>
            <div class="row checkbox-row" @mouseover="validarEdad">
                <div class="col-xl ">
                    <div class="checkbox-inline">
                    <label class="checkbox-inline">
                    <input type="checkbox" 
                    id="adulto" 
                    value="adulto" 
                    v-model="$store.state.Form.form.edad"
                    @mouseout="validarEdad"> +35</label>
                    </div>
                </div>
                <div class="row checkbox-row">
                    <div class="col-xl">
                    <div class="checkbox-inline">
                        <label class="checkbox-inline">
                        <input type="checkbox" 
                        id="joven" 
                        value="joven"  
                        v-model="$store.state.Form.form.edad"
                        @mouseout="validarEdad"> -35</label>
                    </div>
                <span v-if="error.edad" class="alert-danger">{{error.edad}}</span>
                    </div>
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
                    v-model="$store.state.Form.form.genero"> Masculino</label>
                    </div>
                </div>
                <div class="row checkbox-row">
                    <div class="col-xl">
                    <div class="checkbox-inline">
                        <label class="checkbox-inline">
                        <input type="checkbox" 
                        id="mujer" 
                        value="mujer"   
                      v-model="$store.state.Form.form.genero"> Femenino</label>
                    </div>
                    </div>
                </div>
            </div>
                <h4 class="text-center mt-3">Indique su tipo de pisada</h4>
                <div class="form-group">
                    <select class="form-control text-center" id="pisada" 
                    name="inputPisada"
                    v-model="$store.state.Form.form.pisada">
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
                    v-model="$store.state.Form.form.peso">
                    <label class="text-center">Altura</label>
                    <input type="number" 
                    class="form-control text-center" id="altura" 
                    placeholder="184"
                    name="inputAltura"
                    v-model="$store.state.Form.form.altura">
                </div>
                <span v-if="error.validacion" class="alert-danger">{{error.validacion}}</span>
                <br>
                <div v-if="confirmado" class="confirmado">
                    <span class="text">{{confirmado}}</span>
                </div>
                <button type="submit" class="btn btn-primary mt-3">INGRESAR</button>
                
    </form>

</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    name: "FormLogin",
    mounted(){
        this.resetConfirmado();
    },
    computed:{
        ...mapState('Form', ['form', 'error', 'confirmado'])  
    },   
    methods:{
        ...mapActions('Form', ['validarNombre', 'validarEmail', 'validarPass', 'validarEdad', 'validarForm', 'resetConfirmado']),        
    }

}
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