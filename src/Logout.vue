<template>
  <div class="logout">
    <h1>ログアウトしました
    </h1>
    
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  methods: {
    logout(){
      firebase
      .auth()
      .signOut()
      .then(()=>{
        alert('ログアウト完了！')
        this.$router.replace('/Login.vue')
      });
    },
    name:"Home",
    methods:{
      logout:function(){
        this.$router.push("/login")
      }
    }
  }
  
}
</script>

<style scoped>
.logout {
  width: 80%;
  background-color: snow;

}
h1 {
  font-size: 24px;
  font-weight: bold;
  padding: 20px;
  color: black;
}

button {
  border-radius: 20px;
  cursor: pointer;
}
</style>