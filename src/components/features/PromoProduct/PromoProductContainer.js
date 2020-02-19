import { connect } from 'react-redux';

import PromoProduct from './PromoProduct';

const mapStateToProps = ({ products }) => ({
  products,
});

export default connect(mapStateToProps)(PromoProduct);
