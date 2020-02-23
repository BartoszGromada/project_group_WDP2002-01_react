import React from 'react';
import styles from './ShopTable.module.scss';
import Button from '../../common/Button/Button';
import Stars from '../../common/Stars/Stars';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

class ShopTable extends React.Component {
  render() {
    return (
      <div className={styles.tabs}>
        <div className={styles.tab}>
          <p className={styles.tabtitle}>description</p>
        </div>
        <div className={styles.tab_active}>
          <p className={styles.tabtitle}>reviews(0)</p>
        </div>
        <div className={styles.tab}>
          <p className={styles.tabtitle}>specification</p>
        </div>
        <div className={styles.tab}>
          <p className={styles.tabtitle}>custom tab</p>
        </div>
        <div className={styles.tabcontent}>
          <p>There are no reviews for this product</p>
          <p>
            <b>Add a review</b>
          </p>
          <p className={styles.tabrating}>
            Bad <Stars /> Good
          </p>
          <p>Your review</p>
          <Form>
            <Form.Group controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Your review</Form.Label>
              <Form.Control as='textarea' rows='3' />
            </Form.Group>
            <Form.Row>
              <Col>
                <Form.Control placeholder='Name' />
              </Col>
              <Col>
                <Form.Control type='email' placeholder='Enter email' />
              </Col>
              <Button variant='small'>CONTINUE</Button>
            </Form.Row>
          </Form>
        </div>
      </div>
    );
  }
}

export default ShopTable;
