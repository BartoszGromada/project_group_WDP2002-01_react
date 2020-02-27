import { connect } from 'react-redux';

import PromotedBox from './PromotedBox';

import { getAllToCompare, addProductToCompare } from '../../../redux/compareRedux';

const mapStateToProps = state => ({
  allComperedProducts: getAllToCompare(state),
});

const mapDispatchToProps = dispatch => ({
  addToCompare: product => dispatch(addProductToCompare(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PromotedBox);
