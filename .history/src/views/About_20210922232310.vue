<template>
  <div id="about">
    <div v-bind="item in coinData" class="coindata" > {{ coinData.symbol }} </div>
    <div class="coin-contents">
      <p>取引最終価格</p>
    <p v-bind="item in coinData" class="coindata"> {{ coinData.last }} </p> 
    <p v-bind="item in coinData" class="coindata"> {{ coinData.timestamp }} </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data(){
    return{
      symbol: "",
      last: "",
      timestamp: ""
    }
  },
  methods: {
    async created() {
      const item = await axios
        .get("https://api.coin.z.com/public/v1/ticker/")
        .then(response => (this.info = response.data.bpi))
        .catch(error => console.log(error))
        const coinData = item.data;
        this.symbol = coinData.symbol;
        this.last = coinData.last;
        this.timestamp = coinData.timestamp;
    }
    
  },
  mounted(){
    axios
    .get("https://api.coin.z.com/public/v1/ticker/")
    .then(response => (this.info = response))
  }
}
</script>





<style scoped>
#about {
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
}

h1 {
  font-size: 24px;

}
</style>

