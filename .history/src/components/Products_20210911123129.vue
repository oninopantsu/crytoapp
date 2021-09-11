<template>
  <div class="content-wrapper">
    <div class="products-content">
      <div class="products-title">
       <p>現物取引</p> 
      <ul>
        <li><img src="../assets/BTC.png" alt="">BTC
          <br>
        <span>ビットコイン</span> 
        </li>
      </ul>
      </div>

      <div class="products-title-l"> 
        <p>レバレッジ取引</p>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
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
div {
  background-color: #fff;
  width: 100%;
}
.pro-content {
  width: 80%;
  margin: 80px auto;
  
}
.products-title{
  width: 40%;
}
.products-title p {
  font-size: 12px;
  background-color:rgba(76, 92, 234, 0.37);
  border-radius: 20px 0 20px 0;
  color: black;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-align: center;
  vertical-align: middle;
  padding: 10px 10px;
}
img {
  width: 4%;
  padding-right: 6px;
  vertical-align: middle;

}
.content-wrapper ul li {
  list-style: none;
  font-size: 18px;
}
span{
  font-size: 12px;
}
.products-title-l {
  width: 40%;
  }
.products-title-l p{
  background-color: rgba(29, 196, 249, 0.31);
  border-radius: 20px 0 20px 0;

}
</style>