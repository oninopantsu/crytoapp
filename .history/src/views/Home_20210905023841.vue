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

}
img {
  position: relative;
  width: 100%;
  
}

</style>
