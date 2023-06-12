<template>
    <div class="d-flex align-center justify-center ma-5">    
<v-card width="1024px" variant="flat">
    <v-card-title>
        Cadastro de Filmes
    </v-card-title>
    <v-card-text>
        <v-form v-model="formValid">
            <v-text-field :rules="tituloRules" v-model="form.titulo" variant="outlined" label="Titulo" required></v-text-field>
            <v-text-field type="date" v-model="form.ano" variant="outlined" label="Lançamento" required></v-text-field>
            <v-text-field v-model="form.genero" variant="outlined" label="Genero" required></v-text-field>
            <v-text-field v-model="form.diretor" variant="outlined" label="Diretor" required></v-text-field>
            <v-textarea v-model="form.sinopse" variant="outlined" label="Sinopse" required></v-textarea>
            <v-btn color="success"  @click="cadastrar">Cadastrar</v-btn>
        </v-form>
    </v-card-text>
</v-card>
</div>
</template>
<script>
export default{
    data(){
        return{
            formValid: false,
            form: {
                titulo: '',
                ano: '',
                genero: '',
                diretor: '',
                sinopse: '',
            },
            tituloRules: 
            [
                v => !!v || 'O titulo é obrigatório',
                v => (v && v.length <= 20) || 'O titulo deve ter menos de 20 caracteres',
            ],
        }
    },
    watch: {
    },
    methods: {
        cadastrar(){
           this.axios.post('https://prova2-6fe97-default-rtdb.firebaseio.com/:filmes.json', this.form)
           this.resetForm()
           this.$emit('close')
        },
        resetForm(){
            this.form = {
                titulo: '',
                ano: '',
                genero: '',
                diretor: '',
                sinopse: '',
            }
        }
    }
}
</script>