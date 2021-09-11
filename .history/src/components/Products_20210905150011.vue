<template>
  <div class="content-wrapper">
    <div class="products-content">
      <h1 class="products-title"> <img src="../assets/Vector.png" alt="" srcset=""> {{ name }} </h1>
    </div>

  </div>
</template>
<script>
export default {
    props:["name" ],
};
</script>

<style scoped>
.content-wrapper {
  width: 80%;
  padding-top: ;
  margin: 300px auto;
  
}
.products-title {
  color: #fff;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>