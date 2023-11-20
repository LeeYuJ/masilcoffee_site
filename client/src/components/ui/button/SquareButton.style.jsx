import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 14px;

  &.Button_grey {
    background-color: white;
    color: #8e0e28;
    font-weight: 900;
  }
  &.Button_red {
    background-color: #8e0e28;
    color: white;
    font-weight: 900;
  }
  &:not(:first-child) {
    margin-left: 1rem;
  }
`;
