import { connect } from 'react-redux';
import CompareButton from './CompareButton';
import { getAllToCompare, addProductToCompare } from '../../../redux/compareRedux';

const mapStateToProps = state => ({
  allComperedProducts: getAllToCompare(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  addToCompare: product => dispatch(addProductToCompare(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompareButton);
