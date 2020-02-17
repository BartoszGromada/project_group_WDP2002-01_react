import { connect } from 'react-redux';

import CompanyClaim from './CompanyClaim';
import { getCount } from '../../../redux/cartRedux';

const mapStateToProps = state => ({
  cartValue: getCount(state),
});

export default connect(mapStateToProps)(CompanyClaim);
