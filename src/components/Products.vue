<template>
  <div class="content-wrapper">
    <div class="products-content">
      <div class="products-title">
       <p> {{ message }}</p>
       <ul>
         <div v-for="list in lists" :key=list.symbol>
           <Coin :coinName="{
             name: list.name,
             symbol: list.symbol,
           }" />
           </div>
           </ul>
      </div>

      <div class="products-title-l"> 
        <p> {{message2}} </p>
       <ul>
         <div v-for="list in lists2" :key=list.symbol>
           <Coin2 :coinName="{
             name: list.name,
             symbol: list.symbol,
           }" />
           </div>
           </ul>
      </div>
    </div>
    

  </div>
</template>

<script>
import Coin from "./molecules/Coin.vue";
import Coin2 from "./molecules/Coin2.vue";
export default {  
  data() {
    return{
  lists:[
    {
    name:"ビットコイン",
    symbol: "BTC",
    },
    {
    name:"イーサリアム",
    symbol: "ETH"

    },
    {
    name:"ビットコインキャッシュ",
    symbol: "BCH"
    },
    {
    name:"ライトコイン",
    symbol: "LTC"
    },
    {
    name:"リップル",
    symbol: "XRP"
    },
    {
    name:"ネム",
    symbol: "XEM"
    },
  ],
  lists2:[
    {
    name:"ビットコイン(円)",
    symbol: "BTC_JPY"
    },
    {
    name:"イーサリアム(円)",
    symbol: "ETH_JPY"
    },
    {
    name:"ビットコインキャッシュ",
    symbol: "BCH_JPY"
    },
    {
    name:"ライトコイン(円)",
    symbol: "LTC_JPY"
    },
    {
    name:"リップル(円)",
    symbol: "XRP_JPY"
    },
  ],
    message: "現物取引",
    message2: "レバレッジ取引",
    }
  },
    components: {
      Coin,
      Coin2,
    },

  
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
.content-wrapper ul li a:hover{
  font-size: 1.2rem;

}

span{
  font-size: 8px;
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
.products-title-l a{
  cursor: pointer;
}
  @media screen and (max-width:480px) {
    .products-title{
    width: 40%;
    margin: 20px;
  }
    .products-content {
    display: flex;
  }
  .products-title p {
    font-size: 8px;
  }
  .products-title-l p{
    font-size: 8px;

  }
  .products-title-l {
  width: 40%;
  margin: 20px;
  }
  img {
    width: 10%;
  }
  .products-title-l a{
  font-size: 0.6rem;
}
  .products-title a{
  font-size: 0.8rem;
}

  
  }
</style>