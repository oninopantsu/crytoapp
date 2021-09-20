<template>
  <div class="top">
    <h1>cry to app</h1>
    <p>{{ message }} </p>
    <router-link to="/register"></router-link>
    <router-link to="/login"></router-link>
    <router-link to="/logout"></router-link>

  </div>
</template>

<script>
import firebase from 'firebase/app'
export default {
  data(){
    return{
      message:'ログインができてません'
    }
  },
  created(){
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.message ='ログイン済です'
      }
    })
  },
}
</script>

<style>
p {
  font-size: 12px;
}

</style>