import axios from 'axios';

//添加一个响应拦截器
axios.interceptors.response.use(function (res) {
  //在这里先对数据进行处理然后返回
  return res.data;
}, function (err) {
  //处理响应错误
  return Promise.reject(error);
});
//默认的请求地址
axios.defaults.baseURL = 'http://api.xuandan.com/DataApi/';

export default axios;
