import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import { markFavourite } from '../../../redux/productsRedux';
import { getCurrency } from '../../../redux/currencyRedux';
import { getRates, getStatus } from '../../../redux/currencyRatesRedux';

const mapStateToProps = state => ({
  getCurrency: getCurrency(state),
  getRates: getRates(state),
  getStatus: getStatus(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  markFavourite: () =>
    dispatch(
      markFavourite({
        id: props.id,
      })
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
