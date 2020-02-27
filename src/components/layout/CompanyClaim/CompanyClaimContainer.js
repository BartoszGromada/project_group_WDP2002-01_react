import { connect } from 'react-redux';
import CompanyClaim from './CompanyClaim';
import { getAll } from '../../../redux/cartRedux';

const mapStateToProps = state => ({
  cart: getAll(state),
});

export default connect(mapStateToProps)(CompanyClaim);
