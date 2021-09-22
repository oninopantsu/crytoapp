module.exports = {
  devServer: {
    proxy: {
    "https://api.coin.z.com/public/v1/ticker?symbol"
  }
}
}