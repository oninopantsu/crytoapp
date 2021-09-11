<template>
  <div class="content-wrapper">
    <div class="products-content">
      <div class="content-wrapper">
      <div class="products-title">現物取引 </div>
      <ul>
        <li><img src="../assets/BTC.png" alt="">BTC
          <br>
        <span>ビットコイン</span> 
        </li>
      </ul>
      <div class="products-title-l"> レバレッジ取引 </div>
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
  display: flex;
  width: ;


  
}
.products-content{
  color: black;
  margin-bottom: 80px;
}
.products-title {
  font-size: 12px;
  line-height: 1.5;
  background-color:rgba(76, 92, 234, 0.37);
  border-radius: 20px 0 20px 0;
  color: black;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
img {
  width: 4%;
  padding-right: 6px;
  vertical-align: middle;

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