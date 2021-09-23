<template>
  <div id="about">
    <h1> {{ info.symbol }} </h1>
    <div class="coin-contents">
      <p>取引最終価格</p>
    <p > {{ info.last }} </p> 
    <p> {{ info.timestamp }} </p>
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
        timestamp: "",
        info: "",
      };
    },
    
    async created() {
      await axios
        .get(`/public/v1/ticker?symbol=BTC`)
        .then((response) => {
          this.info = response.data[0];
          console.log(this.info);
        })
        .catch(error => console.log(error));
    }
};
</script>

<style scoped>
#about {
  width: 80%;
  background: #fff;
  margin: 0 auto;
  text-align: center;
}
</style>