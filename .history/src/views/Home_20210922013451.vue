<template>
  <div class="home">
    <Products v-for="(data,index) in lists" :key="index" :symbol="data.name" />
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
          name:"BTC"
        },
        {
          name:"ETH"
        },
        {
          name:"BCH"
        },
        {
          name:"LTC"
        },
        {
          name:"XRP"
        },
        {
          name:"XEM"
        },
        {
          name:"BTC_JPY"
        },
        {
          name:"ETH_JPY"
        },
        {
          name:"LTC_JPY"
        },
        {
          name:"XRP_JPY"
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
