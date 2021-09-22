

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
  props:["name"],
  data() {
    return {
      symbol: "",
      last: "",
      timestamp: "",
    };
  },


  async created() {
    
  
        params:{
          "name": "symbol"
        }
      }
    );
    const coinData = item.data;
    this.symbol = coinData.symbol;
    this.last = coinData.last;
    this.timestamp = coinData.timestamp;
  },
  mounted (){
    axios
    .get("/api").then(res=>{
    console.log(res.data)
})
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

