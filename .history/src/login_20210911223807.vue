<template>
  <div>
    <h3>Login</h3>
    <label for="email">email</label>
    <input id="email" type="email" v-model="email">
    <label for="password">password</label>
    <input type="password" id="password" v-model="password">
    <br>
    <button type="submit">ログイン</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      email: '',
      password: ''
    };
  }
};
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
  
}
</style>