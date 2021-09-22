module.exports = {
  devServer: {
    proxy: {
      "http://api.coin.z.com/public/v1/ticker": {
      target: "http://localhost:8080",
    }
  }
}
}