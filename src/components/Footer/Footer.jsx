import React from "react";
import {
  FooterContainer,
  FooterText,
  SocialIcons,
  SocialIcon,
} from "./FooterStyles";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        © 2024 Alan Alarmas | Todos los derechos reservados
      </FooterText>
      <SocialIcons>
        <SocialIcon href="https://www.facebook.com/" target="_blank">
          <FaFacebook />
        </SocialIcon>
        <SocialIcon href="https://twitter.com/" target="_blank">
          <FaTwitter />
        </SocialIcon>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;
