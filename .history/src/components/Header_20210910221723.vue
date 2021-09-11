<template>
  <header>
    <div class="title">
      <h1 class="header-logo">Cry to App</h1>
      <ul class="nav-flex">
        <li><a href="./Home.vue">トップページへ</a> </li>
        <li><a href="./Top.vue">ログアウト</a> </li>
      </ul>
    </div>
    <div class="menu-contents">
      <ul>
        <li>
          <a href="#"></a>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>

header {
  background-color:#fff;
  position: relative;
  padding: 5px;
  margin: 10px;
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
@media screen and(max-width:480px) {
  .header-logo{
    font-size: 12px;
  }
}
  
.nav-flex {
  display: flex;
  flex-direction: row;
}

li {
  padding-left: 10px;
  padding-right: 20px;
  list-style: none;
  font-size: 12px;
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