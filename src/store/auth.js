
import { defineStore } from 'pinia';
import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
  } from "firebase/auth";
import router from '@/router';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    dadosUser : null,

  }),
  actions:{
    async registerUser(email, password) {
       
        const user = createUserWithEmailAndPassword(getAuth(),email,password)
        .then(()=>{
            router.push("/")
        })
        .catch((error) =>{
            console.log(error)
        })
      },
  async loginUser(email,password){
      try{
      const {user} = await signInWithEmailAndPassword(getAuth(),email, password )
      console.log(user);
      this.dadosUser = user;
      console.log("logou");
      }
      catch (error){
        console.error(error)
      }
      router.push("/home");
     },
     async logOut(){
      try{
        await signOut();
        this.dadosUser = null;
      } catch(error){
        console.error(error);
      }
     }
},
  getters:{
    getUser(state){
      return state.dadosUser;
    }
  }

})
