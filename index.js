var myRequest = new Request("https://coinmarketcap.com/ru/currencies/toncoin/");

fetch(myRequest)
  .then(function (response) {
    return response.text();
  });
