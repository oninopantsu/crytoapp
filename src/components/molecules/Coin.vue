<template>
  <li>
    <img :src="url" alt="">
    <a @click="$router.push({name:'About', params:{coinName:symbol}})" class="title">
      {{ this.coinName.symbol }}
      </a>
      <br><span class="subtitle">{{ this.coinName.name }}</span>
  </li>
</template>

<script>

export default {
  props:{
    coinName: {
      name: String,
      symbol: String,
      url: String
    }
  },
  data(){
    return {
      url: require('../../assets/' + this.coinName.symbol + '.png'),
    };
  },
  mouted(){
    console.log(this.coinName);
  },
}
</script>

<style>
a {
  cursor:pointer;
}
  @media screen and (max-width:480px) {
  li{
    width: 40%;
    margin: 20px;
  }
  .title {
    font-size: 12px;
  }
  .subtitle {
    font-size: 8px;
  }
  img {
    width: 30%;
  }
  }

</style>