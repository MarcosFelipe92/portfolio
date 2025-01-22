import styled from "styled-components";

export const WrapperProjectSection = styled.div`
  min-height: 100vh;
  background-color: #4730d3;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const TitleProject = styled.h1`
  color: white;
  font-size: 60px;
  text-align: center;
  margin-bottom: 40px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 1200px) {
    font-size: 50px;
  }

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: linear-gradient(
    180deg,
    rgba(36, 34, 34, 0.9),
    rgba(36, 34, 34, 0.7)
  );
  margin-bottom: 40px;
  padding: 20px;
  border-radius: 16px;
  width: 100%;
  max-width: 1200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProjectImage = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain; /* Garante que a imagem será ajustada para caber inteiramente */
    max-width: 100%; /* Limita a largura máxima */
    max-height: 250px; /* Altura máxima que mantém a imagem dentro de um limite */
    border-radius: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;

export const ProjectInfo = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;

  h3 {
    font-size: 28px;
    margin-bottom: 10px;
    color: white;
  }

  p {
    font-size: 16px;
    color: #ccc;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      font-size: 16px;
      color: #ccc;
      margin-bottom: 5px;

      &:before {
        content: "•";
        color: #007bff;
        margin-right: 8px;
      }
    }
  }
`;
