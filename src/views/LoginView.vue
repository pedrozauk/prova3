<template>
    <div class="d-flex align-center justify-center mt-10">
    <v-card width="800px">
        <v-card-title primary-title>
            Login
        </v-card-title>
        <v-card-text>
            <v-form>
                <v-text-field
                    name="email"
                    label="e-mail"
                    id="email"
                    variant="outlined"
                    v-model="email"
                ></v-text-field>
                <v-text-field
                    name="password"
                    label="password"
                    id="password"
                    type="password"
                    variant="outlined"
                    v-model="password"
                ></v-text-field>   
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="login">Entrar</v-btn>
                    <v-btn color="info" @click="$router.push('/register')">Cadastrar</v-btn>
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

const login = ()=>{
    authStore.loginUser(email.value, password.value)
}

authStore.loginUser

</script>