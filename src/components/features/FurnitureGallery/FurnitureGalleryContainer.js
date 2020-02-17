import { connect } from 'react-redux';

import FurnitureGallery from './FurnitureGallery';

const mapStateToProps = state => ({
  products: state.products,
  tabs: state.tabs,
});

export default connect(mapStateToProps)(FurnitureGallery);
