import styled from "styled-components";

export const ContainerContact = styled.section`
  background-color: #242222;
  padding: 50px;
  text-align: center;
  color: white;
`;

export const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 30px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  padding: 30px;
  border-radius: 8px;
`;

export const Input = styled.input`
  padding: 15px;
  margin-bottom: 20px;
  font-size: 16px;
  background-color: transparent;
  color: white;
  border: none;
  border-bottom: 2px solid #4730d3;
  outline: none;
  transition: all 0.3s ease-in-out;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    border-bottom-color: #ffffff;
  }
`;

export const TextArea = styled.textarea`
  padding: 15px;
  margin-bottom: 20px;
  font-size: 16px;
  background-color: transparent;
  color: white;
  border: none;
  border-bottom: 2px solid #4730d3;
  outline: none;
  transition: all 0.3s ease-in-out;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    border-bottom-color: #ffffff;
  }
`;

export const Button = styled.button`
  background-color: #4730d3;
  color: white;
  padding: 15px 25px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #3723b0;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-bottom: 20px;
  margin-top: 0;
`;
