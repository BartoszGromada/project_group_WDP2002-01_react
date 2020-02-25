import { connect } from 'react-redux';

import FurnitureGallery from './FurnitureGallery';

const mapStateToProps = ({ products, tabs }) => ({
  products,
  tabs,
});

export default connect(mapStateToProps)(FurnitureGallery);
