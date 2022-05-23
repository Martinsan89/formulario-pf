<template>
    <form class="text-center" @submit.prevent="emitForm">
            <div class="form-row">
                <h4 class="text-center">Nombre</h4>
                <div class="form-group  text-center">
                    <input type="text" 
                    class="form-control text-center" 
                    placeholder="Ingrese su nombre" 
                    name="Nombre" 
                    v-model="state.form.nombre"
                    @keyup="validarForm">
                    <span v-if="v$.form.nombre.$error" class="alert-danger">{{v$.form.nombre.$errors[0].$message}}</span>
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
                v-model="state.form.email">
                <span v-if="v$.form.email.$error" class="alert-danger">{{v$.form.email.$errors[0].$message}}</span>
                </div>
                <div class="form-group ">
                <h4 class="text-center mt-3">Contrasenia LoRun</h4>
                <input type="password" 
                class="form-control text-center" 
                id="Pass" 
                placeholder="Crea tu contrasenia LoRun" 
                name="inputPass"  
                v-model="state.form.pass">
                <span v-if="v$.form.pass.$error" class="alert-danger">{{v$.form.pass.$errors[0].$message}}</span>
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
                    v-model="state.form.edad"> +35</label>
                    </div>
                </div>
                <div class="row checkbox-row">
                    <div class="col-xl">
                    <div class="checkbox-inline">
                        <label class="checkbox-inline">
                        <input type="checkbox" 
                        id="joven" 
                        value="joven"  
                        v-model="state.form.edad"> -35</label>
                    </div>
                    </div>
                <span v-if="v$.form.edad.$error" class="alert-danger">{{v$.form.edad.$errors[0].$message}}</span>
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
                    v-model="state.form.genero"> Masculino</label>
                    </div>
                </div>
                <div class="row checkbox-row">
                    <div class="col-xl">
                    <div class="checkbox-inline">
                        <label class="checkbox-inline">
                        <input type="checkbox" 
                        id="mujer" 
                        value="mujer"   
                      v-model="state.form.genero"> Femenino</label>
                    </div>
                    </div>
                </div>
            </div>
                <h4 class="text-center mt-3">Indique su tipo de pisada</h4>
                <div class="form-group">
                    <select class="form-control text-center" id="pisada" 
                    name="inputPisada"
                    v-model="state.form.pisada">
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
                    v-model="state.form.peso">
                    <label class="text-center">Altura</label>
                    <input type="number" 
                    class="form-control text-center" id="altura" 
                    placeholder="184"
                    name="inputAltura"
                    v-model="state.form.altura">
                </div>
                <button type="submit" class="btn btn-primary mt-3">Sign in</button>
    </form>

</template>

<script>
import useValidate from '@vuelidate/core'
import {required, email, minLength, alphaNum} from '@vuelidate/validators'
import {reactive, computed} from 'vue'


export default {
    setup(){
        const state = reactive ({
            form:{
                nombre:'',
                email:'',
                pass:'',
                genero:[],
                edad:[],
                pisada:'',
                peso:'',
                altura:''
            },
        })
        
        const rules = computed (() => {
            return {
                form:{
                    nombre:{required, minLength: minLength(3)},
                    email:{required, email},
                    pass:{required, minLength: minLength(4), alphaNum},
                    edad: {required}
                }   
            }
        })

        const v$ = useValidate(rules, state)

        return {
            state,
            v$
        }
    },
    methods:{
        emitForm () {
            if(this.v$.$validate == true){
                console.log('Complete el formulario');
            } else {
                this.$emit('submit-form', this.state.form);
                // Reset
                Object.keys(this.state).forEach(key => this.state[key] = '');
                this.state.genero = [];
                this.state.edad = [];
            }
        },
        validarForm(){
            this.v$.$validate();
        }
    }

}
</script>

<style>

</style>