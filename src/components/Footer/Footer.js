import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
     <LinkTitle> Call</LinkTitle> 
     <LinkItem href="tel:079 274 5115"> +2779 274 5115</LinkItem>
      </LinkColumn>
      <LinkColumn>
     <LinkTitle> Email</LinkTitle> 
     <LinkItem href="mailto:khayasambo@gmail.com">khayasambo@gmail.com </LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan></Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/KhayaSambo">
        <AiFillGithub size ="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/khayasambo/">
        <AiFillLinkedin size ="3rem"/>
      </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
