import styled from "styled-components";

export const CardProductosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 0.5fr);
  gap: 30px;
  user-select: none;
  width: 60%;
  margin: 0 auto;
  padding: 50px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }
`;

export const CardProductoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 1.5rem;
  background-color: #f0f0f0;
  border-radius: 5px;
  cursor: pointer;
  width: 150px;
  height: 200px;

  h2 {
    font-size: 18px;
    font-weight: 600;
    color: #333;
  }

  img {
    width: 100%;
  }
`;
