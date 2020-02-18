import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import { markFavourite } from '../../../redux/productsRedux';
import { getAllToCompare, addProductToCompare } from '../../../redux/compareRedux';

const mapStateToProps = state => ({
  allComperedProducts: getAllToCompare(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  markFavourite: () =>
    dispatch(
      markFavourite({
        id: props.id,
      })
    ),
  addToCompare: product => dispatch(addProductToCompare(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
