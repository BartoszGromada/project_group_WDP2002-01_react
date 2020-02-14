import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import { markFavourite } from '../../../redux/productsRedux';

const mapDispatchToProps = (dispatch, props) => ({
  markFavourite: () =>
    dispatch(
      markFavourite({
        id: props.id,
      })
    ),
});

export default connect(null, mapDispatchToProps)(ProductBox);
