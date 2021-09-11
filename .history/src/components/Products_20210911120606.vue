<template>
  <div class="content-wrapper">
    <div class="products-content">
      <div class="content-wrapper">
      <p class="products-title">現物取引 </p>
      <ul>
        <li><img src="../assets/BTC.png" alt="">BTC
          <br>
        <span>ビットコイン</span> 
        </li>
      </ul>
      <p class="products-title"> レバレッジ取引 </p>
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
div {
  background-color: #fff;
  width: 100%;
}
.content-wrapper {
  width: 80%;
  margin: 80px auto;

  
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
  width: 4%;
  pa

}
.content-wrapper ul li {
  list-style: none;
  font-size: 18px;
  text-align: left;
}
span{
  font-size: 12px;
}
</style>