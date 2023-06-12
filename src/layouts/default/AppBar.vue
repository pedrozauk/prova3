<template>
  <v-app-bar flat>
    <v-app-bar-nav-icon @click="drawer = !drawer" />
    <v-app-bar-title>
      Filmes HD
      <v-spacer></v-spacer>
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn @click="sairBtn" color="warning">Sair</v-btn>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" temporary>
      <v-list>
        <v-list-item prepend-icon="mdi-home" @click="$router.push({path: '/home'})" value="home">
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
      <v-list-item prepend-icon="mdi-movie" @click="$router.push({path: '/cadastro_filmes'})" value="cadfilmes">
          <v-list-item-title>Cadastro de Filmes</v-list-item-title>
        </v-list-item>
      </v-list>

  </v-navigation-drawer>
</template>

<script setup>

import { ref } from 'vue';
import { useAuthStore } from '@/store/auth';
import router from '@/router';


const drawer = ref(false);

const sairBtn = ()=>{
  const autStore = useAuthStore();
  autStore.logOut();
  router.push('/login');
}

</script>
