import React from 'react';

import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';

import { Button } from '../../styles/global';

import * as S from './styled';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <S.PricingSection>
        <S.PricingWrapper>
          <S.PricingHeading>Our Services</S.PricingHeading>
          <S.PricingContainer>
            <S.PricingCard to='/sign-up'>
              <S.PricingCardInfo>
                <S.PricingCardIcon>
                  <GiRock />
                </S.PricingCardIcon>
                <S.PricingCardPlan>Starter Pack</S.PricingCardPlan>
                <S.PricingCardCost>$99.99</S.PricingCardCost>
                <S.PricingCardLength>per month</S.PricingCardLength>
                <S.PricingCardFeatures>
                  <S.PricingCardFeature>100 New Users</S.PricingCardFeature>
                  <S.PricingCardFeature>$10,000 Budget</S.PricingCardFeature>
                  <S.PricingCardFeature>
                    Retargeting analytics
                  </S.PricingCardFeature>
                </S.PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </S.PricingCardInfo>
            </S.PricingCard>
            <S.PricingCard to='/sign-up'>
              <S.PricingCardInfo>
                <S.PricingCardIcon>
                  <GiCrystalBars />
                </S.PricingCardIcon>
                <S.PricingCardPlan>Gold Rush</S.PricingCardPlan>
                <S.PricingCardCost>$299.99</S.PricingCardCost>
                <S.PricingCardLength>per month</S.PricingCardLength>
                <S.PricingCardFeatures>
                  <S.PricingCardFeature>1000 New Users</S.PricingCardFeature>
                  <S.PricingCardFeature>$50,000 Budget</S.PricingCardFeature>
                  <S.PricingCardFeature>
                    Lead Gen Analytics
                  </S.PricingCardFeature>
                </S.PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </S.PricingCardInfo>
            </S.PricingCard>
            <S.PricingCard to='/sign-up'>
              <S.PricingCardInfo>
                <S.PricingCardIcon>
                  <GiCutDiamond />
                </S.PricingCardIcon>
                <S.PricingCardPlan>Diamond Kings</S.PricingCardPlan>
                <S.PricingCardCost>$999.99</S.PricingCardCost>
                <S.PricingCardLength>per month</S.PricingCardLength>
                <S.PricingCardFeatures>
                  <S.PricingCardFeature>Unlimited Users</S.PricingCardFeature>
                  <S.PricingCardFeature>Unlimited Budget</S.PricingCardFeature>
                  <S.PricingCardFeature>24/7 Support</S.PricingCardFeature>
                </S.PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </S.PricingCardInfo>
            </S.PricingCard>
          </S.PricingContainer>
        </S.PricingWrapper>
      </S.PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
