

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
export default {
  props:["symbol"],
  data() {
    return {
      symbol: "",
      last: "",
      timestamp: "",
    };
  },
   async created() {
    const item = await axios.get(
      `https://api.coin.z.com/public/v1/ticker?symbol`
    );
    const weatherData = item.data;
    this.name = weatherData.name;
    this.main = weatherData.weather[0].main;
    this.temp = weatherData.main.temp;
    this.humidity = weatherData.main.humidity;
    this.speed = weatherData.wind.speed;
  }
};
</script>




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

