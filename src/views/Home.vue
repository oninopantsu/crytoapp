<template>
  <div class="home">
  
    <Products  />
  </div> 
</template>

<script>
import Products from '../components/Products.vue';
export default {
  components:{
    Products,
  },
  data(){
    return{
      lists: [
        {
          symbol:"BTC",
          
        },
        {
          symbol:"ETH"
        },
        {
          symbol:"BCH"
        },
        {
          symbol:"LTC"
        },
        {
          symbol:"XRP"
        },
        {
          symbol:"XEM"
        },
        {
          symbol:"BTC_JPY"
        },
        {
          symbol:"ETH_JPY"
        },
        {
          symbol:"LTC_JPY"
        },
        {
          symbol:"XRP_JPY"
        },
      ]
    }
  }
}


</script>

<style scoped>
.home {
  display: flex;

}

</style>
