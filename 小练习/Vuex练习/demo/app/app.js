let express = require("express");
let bodyParser = require("body-parser");
let users = require("./schema/users");
let mongoose = require("mongoose");
let app = express();

app.listen(3000);
console.log('端口监听成功');

mongoose.connect(
  'mongodb://localhost:27017/vuex',
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
).then(() => {
  console.log('数据库连接成功');
}).catch(err => {
  console.log('数据库连接失败');
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());


app.use('*', function (req, res, next) {
  console.log(req.method);
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Content-type');
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS,PATCH");
  res.header('Access-Control-Max-Age', 1728000);//预请求缓存20天
  next();
});

app.use("/login", function (req, res) {
  res.send({
    status:0,
    msg: "获取成功"
  })
});
