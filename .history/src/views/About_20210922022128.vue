

<template>
  <div id="app">
    <h1> {{ symbol }} </h1>
    <div class="coin-contents">
      <p>取引最終価格</p>
    <p> {{ last }} </p> 
    <p class="lasttime"> {{ timestamp }} </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props:["name"],
  data() {
    return {
      symbol: "",
      last: "",
      timestamp: "",
    };
  },
  async created() {
    const item = await axios.get(
      "https://api.coin.z.com/public/v1/ticker"
    );
    const coinData = item.data;
    this.symbol = coinData.symbol;
    this.last = coinData.last;
    this.timestamp = coinData.timestamp;
  },
  mounted(){
    var parseString
  }
};
</script>

<style scoped>
#app {
  background-color: #fff;
}

h1 {
  font-size: 24px;

}
</style>

