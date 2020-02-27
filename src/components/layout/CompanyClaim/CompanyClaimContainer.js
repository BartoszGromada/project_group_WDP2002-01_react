import { connect } from 'react-redux';

import CompanyClaim from './CompanyClaim';
import { getCount, getAll } from '../../../redux/cartRedux';

const mapStateToProps = state => ({
  cartValue: getCount(state),
  cart: getAll(state),
});

export default connect(mapStateToProps)(CompanyClaim);
