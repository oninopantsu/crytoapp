<template>
  <div>
    <h3>Login</h3>
    <label for="email">email</label>
    <input id="email" type="email" v-model="email">
    <label for="password">password</label>
    <input type="password" id="password" v-model="password">
    <br>
    <button @click="logIn">ログイン</button>
  </div>
</template>

<script>
import firebase from 'firebase/app';
export default {
  data(){
    return{
      email: '',
      password: ''
    }
  },
  methods: {
    logIn(){
      if(!this.email || !this.password){
        alert('メールアドレスまたはパスワードが入力されていません')
        return
      }
      firebase
      .auth()
      .signInWithEmailAndPassword(this.email,this.password)
      .then(()=>{
        alert('ログインが完了しました')
        this.$router.push("/")
        })
      
      .catch((error)=>{
        switch(error.code){
          case 'auth/invalid-email':
            alert('メールアドレスの形式が違います。')
            break
            case 'auth/user-disabled':
              alert('ユーザーが無効です')
              break
              case 'auth/user0not-found':
                alert('ユーザーが存在しません')
                break
                case 'auth/wrong-password':
                  alert('パスワードが間違っております')
                  break
                default:
                  alert('エラー発生中！コーヒーでも飲んでお待ちください')
                  break
        }
    })
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