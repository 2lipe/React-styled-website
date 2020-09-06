import React, { useState, useEffect } from 'react';

import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import { Button } from '../../styles/global';
import * as S from './styled';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  function handleClick() {
    return setClick(!click);
  }

  function showButton() {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  function closeMobileMenu() {
    return setClick(false);
  }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <S.Nav>
          <S.NavbarContainer>
            <S.NavLogo to='/' onClick={closeMobileMenu}>
              <S.NavIcon />
              ULTRA
            </S.NavLogo>
            <S.MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </S.MobileIcon>
            <S.NavMenu onClick={handleClick} click={click}>
              <S.NavItem>
                <S.NavLinks to='/'>Home</S.NavLinks>
              </S.NavItem>

              <S.NavItem>
                <S.NavLinks to='/services'>Services</S.NavLinks>
              </S.NavItem>

              <S.NavItem>
                <S.NavLinks to='products'>Products</S.NavLinks>
              </S.NavItem>
              <S.NavItemBtn>
                {button ? (
                  <S.NavBtnLink to='/sign-up'>
                    <Button primary>SIGN UP</Button>
                  </S.NavBtnLink>
                ) : (
                  <S.NavBtnLink to='/sign-up'>
                    <Button fontBig primary>
                      SIGN UP
                    </Button>
                  </S.NavBtnLink>
                )}
              </S.NavItemBtn>
            </S.NavMenu>
          </S.NavbarContainer>
        </S.Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
