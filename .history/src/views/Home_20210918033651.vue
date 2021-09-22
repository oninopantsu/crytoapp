<template>
  <div class="home">
    <Products />
  </div> 
</template>

<script>
import Products from '../components/Products.vue';
export default {
  data(){
    return{
      lists:[
        {
          symbol: "BTC"
        },
        {
          symbol: "LTC"
        },
        {
          symbol: "XEM"
        },
        {
          symbol: "LTC"
        },
       { 
          symbol: "XRP"
        }
      ]
    }
  },
  components:{
    Products,
  }
}


</script>

<style scoped>
.home {
  display: flex;
}

</style>
