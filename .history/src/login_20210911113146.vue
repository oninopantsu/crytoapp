<template>
  <div>
    <h3>ログイン</h3>
    <label for="email">ログインメールアドレス</label>
    <input id="email" type="email" v-model="email">
    <label for="password">パスワード</label>
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
body {
  width: 100%;
}
div {
  background-color: #fff;
  ma
}
</style>