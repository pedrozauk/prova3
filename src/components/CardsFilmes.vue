<template>
    <v-card>
        <v-card-title primary-title>
           {{ filme.titulo }}
        </v-card-title>

        <v-card-text>
            Ano de lançamento:
            {{ filme.ano }}
            <br>
            Gênero:
            {{ filme.genero }}
            <br>
            Diretor:
            {{ filme.diretor }}
            <br>
            <br>
            Sinopse:
            {{ filme.sinopse }}
        </v-card-text>
    </v-card>
</template>

<script>
export default{
    props:{
        filme: Object,
            },
    
    }
</script>