<template>

<v-btn outline width="100%"  color="primary" @click="dialogNovo = !dialogNovo" prepend-icon="mdi-plus" dark>Novo</v-btn>
<v-table class="mx-10">
    <thead>
        <tr>
            <th>Título</th>
            <th>Ano</th>
            <th>Gênero</th>
            <th>Diretor</th>
            <th>Sinopse</th>
            <th>Ações</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="filmekey in Object.keys(filmes)" :key="filmekey">
            <td>{{ filmes[filmekey].titulo}}</td>
            <td>{{ filmes[filmekey].ano}}</td>
            <td>{{ filmes[filmekey].genero}}</td>
            <td>{{ filmes[filmekey].diretor}}</td>
            <td>{{ filmes[filmekey].sinopse}}</td>
            <td>
                <v-btn color="primary" variant="flat" @click="editar(filmekey)">Editar</v-btn>
                <v-btn color="error"  variant="flat" class="ma-5" @click="excluir(filmekey)">Excluir</v-btn>
            </td>
        </tr>
    </tbody>
</v-table>
<v-dialog
    v-model="dialogNovo"
    scrollable 
    persistent :overlay="false"
    max-width="500px"
    transition="dialog-transition"
>
<v-card>
    

<add-filme @close="closeNovo"></add-filme>
<v-card-actions>
    <v-spacer></v-spacer>
    <v-btn @click="dialogNovo = !dialogNovo">sair</v-btn>
</v-card-actions>
</v-card>
</v-dialog>
<v-dialog
    v-model="dialogEditar"
    scrollable  
    persistent :overlay="false"
    max-width="500px"
    transition="dialog-transition"
>
<v-card>
    

    <edit-filme :filme="filmeEdicao" :id="idEdicao" @close="closeEditar"></edit-filme>
<v-card-actions>
    <v-spacer></v-spacer>
    <v-btn @click="dialogEditar = !dialogEditar">sair</v-btn>
</v-card-actions>
</v-card>

</v-dialog>


</template>

<script>
import AddFilme from '../components/AddFilme.vue'
import EditFilme from '@/components/EditFilme.vue'
export default {
    components: {
        AddFilme,
        EditFilme
    },
    mounted(){
        this.carregaFilmes()
    },
    data(){
        return{
            dialogNovo: false,
            dialogEditar: false,
            filmes: [],
            filmeEdicao: {},
            idEdicao: '',
        }
    },
    methods:{
        editar(filmeId){
            this.filmeEdicao = this.filmes[filmeId]
            this.dialogEditar = true
            this.idEdicao = filmeId
        },
        excluir(filme){
            this.axios.delete('https://prova2-6fe97-default-rtdb.firebaseio.com/:filmes/'+filme+'.json')
            .then(response => {
             this.carregaFilmes()
            })
            
        },
        carregaFilmes(){
            this.axios.get('https://prova2-6fe97-default-rtdb.firebaseio.com/:filmes.json')
        .then(response => {
            if(response.data){
            this.filmes = response.data
            }else{
                this.filmes = []
            }
        })
        },
        closeNovo(){
            this.dialogNovo = false
            this.carregaFilmes()
        },
        closeEditar(){
            this.dialogEditar = false
            this.carregaFilmes()
        }, 
    }
    
}

</script>