import styled from "styled-components";
import { FaFacebook, FaTwitter } from "react-icons/fa";

export const FooterContainer = styled.footer`
  background-color: #171430;
  color: #fff;
  padding: 10px 0;
  text-align: center;

  bottom: 0;
  width: 100%;
`;
export const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
`;

export const SocialIcons = styled.div`
  margin-top: 10px;
`;

export const SocialIcon = styled.a`
  color: #fff;
  font-size: 20px;
  margin: 0 10px;
  text-decoration: none;

  &:hover {
    color: #3b5998;
  }
`;

// Estilos de  utilizando react-icons
export const FacebookIcon = styled(FaFacebook)``;

export const TwitterIcon = styled(FaTwitter)``;
