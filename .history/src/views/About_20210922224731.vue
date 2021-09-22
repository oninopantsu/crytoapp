

<template>
  <div id="about">
    <h1> {{ symbol }} </h1>
    <div class="coin-contents">
      <p>取引最終価格</p>
    <p> {{ last }} </p> 
    <p class="lasttime"> {{ timestamp }} </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    async run() {
      let result;
      // ----- start 非同期処理 -----
      await axios
        .get("https://api.coin.z.com/public/v1/ticker?symbol")
        .then(() => {
          //非同期処理終了時に実行されるメソッド
          console.log("非同期処理終了");
          result = "完了";
        });
      // ----- end 非同期処理 -----
      const message = "非同期処理";
      console.log(message + result);
    },
  },
  created() {
    this.run();
  },
};</script>





<style scoped>
#about {
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
}

h1 {
  font-size: 24px;

}
</style>

