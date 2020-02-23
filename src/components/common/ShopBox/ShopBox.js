import React from 'react';
import styles from './ShopBox.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faShoppingBasket,
  faPlus,
  faMinus,
  faChevronRight,
  faChevronLeft,
  faExpandAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faEye, faStar } from '@fortawesome/free-regular-svg-icons';
import {
  faFacebookF,
  faGooglePlusG,
  faTwitter,
  faPinterestP,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

import Button from '../../common/Button/Button';
import Stars from '../../common/Stars/Stars';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';

class ShopBox extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron className={styles.root}>
          <Container>
            <Row>
              <Col lg={2} sm={12}>
                <h2 className={styles.title}>Furniture</h2>
              </Col>
              <Col md={{ span: 3, offset: 7 }}>
                <p>{'Home > Furniture > Chair'}</p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <Container className={styles.container}>
          <Row className={styles.row}>
            <Col className={styles.photo} lg={5} sm={12}>
              <Button className={styles.slidebutleft} variant={'outline'}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </Button>
              <Button className={styles.slidebutright} variant={'outline'}>
                <FontAwesomeIcon icon={faChevronRight} />
              </Button>
              <Row className={styles.rowphoto}>
                <div className={styles.bigimg}>
                  <Button className={styles.expandbut} variant={'outline'}>
                    <FontAwesomeIcon icon={faExpandAlt} />
                  </Button>
                </div>
                <div className={styles.sliderwrapper}>
                  <div className={styles.slider}>
                    <div className={styles.slide}></div>
                    <div className={styles.slide} />
                    <div className={styles.slide} />
                    <div className={styles.slide}></div>
                  </div>
                </div>
              </Row>
            </Col>
            <Col className={styles.description} lg={7} sm={12}>
              <Row className={styles.row}>
                <h2 className={styles.subtitle}>Sunbaby Magic Bear Chair</h2>
                <Button className={styles.previousbut} variant={'outline'}>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </Button>
                <Button className={styles.nextbut} variant={'outline'}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </Button>
              </Row>
              <Row className={styles.row}>
                <Stars /> (0 Reviews) | Add your review
              </Row>
              <Dropdown.Divider className={styles.divider} />
              <Row className={styles.row}>
                <div className={styles.price}>
                  <span className={styles.oldPrice}>$350.00</span>
                </div>
                <div className={styles.price}>
                  <Button className={styles.pricebut} noHover variant='small'>
                    $250.00
                  </Button>
                </div>
              </Row>
              <Dropdown.Divider className={styles.divider} />
              <Row className={styles.row}>
                <Button className={styles.cartbut} variant='small'>
                  <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
                  ADD TO CART
                </Button>
                <Button className={styles.smallbut} variant={'outline'}>
                  <FontAwesomeIcon icon={faEye} />
                </Button>
                <Button className={styles.smallbut} variant='outline'>
                  <FontAwesomeIcon icon={faStar} />
                </Button>
                <Button className={styles.smallbut} variant='outline'>
                  <FontAwesomeIcon icon={faExchangeAlt} />
                </Button>
              </Row>
              <Row className={styles.row}>
                <div className={styles.quantity}>
                  <p className={styles.quantitytext}>Quantity: </p>
                </div>
                <Button className={styles.quantitybut} variant='outline'>
                  <span>2</span>
                </Button>
                <Button className={styles.smallbut} variant='outline'>
                  <FontAwesomeIcon icon={faMinus} />
                </Button>
                <Button className={styles.plusbut} variant='outline'>
                  <FontAwesomeIcon icon={faPlus} />
                </Button>
              </Row>
              <Dropdown.Divider className={styles.divider} />
              <Row className={styles.row}>
                <h6>Quick overview: </h6>
              </Row>
              <Row className={styles.row}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Suscipit
                  tellus mauris a diam maecenas sed enim. Enim tortor at auctor urna
                  nunc id cursus metus. Lorem dolor sed viverra ipsum nunc. Egestas
                  maecenas pharetra convallis posuere morbi leo urna.{' '}
                </p>
              </Row>
              <Dropdown.Divider className={styles.divider} />
              <Row className={styles.row}>
                <p>
                  {' '}
                  <b>Avalabilty:</b> In Stock{' '}
                </p>
              </Row>
              <Row className={styles.row}>
                <p>
                  {' '}
                  <b>Category:</b> Furniture{' '}
                </p>
              </Row>
              <Dropdown.Divider className={styles.divider} />
              <Row className={styles.row}>
                <Button className={styles.fbbutton} variant='outline'>
                  <FontAwesomeIcon icon={faFacebookF}>Share</FontAwesomeIcon>
                  <span> Share</span>
                </Button>
                <Button className={styles.socialbuttons} variant='outline'>
                  <FontAwesomeIcon color='red' icon={faGooglePlusG}>
                    Google+
                  </FontAwesomeIcon>
                  <span> Google+</span>
                </Button>
                <Button className={styles.socialbuttons} variant='outline'>
                  <FontAwesomeIcon color='blue' icon={faTwitter}>
                    Tweet
                  </FontAwesomeIcon>
                  <span> Tweet</span>
                </Button>
                <Button className={styles.socialbuttons} variant='outline'>
                  <FontAwesomeIcon color='red' icon={faPinterestP}>
                    Pinterest
                  </FontAwesomeIcon>
                  <span> Pinterest</span>
                </Button>
                <Button className={styles.socialbuttons} variant='outline'>
                  <FontAwesomeIcon color='blue' icon={faLinkedinIn}>
                    LinkedIn
                  </FontAwesomeIcon>
                  <span> LinkedIn</span>
                </Button>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ShopBox;
