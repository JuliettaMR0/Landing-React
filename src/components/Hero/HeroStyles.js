import styled from "styled-components";

export const HeroContainerStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  gap: 20px;

  h1 {
    margin-bottom: 2rem;
  }

  @media (max-width: 968px) {
    flex-direction: column;
  }
`;

export const HeroTextoContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;

  h1 {
    font-size: 4rem;
    margin: 10px 0;
  }
  h2 {
    font-size: 2.7rem;
    margin: 10px 0;
    color: #faba32;
  }

  p {
    font-size: 1.4rem;
  }

  @media (max-width: 968px) {
    width: 80%;
    align-items: center;
    text-align: center;
  }
`;

export const HeroImageContainerStyle = styled.div`
  width: 40%;
  img {
    width: 100%;
    padding-top: 25px;
    padding-bottom: 15px;
  }

  @media (max-width: 960px) {
    display: none;
  }
`;
