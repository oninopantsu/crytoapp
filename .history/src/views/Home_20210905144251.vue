<template>
  <div class="home">
    <Products />
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
      ]
    };
  },
  components: {
    Products
  }
};
</script>

<style scoped>

</style>
