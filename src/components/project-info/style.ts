import styled from "styled-components";

export const WrapperProjectInfo = styled.div`
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
