import React from 'react';
import PropTypes from 'prop-types';
import Promotion from '../../features/Promotion/Promotion';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
// import Brands from '../../features/Brands/BrandsContainer';
// import FurnitureGallery from '../../features/FurnitureGallery/FurnitureGalleryContainer';
import Feedback from '../../features/Feedback/FeedbackContainer';

const Homepage = ({ searchString }) => (
  <div className={styles.root}>
    {!searchString && (
      <>
        <FeatureBoxes />
        <Promotion />
      </>
    )}
    <NewFurniture />
    {/* <FurnitureGallery /> */}
    {/* <Brands /> */}
    <Feedback />
  </div>
);

Homepage.propTypes = {
  searchString: PropTypes.string,
};

export default Homepage;
