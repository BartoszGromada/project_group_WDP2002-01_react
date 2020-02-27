import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

const CompareButton = ({ id, name, img, addToCompare, allComperedProducts }) => {
  const handleClickToCompare = product => {
    const duplicates = allComperedProducts.filter(item => item.id === product.id)
      .length;

    if (allComperedProducts.length < 4 && !duplicates) {
      addToCompare(product);
    }
  };

  return (
    <Button variant='outline' onClick={() => handleClickToCompare({ id, name, img })}>
      <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
    </Button>
  );
};

CompareButton.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  img: PropTypes.string,
  addToCompare: PropTypes.func,
  allComperedProducts: PropTypes.array,
};

export default CompareButton;
