import styled from "styled-components";

export const CategoriasWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  margin: 0 15px;
  margin-top: 40px;

  @media (max-width: 768px) {
    padding-top: 25px;
    text-align: center;
  }
`;

export const CategoriasContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 50px;
  user-select: none;
`;

export const CardCategoria = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 170px;
  padding: 1rem 0.5rem;
  background-color: #ffb238;
  border-radius: 40px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  h2 {
    font-size: 15px;
    font-weight: 100px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
  :first-child {
    img {
      padding-top: 7px;
      padding-bottom: 7px;
    }
  }

  &:hover {
    background-color: #171430;
    transform: scale(1.1);

    h2 {
      color: #ffb238;
    }
  }
`;

export const EstiloH2Titulo = styled.div`
  color: white;
  font-size: 24px;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;
