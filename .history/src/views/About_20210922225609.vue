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
import axios from "axios";

export default {
  methods: {
    async created() {
      const item = await axios
        .get("https://api.coin.z.com/public/v1/ticker/");
        const coinData = item.data;
        this.symbol = coinData.symbol;
        this.last = coinData.last;
        this.symbol = coinData.symbol;
    }
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

