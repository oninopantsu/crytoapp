<template>
  <div class="register">
    <h3>s</h3>
      <label for="email">email</label>
      <input id="email" type="email" v-model="email">
      <label for="password">password</label>
      <input type="password" id="password" v-model="password">
    <br>
    <button @click="register">新規登録</button>

  </div>
</template>

<script>
import firebase from 'firebase/app';


export default {
  data(){
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register(){
      if(!this.email || !this.password){
        alert('メールアドレスまたはパスワードが入力されていません')
        return
      }
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.email,this.password)
      .then((data) =>{
        data.user.sendEmailVerification().then(()=>{
          this.$router.replace('')
        })
      })
      .catch((error)=>{
        switch(error.code){
          case 'auth/invalid-email':
            alert('メールアドレスの形式が違います。')
            break
          case 'auth/email-already-in-use':
            alert('このメールアドレスが既に使われています。')
            break
          case 'auth/weak-password':
            alert('パスワードは8文字以上で入力してください。')
            break
          default:
            alert('エラーが起きました。しばらくしてから再度お試しください。')
          break
        }
      });
    },
    
  },
  }


</script>

<style scoped>
div {
  background-color: #fff;
  margin: 0 auto;
  width: 80%;
  text-align: center;
}
h3 {
  font-size: 32px;
  padding: 30px;
  margin: 60px;

}
label {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
button {
  margin: 40px;
  border-radius: 20px;
  cursor: pointer;
}
</style>