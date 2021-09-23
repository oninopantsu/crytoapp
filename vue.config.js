module.exports = {
  devServer: {
    proxy: {
    "/public/"  :{
      target:"http://api.coin.z.com", 
      },
    },
  },
};