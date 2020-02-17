import { connect } from 'react-redux';

import TopBar from './TopBar';

import {
  getCurrency,
  changeCurrency,
  getAllCurrencies,
} from '../../../redux/currencyRedux';

const mapStateToProps = state => ({
  currency: getCurrency(state),
  allCurrencies: getAllCurrencies(state),
});

const mapDispatchToProps = dispatch => ({
  changeCurrency: currency => dispatch(changeCurrency(currency)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
