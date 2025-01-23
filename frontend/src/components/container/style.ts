import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5% 10px 10px 10px;
  width: 80%;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 5% 5px;
  }
`;
