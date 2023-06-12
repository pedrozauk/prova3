<template>
    <div class="d-flex align-center justify-center mt-10">
    <v-card width="800px">
        <v-card-title primary-title>
            Novo usuário
        </v-card-title>
        <v-card-text>
            <v-form>
                <v-text-field
                    v-model="email"
                    name="email"
                    label="e-mail"
                    id="email"
                    variant="outlined"
                ></v-text-field>
                <v-text-field
                    v-model="password"
                    name="password"
                    label="password"
                    id="password"
                    type="password"
                    variant="outlined"
                ></v-text-field>   
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="newUser">Confirmar</v-btn>
                    <v-btn @click="$router.push('/login')">Voltar</v-btn>
                </v-card-actions>
            </v-form>
        </v-card-text>
    </v-card>
</div>
</template>
<script setup>
import { ref } from 'vue'
import { useAuthStore } from "@/store/auth"





const email = ref("");
const password = ref("");
const authStore = useAuthStore()

const newUser = ()=>{
    console.log(email.value);
     authStore.registerUser(email.value,password.value);
}



</script>