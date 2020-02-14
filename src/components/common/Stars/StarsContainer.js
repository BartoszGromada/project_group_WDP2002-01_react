import { connect } from 'react-redux';
import Stars from '../Stars/Stars';
import { getAll, getOpinion } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  mouseMove: (product, star) => dispatch(getOpinion(product, star)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Stars);
