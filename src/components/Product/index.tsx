import React from 'react';

import SellerInfo from '../SellerInfo';
import ProductAction from '../ProductAction';

import { Container, Row, Panel, Column, Gallery, Section, Description } from './styles';

import tshirtImage from '../../assets/tshirt.png';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#share">Share</a>
        <a href="#sell">Sell an equal</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img src={tshirtImage} alt="T-shirt" />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />

          <SellerInfo />

          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Warranty</h4>

    <div>
      <span>
        <p className="title">Security guarantee in your purchase</p>
        <p className="description">Receive product you are waiting for or refund your money</p>
      </span>
      <span>
        <p className="title">Seller guarantee</p>
        <p className="description">No warranty</p>
      </span>
    </div>

    <a href="#learn">Learn more about the warranty</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Description</h2>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, leo quis pharetra mollis, nisl odio vulputate ligula, sit amet rutrum nisi risus non sapien. Ut efficitur velit eget magna scelerisque, dignissim ornare tortor varius. Nullam rhoncus risus non tortor vehicula, ac molestie quam aliquam. Ut commodo dolor vitae ultricies feugiat. Nam nisl leo, elementum faucibus venenatis eget, consequat et metus. Phasellus lacinia pellentesque felis. Curabitur non erat sed felis eleifend ultrices a sagittis tortor. Quisque congue commodo eros, volutpat efficitur metus consequat eget.
      <br />
      <br />
      Elementum faucibus: <br />
      - 1x Lorem ipsum <br />
      - 2x Dolor sit amet <br />
      - 5x Pharetra mollis <br />
      - 3x Nam nisl <br />
      - 4x Curabitur non erat <br />
      <br />
      Praesent magna magna, fermentum sit amet gravida eget, sodales sit amet justo. Mauris ultrices placerat euismod. Phasellus tincidunt bibendum purus convallis pellentesque. Nam nisl dolor, lacinia nec lorem quis, cursus sollicitudin eros. Phasellus luctus commodo nulla sit amet convallis. Duis sodales metus nec varius vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec lacinia justo id mauris commodo scelerisque.
    </p>
  </Description>
);

export default Product;
