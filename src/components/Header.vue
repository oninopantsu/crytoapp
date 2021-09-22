<template>
  <header>
    <div class="title">
      <h1> {{ message }} </h1>
      <ul class="nav-flex">
        <li>
          <router-link to="/login" @isLoggedIn="handleShow" @isLogout="handleShow">Login</router-link>
          <router-link to="/Home" v-show="showHome">Home</router-link>
        </li>
        <li>
      <router-link to="/login">Logout</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  data(){
    return{
      message: 'cry to app',
      showHome: false

    }
    
  },
    methods: {
      isActive(){
        this.isActive = !this.isActive

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
h1 {
  z-index: 2;
  font-size: 32px;
  font-weight: bold;
  color: black;
  padding-left: 10px;
  font-family: Georgia, 'Times New Roman', Times, serif;
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

   
a {
  text-decoration: none;
  color: white;
  font-weight: bold;

}
a:hover {
  color: blue;
  cursor: pointer;
}

@media screen and(max-width:480px) {
h1 {
  font-size: 12px;
}
}

</style>