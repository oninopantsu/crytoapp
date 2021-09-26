module.exports = {
  publicPath:'./',

  devServer: {
    proxy: {
    "/public/"  :{
      target:"https://api.coin.z.com", 
      },
    },
  },
};