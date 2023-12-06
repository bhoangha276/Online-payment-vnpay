require("dotenv").config();

const App = {
  Host: process.env.NETWORK_HOST || process.env.LOCAL_HOST,
  Hosting: process.env.HOSTING,
  Port: process.env.PORT || 8888,
  Url: "",
};

if (App.Host) {
  App.Url = `http://${App.Host}:${App.Port}`;
} else if (App.Hosting) {
  App.Url = `https://${App.Hosting}`;
}

const Vnpay = {
  TmnCode: process.env.VNP_TMN_CODE,
  HashSecret: process.env.VNP_HASH_SECRET,
  Url: process.env.VNP_URL,
  Api: process.env.VNP_API,
  ReturnUrl: `${App.url}/${process.env.VNP_RETURN_URL}`,
};

module.exports = {
  App,
  Vnpay,
};
