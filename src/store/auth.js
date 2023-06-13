
import { defineStore } from 'pinia';
import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup
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
     async loginGoogle(){
      const provider = new GoogleAuthProvider();
      try{
        const {user} = await signInWithPopup(getAuth(), provider);
        this.dadosUser = user;
        console.log("logou");
        router.push('/home')
      }catch(error){
        console.error(error);
      }
     },
     async logOut(){
      try{
        const auth = getAuth();
        await signOut(auth);
        this.dadosUser = null;
        auth.clearAuthState();
        router.push('/login');
        
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
