import { connect } from 'react-redux';

import Price from './Price';

import { getAllToCompare } from '../../../redux/compareRedux';
import { getCurrency } from '../../../redux/currencyRedux';
import { getRates, getStatus } from '../../../redux/currencyRatesRedux';

const mapStateToProps = state => ({
  allComperedProducts: getAllToCompare(state),
  getCurrency: getCurrency(state),
  getRates: getRates(state),
  getStatus: getStatus(state).done,
});

export default connect(mapStateToProps)(Price);
