import styled from "styled-components";
export const ContainerTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;

  @media (min-width: 769px) {
    flex-direction: row;
    align-items: center;
    column-gap: 20px;
  }
`;

export const PhotoWrapper = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 100%;
  overflow: hidden;
  background-color: #4730d3;
  flex-shrink: 0;
  aspect-ratio: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 1024px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;

export const TitleWrapper = styled.div`
  background: linear-gradient(to bottom, #242222 50%, #4730d3 100%);
  padding: 20px 20px 60px;
  display: inline-block;
  border-radius: 20px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 15px 15px 40px;
  }
`;

export const TitleTop = styled.h1`
  color: white;
  font-size: 60px;
  margin: 0;

  @media (max-width: 1200px) {
    font-size: 50px;
  }

  @media (max-width: 1024px) {
    font-size: 40px;
  }

  @media (max-width: 768px) {
    font-size: 30px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;
