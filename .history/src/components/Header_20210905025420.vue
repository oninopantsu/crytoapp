<template>
  <header>
    <div class="title">
      <h1 class="header-logo">Cry to App</h1>
      <ul class="nav-flex">
        <li><a href="./Top.vue">トップページへ</a> </li>
        <li><a href="./Top.vue">ログアウト</a> </li>
      </ul>
      <img src="../assets/ricardo-gomez-angel-2mjl2uvz9ic-unsplash.jpg" alt="">
    </div>
  </header>
</template>

<style scoped>


header {
  height: 10px;
  line-height: 70px;
  background-color:#fff;
  position: relative;

}
.header-logo {
  z-index: 2;
  font-size: 20px;
  font-weight: bold;
  color: black;
}
img {
  width: 100%;
  z-index: 1;
}
.nav-flex {
  display: flex;
}
</style>