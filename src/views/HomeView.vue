<template>
   <v-card>
       <v-card-title primary-title>
           Filmes
       </v-card-title>
   
   <div v-for="filmeid in Object.keys(filmes)" :key="filmeid" >
   <cards-filmes :filme="filmes[filmeid]"></cards-filmes>
   
   </div>
   </v-card>
   </template>
   
   <script>
   import CardsFilmes from '@/components/CardsFilmes.vue';
   export default{
       components:{
           CardsFilmes
       },
       data(){
           return{
               filmes: [],
           }
       },
       mounted(){
           this.carregaFilmes()
       },
       methods:{
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
       }
   }
   
   </script>
   