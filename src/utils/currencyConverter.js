export default (price, currency, rates) => {
  switch (currency) {
    case 'USD':
      return price * rates.toFixed(2);
    case 'EUR':
      return price * rates.toFixed(2);
    case 'PLN':
      return (price * rates).toFixed(2);
    default:
      return 'price';
  }
};
