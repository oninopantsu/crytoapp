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
        {
          name: "BLT"
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
body {
  background-color: ;
}

</style>
