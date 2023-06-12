/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence, onAuthStateChanged } from 'firebase/auth';
import { useAuthStore } from './store/auth';
import router from './router';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw4gO4j3kIcfPRNdIBqGjjM48Icvm7VIo",
  authDomain: "frameworks-26ad9.firebaseapp.com",
  projectId: "frameworks-26ad9",
  storageBucket: "frameworks-26ad9.appspot.com",
  messagingSenderId: "764875539095",
  appId: "1:764875539095:web:a1d8bf949ed9ea26bb9fd2"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);;
const auth = getAuth(firebaseApp);


const app = createApp(App);

registerPlugins(app);

setPersistence(auth,browserLocalPersistence)
  .then(()=>{
   
    onAuthStateChanged(auth, (user) =>{
      if(user){
        const authStore = useAuthStore();
        authStore.dadosUser = user
        console.log(authStore.getUser)
        if (router.currentRoute.value.path !== '/home') {
          console.log("Já está logado")
        }
      }
      else{
        if (router.currentRoute.value.path !== '/') {
          router.push('/');
        }
      }
    })
    
  })

app.mount('#app');
