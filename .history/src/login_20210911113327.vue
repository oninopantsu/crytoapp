<template>
  <div>
    <h3>Login</h3>
    <label for="email">email</label>
    <input id="email" type="email" v-model="email">
    <label for="password">pass</label>
    <input type="password" id="password" v-model="password">
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
}
h3 {
  font-size: 32px;
  padding: 30px;
  margin: 60px;

}
</style>