<template>
  <div class="home">
    <products
    <img alt="Vue logo" src="../assets/back.png">
  </div>
</template>

<script>
import Products from '../components/Products';
import Products from '../components/Products.vue';

export default {
  data(){
    return {
      lists: [
        {
          name: "BTC"
        }
      ]
    };
  },
  components: {
    Products
    Products
  }
};
</script>

<style scoped>
body {
  background: #fff;
}
</style>
