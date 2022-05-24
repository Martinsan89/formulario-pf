<template>
    <form class="text-center" @submit.prevent="emitForm">
            <div class="form-row">
                <h4 class="text-center">Nombre y Apellido</h4>
                <div class="form-group  text-center">
                    <input type="text" 
                    class="form-control text-center" 
                    placeholder="Ingrese su nombre" 
                    name="Nombre" 
                    v-model="form.nombre"
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
                v-model="form.email"
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
                v-model="form.pass"
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
                    v-model="form.edad"
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
                        v-model="form.edad"
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
                    v-model="form.genero"> Masculino</label>
                    </div>
                </div>
                <div class="row checkbox-row">
                    <div class="col-xl">
                    <div class="checkbox-inline">
                        <label class="checkbox-inline">
                        <input type="checkbox" 
                        id="mujer" 
                        value="mujer"   
                      v-model="form.genero"> Femenino</label>
                    </div>
                    </div>
                </div>
            </div>
                <h4 class="text-center mt-3">Indique su tipo de pisada</h4>
                <div class="form-group">
                    <select class="form-control text-center" id="pisada" 
                    name="inputPisada"
                    v-model="form.pisada">
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
                    v-model="form.peso">
                    <label class="text-center">Altura</label>
                    <input type="number" 
                    class="form-control text-center" id="altura" 
                    placeholder="184"
                    name="inputAltura"
                    v-model="form.altura">
                </div>
                <span v-if="error.validacion" class="alert-danger">{{error.validacion}}</span>
                <br>
                <button type="submit" class="btn btn-primary mt-3">INGRESAR</button>
    </form>

</template>

<script>
export default {
    name: "FormLogin",
    data(){
        return {
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
            error: {
                nombre:'',
                email:'',
                pass:'',
                edad:'',
                validacion:''
            }

        }
    },   
    methods:{
        emitForm () {
            if(!this.form.nombre || !this.form.email || !this.form.pass || !this.form.edad){
                this.error.validacion = 'Debe completar los campos obligatorios(Nombre, Email, Pass y Edad)';
            }else {
                this.$emit('submit-form', this.form);
                // Reset
                Object.keys(this.form).forEach(key => this.form[key] = '');
                this.form.genero = [];
                this.form.edad = [];
                this.error.validacion = '';

            }
        },
        validarNombre(){
            const fullNameRegExp = /[a-zA-Z]{2,}\s+[a-zA-Z]{2,12}/g;
            if(this.form.nombre && fullNameRegExp.test(this.form.nombre)){
                this.error.nombre = '';
            } else {
                this.error.nombre = 'Ingresa un nombre y un apellido ';
            }
        },
        validarEmail(){
            const emailRegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
            if(this.form.email && emailRegExp.test(this.form.email)){
                this.error.email = '';
            } else {
                this.error.email = 'Ingresa un email valido (con "@" y ".")';
            }
        },
        validarPass(){
            if(this.form.pass.length > 4){
                  this.error.pass = '';
            } else {
                this.error.pass = 'Ingresa una contrasenia de 5 caracteres';
            }
        },
        validarEdad(){
            if(this.form.edad != ''){
                  this.error.edad = '';
            } else {
                this.error.edad = 'Ingresa su edad';
            }
        }
    }

}
</script>

<style>

</style>