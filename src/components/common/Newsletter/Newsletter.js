import React from 'react';
import styles from './Newsletter.module.scss';
import Button from '../../common/Button/Button';
import { faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Newsletter = () => (
  <div className={styles.newsletter}>
    <div className={styles.newscontainer}>
      <p className={styles.news}>newsletter:</p>
      <Form className={styles.newsform}>
        <InputGroup className='mb-3'>
          <InputGroup.Prepend>
            <InputGroup.Text id='basic-addon1'>
              <FontAwesomeIcon icon={faEnvelope} />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            placeholder='Email Adress'
            aria-label='Username'
            aria-describedby='basic-addon1'
          />
        </InputGroup>
      </Form>
      <Button className={styles.newsbut} variant='small'>
        <FontAwesomeIcon icon={faArrowRight} />
      </Button>
    </div>
  </div>
);

export default Newsletter;
