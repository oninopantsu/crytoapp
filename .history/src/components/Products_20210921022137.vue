<template>
  <div class="content-wrapper">
    <div class="products-content">
      <div class="products-title">
       <p> {{ message }}</p> 
      <ul>
        <li><img src="../assets/BTC.png" alt=""><a @click="$router,push({name:'About', params: { name:name }})"> BTC
          <br>
        <span>ビットコイン</span></a> 
        </li>
        <li><img src="../assets/ETH.png" alt="">ETH
          <br>
        <span>イーサリアム</span> 
        </li>
        <li><img src="../assets/BCH.png" alt="">BCH
          <br>
        <span>ビットコインキャッシュ</span> 
        </li>
        <li><img src="../assets/LTC.png" alt="">LTC
          <br>
        <span>ライトコイン</span> 
        </li>
        <li><img src="../assets/XRP.png" alt="">XRP
          <br>
        <span>リップル</span> 
        </li>
        <li><img src="../assets/XEM.png" alt="">XEM
          <br>
        <span>ネム</span> 
        </li>
      </ul>
      </div>

      <div class="products-title-l"> 
        <p> {{message2}} </p>
          <ul>
        <li>
          <img src="../assets/BTC.png" alt="">BTC_JPY
          <br>
        <span>ビットコイン（円）</span> 
        </li>
        <li>
          <img src="../assets/ETH.png" alt="">ETH_JPY
          <br>
        <span>イーサリアム（円）</span> 
        </li>
        <li>
          <img src="../assets/BCH.png" alt="">BCH_JPY
          <br>
        <span>ビットコインキャッシュ（円）</span> 
        </li>
        <li>
          <img src="../assets/LTC.png" alt="">LTC_JPY
          <br>
        <span>ライトコイン（円）</span> 
        </li>
        <li>
          <img src="../assets/XRP.png" alt="">XRP_JPY
          <br>
        <span>リップル（円）</span> 
        </li>
          </ul>
      </div>
    </div>
    

  </div>
</template>

<script>

export default {
  data() {
    return{
      message: "現物取引",
      message2: "レバレッジ取引"
    }
  },
  props:["name"]

};
</script>


<style scoped>
div {
  width: 100%;
  margin-bottom: 30px;
}
.products-content {
  background-color: #fff;
  width: 80%;
  margin: 10px auto;
  display: flex;
  justify-content: space-evenly;
  
}
.products-title{
  width: 40%;
  margin: 80px;
}
.products-title a{
  cursor: pointer;
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
  width: 12%;
  padding-right: 18px;
  vertical-align: middle;

}
.content-wrapper ul  {
  margin-top: 20px;
}
.content-wrapper ul li {
  list-style: none;
  font-size: 18px;
  text-align: center;
  padding: 10px;
}
.content-wrapper ul li {
  
}

span{
  font-size: 12px;
}
.products-title-l {
  width: 40%;
  margin: 80px;
  }
.products-title-l p{
  background-color: rgba(29, 196, 249, 0.31);
  border-radius: 20px 0 20px 0;
  color: black;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-align: center;
  vertical-align: middle;
  padding: 10px 10px;


}
</style>