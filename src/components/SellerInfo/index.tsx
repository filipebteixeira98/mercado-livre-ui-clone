import React from 'react';

import {
  Container,
  Title,
  LocationCard,
  LocationIcon,
  ReputationCard,
  ReputationThermometer,
  ReputationRow,
  SupportIcon,
  ClockIcon,
  More,
} from './styles';

const SellerInfo: React.FC = () => {
  return (
    <Container>
      <Title>Information about seller</Title>

      <LocationCard>
        <LocationIcon />

        <div>
          <p>Localization</p>
          <strong>Salt Lake, UH</strong>
        </div>
      </LocationCard>

      <ReputationCard>
        <ReputationThermometer>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li className="active"></li>
        </ReputationThermometer>

        <ReputationRow>
          <div>
            <strong>862</strong>
            <span>sells on last 2 months</span>
          </div>

          <div>
            <strong><SupportIcon /></strong>
            <span>afford good service</span>
          </div>

          <div>
            <strong><ClockIcon /></strong>
            <span>sells on last 2 months</span>
          </div>
        </ReputationRow>
      </ReputationCard>

      <More href="#details">See more details about seller</More>
    </Container>
  );
};

export default SellerInfo;
