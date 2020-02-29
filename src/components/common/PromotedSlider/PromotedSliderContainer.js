import { connect } from 'react-redux';

import PromotedSlider from './PromotedSlider';

import { getAllToCompare, addProductToCompare } from '../../../redux/compareRedux';

const mapStateToProps = state => ({
  allComperedProducts: getAllToCompare(state),
});

const mapDispatchToProps = dispatch => ({
  addToCompare: product => dispatch(addProductToCompare(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PromotedSlider);
