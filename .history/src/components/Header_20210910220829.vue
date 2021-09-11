<template>
  <header>
    <div class="title">
      <h1 class="header-logo">Cry to App</h1>
      <ul class="nav-flex">
        <li><a href="./Home.vue">トップページへ</a> </li>
        <li><a href="./Top.vue">ログアウト</a> </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>

header {
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
  color: #bbb;
  padding-left: 10px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
@media screen and(max-width) {
  
}
  
.nav-flex {
  display: flex;
  flex-direction: row;
}

li {
  padding-left: 10px;
  padding-right: 20px;
  list-style: none;
}
@media screen and(max-width:480px) {
  
  li{
    font-size: 8px;
 
  }
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