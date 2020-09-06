import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Button } from '../../styles/global';

import * as S from './styled';

const Hero = ({
  primary,
  lightBg,
  imgStart,
  lighTopLine,
  lightTextDesc,
  buttonLabel,
  description,
  headline,
  lightText,
  topLine,
  start,
  img,
  alt,
}) => {
  return (
    <>
      <S.HeroSection lightBg={lightBg}>
        <Container>
          <S.InfoRow imgStart={imgStart}>
            <S.InfoColumn>
              <S.TextWrapper>
                <S.TopLine lightTopLine={lighTopLine}>{topLine}</S.TopLine>
                <S.Heading lightText={lightText}>{headline}</S.Heading>
                <S.Subtitle lightTextDesc={lightTextDesc}>
                  {description}
                </S.Subtitle>
                <Link to='/sign-up'>
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </S.TextWrapper>
            </S.InfoColumn>
            <S.InfoColumn>
              <S.ImgWrapper start={start}>
                <S.Img src={img} alt={alt} />
              </S.ImgWrapper>
            </S.InfoColumn>
          </S.InfoRow>
        </Container>
      </S.HeroSection>
    </>
  );
};

export default Hero;
