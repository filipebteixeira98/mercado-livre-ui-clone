import React from 'react';

import {
  Container,
  Condition,
  Row,
  HeartIcon,
  DispatchTag,
  PriceCard,
  PriceRow,
  InstallmentsInfo,
  StockStatus,
  MethodCard,
  CheckIcon,
  Actions,
  Button,
  Benefits,
  ShieldIcon,
} from './styles';

const ProductAction: React.FC = () => {
  return (
    <Container>
      <Condition>new | 328 sold</Condition>

      <Row>
        <h1>T-shirt white</h1>
        <HeartIcon />
      </Row>

      <DispatchTag>sending normally</DispatchTag>

      <PriceCard>
        <PriceRow>
          <span className="symbol">$</span>
          <span className="fraction">56</span>
          <span className="cents">99</span>
        </PriceRow>

        <InstallmentsInfo>3x on credit card</InstallmentsInfo>
      </PriceCard>

      <StockStatus>available stock</StockStatus>

      <MethodCard>
        <CheckIcon />

        <div>
          <span className="title">free shipping</span>
          <span className="details">free market benefit</span>
          <a href="#more" className="more">View another options</a>
        </div>
      </MethodCard>

      <Actions>
        <Button solid>Buy now</Button>
        <Button>Add to my cart</Button>
      </Actions>

      <Benefits>
        <li>
          <ShieldIcon />
          <p>guaranteed purchase, receive what you paid for or refund your money</p>
        </li>
      </Benefits>
    </Container>
  );
};

export default ProductAction;
