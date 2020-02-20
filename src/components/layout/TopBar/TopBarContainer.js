import { connect } from 'react-redux';
import { fetchRatesFromAPI } from '../../../redux/currencyRatesRedux';

import TopBar from './TopBar';
import { getStatus } from '../../../redux/currencyRatesRedux';

import {
  getCurrency,
  changeCurrency,
  getAllCurrencies,
} from '../../../redux/currencyRedux';

const mapStateToProps = state => ({
  currency: getCurrency(state),
  allCurrencies: getAllCurrencies(state),
  getStatus: getStatus(state).done,
});

const mapDispatchToProps = dispatch => ({
  changeCurrency: currency => dispatch(changeCurrency(currency)),
  fetchRates: () => dispatch(fetchRatesFromAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
