<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/back.png">
  </div>
</template>

<script>
import Products from '../components/Products';

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
body {
  background: #fff;
}
</style>
