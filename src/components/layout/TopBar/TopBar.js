import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUser, faLock, faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './TopBar.module.scss';

const TopBar = ({ currency, allCurrencies, changeCurrency }) => {
  const [open, setOpen] = useState(false);

  const handleOpenCurrencies = () => {
    setOpen(!open);
  };

  const handleCurrencyClick = symbol => {
    changeCurrency(symbol);
    setOpen(!open);
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={`col text-left ${styles.topOptions}`}>
            <ul>
              <li>
                <div
                  onClick={() => handleOpenCurrencies()}
                  className={styles.actualCurrency}
                >
                  {currency}{' '}
                  <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
                </div>
                {allCurrencies && (
                  <div
                    className={`${styles.currenciesContainer} ${open && styles.open}`}
                  >
                    {allCurrencies.map(symbol => (
                      <h6 key={symbol} onClick={() => handleCurrencyClick(symbol)}>
                        {symbol}
                      </h6>
                    ))}
                  </div>
                )}
              </li>
              <li>
                <a href='#'>
                  English <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
                </a>
              </li>
              <li>
                <a href='#'>
                  Help <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
                </a>
              </li>
            </ul>
          </div>
          <div className={`col text-right ${styles.topMenu}`}>
            <ul>
              <li>
                <a href='#'>
                  <FontAwesomeIcon className={styles.icon} icon={faUser} /> Login
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon className={styles.icon} icon={faLock} /> Register
                </a>
              </li>
              <li>
                <a href='#'>
                  <FontAwesomeIcon className={styles.icon} icon={faBars} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

TopBar.propTypes = {
  currency: PropTypes.string,
  allCurrencies: PropTypes.array,
  changeCurrency: PropTypes.func,
};

export default TopBar;
