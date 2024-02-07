const currencies = ["BTC", "ETH", "NEO"];
const url = "https://api.coincap.io/v2/assets";
async function getCryptoData() {
  var response = await fetch("https://api.coincap.io/v2/assets");
  response = await response.json();
  return response;
}

async function getExchangeRates() {
  var response = await fetch("https://api.coincap.io/v2/rates");
  response = await response.json();
  return response;
}
const response_crypto = getCryptoData();
const response_rates = getExchangeRates();

console.log(response_crypto);
console.log(response_rates);
