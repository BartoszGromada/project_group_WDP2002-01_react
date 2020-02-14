import { connect } from 'react-redux';
import Stars from '../Stars/Stars';
import { getAll } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getAll(state),
});

export default connect(mapStateToProps)(Stars);
