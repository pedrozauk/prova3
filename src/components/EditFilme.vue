<template>
    <div class="d-flex align-center justify-center ma-5">    
<v-card width="1024px" variant="flat">
    <v-card-title>
        Editor de Filmes
    </v-card-title>
    <v-card-text>
        <v-form v-model="formValid">
            <v-text-field  :rules="tituloRules" v-model="filme.titulo" variant="outlined" label="Titulo" required></v-text-field>
            <v-text-field type="date" v-model="filme.ano" variant="outlined" label="Lançamento" required></v-text-field>
            <v-text-field v-model="filme.genero" variant="outlined" label="Genero" required></v-text-field>
            <v-text-field v-model="filme.diretor" variant="outlined" label="Diretor" required></v-text-field>
            <v-textarea v-model="filme.sinopse" variant="outlined" label="Sinopse" required></v-textarea>
            <v-btn color="success"  @click="salvar">Salvar</v-btn>
        </v-form>
    </v-card-text>
</v-card>
</div>
</template>
<script>
export default{
    props: {
        filme: Object,
        id : String,
    },
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
        salvar(){
           this.form = this.filme
           this.axios.patch('https://prova2-6fe97-default-rtdb.firebaseio.com/:filmes/'+this.id +'.json', this.form)
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