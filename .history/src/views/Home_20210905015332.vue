<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/back.png">
  </div>
</template>

<script>
// @ is an alias to /src
import Products from '@/components/Products.vue'

export default {
  data(){
    return {
      lists: [
        {
          name: ""
        }
      ]
    }
  }
}
</script>
