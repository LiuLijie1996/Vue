let express = require("express");
let app = express();
app.listen(3000, function () {
  console.log('3000端口监听成功');
});

//跨域
app.all("*", function (req, res, next) {
  res.header({
    "Access-Control-Allow-Creadentials": true,
    "Access-Control-Allow-Origin": req.headers.origin || "*",
    "Access-Control-Allow-Headers": "X-Requested-With",
    "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS",
    "Content-Type": "application/json; charset=utf-8"
  });

  if (req.method === "OPTIONS") {
    res.send(200)
  } else {
    next()
  }
});

app.get("/produc", function (req,res) {
  res.send([
    {
      id: 1,
      title: "手机",
      price: 1500,
      sku: 10//库存
    },
    {
      id: 2,
      title: "电脑",
      price: 3000,
      sku: 20//库存
    },
    {
      id: 3,
      title: "冰箱",
      price: 5000,
      sku: 30//库存
    },
  ])
});

app.get("/market", function (req,res) {
  res.send([
    {
      id: 1,
      title: "手机",
      price: 1500,
      num: 0,//购买数量
      max:10,//最多可以买多少个
    },
    {
      id: 2,
      title: "电脑",
      price: 3000,
      num: 0,//购买数量
      max:20,//最多可以买多少个
    },
  ])
});
