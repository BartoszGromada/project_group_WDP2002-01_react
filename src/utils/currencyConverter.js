export default (price, currency, rates) =>
  rates ? (price * rates[currency]).toFixed(2) : price;
