

<template>
  <div id="app">
    <h1> {{symbol}} </h1>
 <Products v-for="(data, index) in lists" :key="index" :city="data.name" />
    <div class="coin-contents">
      <p>取引最終価格</p>
    <p> {{ last}} </p> 
    <p class="lasttime"> {{ timestamp }} </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Products from '../components/Products.vue';
export default {
  components: { Products },
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

