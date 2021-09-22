Vue.config.js

module.exports = {
  devServer: {
    proxy: {
      target: "https://api.coin.z.com/public/v1/ticker"
  }
};