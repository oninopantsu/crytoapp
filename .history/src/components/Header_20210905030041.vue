<template>
  <header>
    <div class="title">
      <h1 class="header-logo">Cry to App</h1>
      <ul class="nav-flex">
        <li><a href="./Top.vue">トップページへ</a> </li>
        <li><a href="./Top.vue">ログアウト</a> </li>
      </ul>
    </div>
      <img src="../assets/ricardo-gomez-angel-2mjl2uvz9ic-unsplash.jpg" alt="">
  </header>
</template>

<style scoped>


header {
  height: 10px;
  line-height: 70px;
  background-color:#fff;
  position: relative;

}
.title {
  display: flex;
  justify-content: space-between;
}
.header-logo {
  z-index: 2;
  font-size: 32px;
  font-weight: bold;
  color: black;
  padding-left: 10px;
}
img {
  width: 100%;
  z-index: 1;
}
.nav-flex {
  display: flex;
  flex-direction: row;
}
li {
  padding-left: 10px;
  padding-right: 20px;

}
a {
  text-decoration: none;
  color: #bbb;

}
a:hover {
  color: blue;
  cursor: pointer;
}
</style>