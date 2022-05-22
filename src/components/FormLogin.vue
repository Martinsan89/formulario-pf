<template>
    <form class="text-center" @submit.prevent="emitForm">
            <div class="form-row">
                <h4 class="text-center">Nombre</h4>
                <div class="form-group  text-center">
                    <input type="text" 
                    class="form-control text-center" placeholder="Ingrese su nombre" 
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
                class="form-control text-center" id="inputEmail4" 
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
                placeholder="Crea tu contrasenia LoRun" name="inputPass"  
                v-model="form.pass"
                @keyup="validarPass">
                <span v-if="form.pass" class="alert-danger">{{error.pass}}</span>
                </div>
                <br>
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
            <h4 class="text-center mt-3">Seleccione su edad</h4>
            <div class="row checkbox-row">
                <div class="col-xl ">
                    <div class="checkbox-inline">
                    <label class="checkbox-inline">
                    <input type="checkbox" 
                    id="adulto" 
                    value="adulto" 
                     v-model="form.edad"> +35</label>
                    </div>
                </div>
                <div class="row checkbox-row">
                    <div class="col-xl">
                    <div class="checkbox-inline">
                        <label class="checkbox-inline">
                        <input type="checkbox" 
                        id="joven" 
                        value="joven"  
                        v-model="form.edad"> -35</label>
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
                <button type="submit" class="btn btn-primary mt-3">Sign in</button>
    </form>

</template>

<script>
export default {
    data(){
        return{
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
            }
        } 
    },
    methods:{
        emitForm () {
            this.$emit('submit-form', this.form);
            // Reset
            Object.keys(this.form).forEach(key => this.form[key] = '');
            this.form.genero = [];
            this.form.edad = [];
        },
        validarNombre() {
            if(this.form.nombre.length > 3){
                this.error.nombre = '';
            } else {
                this.error.nombre = 'El nombre debe tener mas de 3 letras';
            } if (!this.form.nombre) this.error.nombre = '';
        },  
        validarEmail() {
            if(this.form.email.value === '.'){
                this.error.email = '';
            } else {
                this.error.email = 'ingrese un .com o simil ';
            } if (!this.form.email) this.error.email = '';
        },  
        validarPass() {
            if(this.form.pass.length > 4){
                this.error.pass = '';
            } else {
                this.error.pass = 'Ingrese una password mayor a 4';
            } if (!this.form.pass) this.error.pass = '';
        }  
    }

}
</script>

<style>

</style>