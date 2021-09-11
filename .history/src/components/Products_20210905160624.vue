<template>
  <div class="content-wrapper">
    <div class="products-content">
      <img src="../assets/Vector.png" alt="" srcset="">
      <h1 class="products-title">  {{ name }} </h1>
      <h1 class="products-title">  {{ name }} </h1>
      <div class="content-wrapper">
        <h2>現物取引</h2>
        <ul>
          <li><img src="../assets/Vector.png" alt="" srcset=""> BTC</li>
        </ul>
      </div>
    </div>

  </div>
</template>
<script>
export default {
    props:["name" ]
};
</script>

<style scoped>
.content-wrapper {
  width: 80%;
  
  margin: 80px auto;
  background-color:#fff;

  
}
.products-content{
  color: black;
  margin-bottom: 80px;
}
.products-title {
  background-color: blue;
  color: black;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
img {
width: 80px;

}
</style>