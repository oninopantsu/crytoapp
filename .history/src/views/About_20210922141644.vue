

<template>
  <div id="about">
    <h1> {{ symbol }} </h1>
    <div class="coin-contents">
      <p>取引最終価格</p>
    <p> {{ last }} </p> 
    <p class="lasttime"> {{ timestamp }} </p>
    </div>
  </div>
</template>

<script>
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
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
      "Access-Control-Allow-Origin:https://api.coin.z.com/public/v1/ticker"
    );
    const coinData = item.data;
    this.symbol = coinData.symbol;
    this.last = coinData.last;
    this.timestamp = coinData.timestamp;
  },
  mounted (){
    axios
    .get("/api/public/v1/ticker")
    .then(response => (this.info = response.data))
  .catch(error => console.log(error))
  }
};
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

