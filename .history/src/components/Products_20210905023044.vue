<template>
  <div class="content-wrapper">
    <img class="contents-img" src="../assets/Vector.png" alt="">
    <div class="products-content">
      <h1 class="products-title"> {{ name }} </h1>
    </div>

  </div>
</template>
<script>
export default {
  return {

    props:[name
    ],
  }
};
</script>

<style scoped>
.content-wrapper {
  width: 80%;
  margin: 0 auto;
  
}
.products-title {
  color: #fff;
}
</style>