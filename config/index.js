require("dotenv").config();

const App = {
  networkhost: process.env.NETWORK_HOST,
  localhost: process.env.LOCAL_HOST,
  port: process.env.PORT || 8000,
};

const Vnpay = {
  TmnCode: process.env.VNP_TMN_CODE,
  HashSecret: process.env.VNP_HASH_SECRET,
  Url: process.env.VNP_URL,
  Api: process.env.VNP_API,
  ReturnUrl: `http://${App.localhost}:${App.port}/${process.env.VNP_RETURN_URL}`,
};

module.exports = {
  App,
  Vnpay,
};
