import {
  LinkContainerStyled,
  LinksContainerStyled,
  NavbarContainerStyled,
  UsarNavStyled,
  UserContainerStyled,
  SpanStyled,
  MenuContainerStyled,
  HomeContainerStyled,
} from "./NavbarStyles";

import { TiThMenu } from "react-icons/ti";
import { FaAngleDoubleRight } from "react-icons/fa";

function Navbar() {
  return (
    <div>
      <NavbarContainerStyled>
        <div>
          <a href="#">
            <img src="/public/img-logo/Alan alarmas.png" alt="logo" />
          </a>
        </div>
        <LinksContainerStyled>
          <HomeContainerStyled>
            <a href="#">
              <LinkContainerStyled>
                <FaAngleDoubleRight />
              </LinkContainerStyled>
              Inicio
            </a>
            <a href="#">
              <LinkContainerStyled>
                <FaAngleDoubleRight />
              </LinkContainerStyled>
              Productos
            </a>
            <a href="#">
              <LinkContainerStyled>
                <FaAngleDoubleRight />
              </LinkContainerStyled>
              Contacto
            </a>
          </HomeContainerStyled>
          <MenuContainerStyled>
            <TiThMenu />
          </MenuContainerStyled>
        </LinksContainerStyled>
      </NavbarContainerStyled>
    </div>
  );
}

export default Navbar;
