import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Shop.module.scss';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Shop = () => (
  <Jumbotron className={styles.root}>
    <Container>
      <Row>
        <Col lg={2} sm={12}>
          <h2 className={styles.sectionTitle}>Furniture</h2>
        </Col>
        <Col md={{ span: 3, offset: 6 }}>
          <p>{'Home > Furniture > Chair'}</p>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
);

// ProductPage.propTypes = {};

export default Shop;
