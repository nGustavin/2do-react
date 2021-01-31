import React from 'react';
import background from '../../assets/landing/background.svg'
import logo from '../../assets/landing/logo.svg'

import { Container, SideContent, MenuBar, TitleText, DescriptionText, ButtonContainer } from './styles';

const Landing: React.FC = () => {
  return (
      <Container>
          <SideContent>
              <MenuBar>
                  <img src={logo} alt=""/>
                  <a href="#">About</a>
                  <a href="#">Team</a>
                  <a href="#">Colaborate</a>
              </MenuBar>
              <TitleText>
                  <h1>All your tasks</h1>
                  <h2>in one place</h2>
              </TitleText>
              <DescriptionText>
                  <h4>Work, bussines or studies.</h4>
                  <h4>For everything you need</h4>
              </DescriptionText>
              <ButtonContainer>
                <button type="submit">Join us</button>
              </ButtonContainer>
          </SideContent>
          <img src={background} alt="landing background"/>
      </Container>
      
  );
}

export default Landing;