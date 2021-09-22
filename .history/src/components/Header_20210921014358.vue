<template>
  <header>
    <div class="title">
      <h1> {{ message }} </h1>
      <ul class="nav-flex">
        <li>
          <router-link to="/login">Login</router-link>
        </li>
        <li>
      <router-link to="/login">Logout</router-link>
        </li>
      </ul>
    </div>
    <div class="menu-contents">
      <ul>
        <li>
          <router-link to="/login">login</router-link>
        </li>
        <li>
      <router-link to="/login">logout</router-link>
        </li>
      </ul>
      <router-view />
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      message: 'cry to app'
    }
  }
}
</script>

<style scoped>

header {
  position: relative;
  padding: 5px;
  margin: 10px;
}
.title {
  display: flex;
  justify-content: space-between;
}
h {
  z-index: 2;
  font-size: 32px;
  font-weight: bold;
  color: black;
  padding-left: 10px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
  @media screen and(max-width:400px) {
  .header-logo {
    font-size: 18px;
  }
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

.nav-flex li {
  padding-left: 10px;
  padding-right: 20px;
  list-style: none;
  font-size: 18px;
}
@media screen and(max-width:480px) {
  .nav-flex li{
    display: none;
  }
}

   
a {
  text-decoration: none;
  color: white;
  font-weight: bold;

}
a:hover {
  color: blue;
  cursor: pointer;
}
.menu-contents {
  display: none;
  background-color: teal;
}
@media screen and(max-width:480px) {
  .menu-contents{
    display: block;
  }
    .menu-contents ul li{
      list-style: none;
    }
  
}

</style>