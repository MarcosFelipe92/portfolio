import styled from "styled-components";

export const HeaderSectionContainer = styled.div`
  min-height: 80vh;
  min-width: 100vh;
  background-color: #242222;
`;

export const DescriptionContainer = styled.div`
  height: auto;
  margin-top: 15px;

  @media (max-width: 1024px) {
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    margin-top: 15px;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
  }
`;

export const ParagraphDescription = styled.p`
  color: white;
  font-size: 20px;

  @media (max-width: 1024px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
