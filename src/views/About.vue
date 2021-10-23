<template>
  <div id="about">
    <h1> {{ info.symbol }} </h1>
    <div class="coin-contents">
      <p class="title">取引最終価格</p>
    <p class="last"> {{ info.last }} </p> 
    <p class="time"> {{ info.timestamp }} </p>
    </div>
   <router-link to="/" class="home">Home</router-link>
  </div>

</template>

<script>
import axios from "axios";
export default {
    data(){
      return{
        info: null,
      };
    },
    async created() {
      await axios
        .get(`/public/v1/ticker?symbol=`
        )
        .then((response) => {
          this.info = response.data.data[0];
          console.log(this.info);
        })
        .catch(error => console.log(error));
    },
};
</script>

<style scoped>
#about {
  width: 80%;
  background: #fff;
  margin: 0 auto;
  text-align: center;
}
h1 {
  font-size: 18px;
  padding: 40px
}
.coin-contents {
  width: 60%;
  margin: 0 auto;

}
.title{
  font-size: 18px;
  padding-right: 60px;
  padding-bottom: 20px;
}
.last {
  font-size: 24px;
  padding-bottom: 30px;
  
}
.time {
  font-size: 18px;
  padding-bottom: 60px;
}
.home {
  color: black;
  text-decoration: none;
}


</style>