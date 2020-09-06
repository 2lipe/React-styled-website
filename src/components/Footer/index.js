import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';

import { Button } from '../../styles/global';

import * as S from './styled';

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterSubscription>
        <S.FooterSubHeading>
          Join ou exclusive membership to receive the latest news and trends
        </S.FooterSubHeading>
        <S.FooterSubText>You can unsubscribe at any time.</S.FooterSubText>
        <S.Form>
          <S.FormInput
            name='email'
            type='email'
            placeholder='email@example.com'
          />
          <Button fontBig>Subscribe</Button>
        </S.Form>
      </S.FooterSubscription>
      <S.FooterLinksContainer>
        <S.FooterLinksWrapper>
          <S.FooterLinksItems>
            <S.FooterLinkTitle>About Us</S.FooterLinkTitle>
            <S.FooterLink to='/sign-up'>How it works</S.FooterLink>
            <S.FooterLink to='/'>Testemonials</S.FooterLink>
            <S.FooterLink to='/'>Careers</S.FooterLink>
            <S.FooterLink to='/'>Investors</S.FooterLink>
            <S.FooterLink to='/'>Terms of Service</S.FooterLink>
          </S.FooterLinksItems>
          <S.FooterLinksItems>
            <S.FooterLinkTitle>Contact Us</S.FooterLinkTitle>
            <S.FooterLink to='/sign-up'>How it works</S.FooterLink>
            <S.FooterLink to='/'>Testemonials</S.FooterLink>
            <S.FooterLink to='/'>Careers</S.FooterLink>
            <S.FooterLink to='/'>Investors</S.FooterLink>
            <S.FooterLink to='/'>Terms of Service</S.FooterLink>
          </S.FooterLinksItems>
        </S.FooterLinksWrapper>
        <S.FooterLinksWrapper>
          <S.FooterLinksItems>
            <S.FooterLinkTitle>Videos</S.FooterLinkTitle>
            <S.FooterLink to='/sign-up'>How it works</S.FooterLink>
            <S.FooterLink to='/'>Testemonials</S.FooterLink>
            <S.FooterLink to='/'>Careers</S.FooterLink>
            <S.FooterLink to='/'>Investors</S.FooterLink>
            <S.FooterLink to='/'>Terms of Service</S.FooterLink>
          </S.FooterLinksItems>
          <S.FooterLinksItems>
            <S.FooterLinkTitle>Social Medias</S.FooterLinkTitle>
            <S.FooterLink to='/sign-up'>How it works</S.FooterLink>
            <S.FooterLink to='/'>Testemonials</S.FooterLink>
            <S.FooterLink to='/'>Careers</S.FooterLink>
            <S.FooterLink to='/'>Investors</S.FooterLink>
            <S.FooterLink to='/'>Terms of Service</S.FooterLink>
          </S.FooterLinksItems>
        </S.FooterLinksWrapper>
      </S.FooterLinksContainer>
      <S.SocialMedia>
        <S.SocialMediaWrap>
          <S.SocialLogo to='/'>
            <S.SocialIcon />
            ULTRA
          </S.SocialLogo>
          <S.WebsiteRights>ULTRA © 2020</S.WebsiteRights>
          <S.SocialIcons>
            <S.SocialIconLink href='/' target='_blank' arial-label='Facebook'>
              <FaFacebook />
            </S.SocialIconLink>
            <S.SocialIconLink href='/' target='_blank' arial-label='Instagram'>
              <FaInstagram />
            </S.SocialIconLink>
            <S.SocialIconLink href='/' target='_blank' arial-label='Youtube'>
              <FaYoutube />
            </S.SocialIconLink>
            <S.SocialIconLink href='/' target='_blank' arial-label='Twitter'>
              <FaTwitter />
            </S.SocialIconLink>
            <S.SocialIconLink href='/' target='_blank' arial-label='LinkedIn'>
              <FaLinkedin />
            </S.SocialIconLink>
          </S.SocialIcons>
        </S.SocialMediaWrap>
      </S.SocialMedia>
    </S.FooterContainer>
  );
};

export default Footer;
