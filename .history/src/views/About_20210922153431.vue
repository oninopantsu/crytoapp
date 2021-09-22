

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


   created() {
    this.$axios
    .get("https://api.coin.z.com/public/v1/ticker",{
        params:{
          name: "symbol"
     }
    })
  .then(response => {
    this.tinker = response.data;
  })
  .catch(err => {
    (this.errored = true), (this.error = err);
  })
  .finally(() => (this.loading = false));
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

