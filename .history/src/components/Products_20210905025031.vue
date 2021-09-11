<template>
  <div class="content-wrapper">
    <div class="products-content">
      <h1 class="products-title"> {{ name }} </h1>
    </div>

  </div>
</template>
<script>
export default {
    props:["name" ],
};
</script>

<style scoped>
.content-wrapper {
  width: 80%;
  margin: 0 auto;
  ba
  
}
.products-title {
  color: #fff;
}
</style>