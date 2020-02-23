import { connect } from 'react-redux';
import Furniture from './Furniture';
import { getAll } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getAll(state),
});

export default connect(mapStateToProps)(Furniture);
