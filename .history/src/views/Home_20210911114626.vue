<template>
  <div class="home">
    <Products />
    <Products v-for="(data,index) in lists" :key="index" :name="data.name" />
    <Products v-for="(data,index) in lists" :key="index" :name="data.name" />
  </div>
</template>

<script>
import Products from '../components/Products.vue';

export default {
  data(){
    return {
      lists: [
        {
          name: "BTC"
        },
        {
          name: "BLT"
        },
        {
          name: "ETH"
        }
      ]
    };
  },
  components: {
    Products
  }
};
</script>

<style scoped>
.home {
  display: flex;
}

</style>
