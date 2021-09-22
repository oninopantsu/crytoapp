<template>
  <div class="home">
    <Products />
  </div> 
</template>

<script>
import Products from '../components/Products.vue';
export default {
  components:{
    Products,
  },
  data
}


</script>

<style scoped>
.home {
  display: flex;

}

</style>
