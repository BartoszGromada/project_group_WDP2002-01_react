import { connect } from 'react-redux';
import Stars from '../Stars/Stars';
import { getAll, updateOpinion } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  products: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  getOpinion: (product, stars) => dispatch(updateOpinion(product, stars)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Stars);
