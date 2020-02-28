import React, { useState } from 'react';
import styles from './CookiesInfo.module.scss';
import Button from '../../common/Button/Button';

const CookiesInfo = () => {
  const [visible, setVisible] = useState(true);

  const handleButtonClick = () => {
    setVisible(false);
  };

  return (
    <>
      {visible && (
        <div className={styles.root}>
          <p>
            We use cookies to enhance your experience. By continuing to visit this site
            you agree to our use of cookies. <a>More info</a>
          </p>

          <Button variant='cookie' onClick={handleButtonClick}>
            Got it!
          </Button>
        </div>
      )}
    </>
  );
};

export default CookiesInfo;
