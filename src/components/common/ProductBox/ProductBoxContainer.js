import { connect } from 'react-redux';

import ProductBox from './ProductBox';

import { getAllToCompare } from '../../../redux/compareRedux';

const mapStateToProps = state => ({
  toCompareProducts: getAllToCompare(state),
});

const mapDispatchToProps = dispatch => ({
  // fetchTables: () => dispatch(fetchFromAPI()),
  // fetchProducts: () => dispatch(fetchProductsFromAPI()),
  // changeTableStatus: (status, id) => dispatch(changeTableStatus(status, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
