//import Boton from "../UI/Boton";
import {
  HeroContainerStyled,
  HeroTextoContainerStyled,
  HeroImageContainerStyle,
} from "./HeroStyles";

function Hero() {
  return (
    <HeroContainerStyled>
      <HeroTextoContainerStyled>
        <h1>La mejor elección para tu auto</h1>
        <h2>Alan Alarmas.</h2>
        <p>Instalacion y arreglo al mejor precio.</p>
      </HeroTextoContainerStyled>
      <HeroImageContainerStyle>
        <img
          src="https://i.pinimg.com/564x/99/5c/34/995c3441f3680c4ebe4e8f7aa0ed14ab.jpg"
          alt="AudioAlarmas"
        />
      </HeroImageContainerStyle>
    </HeroContainerStyled>
  );
}

export default Hero;
