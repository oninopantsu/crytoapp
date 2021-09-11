<template>
  <div class="home">
    <Products />
    <img alt="Vue logo" src="../assets/back.png" no>
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
  background-color: #fff;
  position: relative;

}

</style>
