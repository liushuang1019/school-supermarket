
module.exports={
    devServer:{
        proxy: {//代理接口
            "/api": {
              target: "http://106.13.85.240:7002/",
              changeOrigin:true,
              pathRewrite: {"^/api" : ""}
            }
          }
    }
}