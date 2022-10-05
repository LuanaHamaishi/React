import styled from "styled-components";

export const Button = styled.button`
  background-color: #202070;
  border: none;
  border-radius: 20px;
  padding: 10px;
  color: #fff;
  margin: 10px;
  font-size: 20px;
  transition: 200ms;
  cursor: pointer;
  :hover {
    background-color: #540841;
    color: #adeded;
  }
`;

export const StyledLabel = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #000;
`;
