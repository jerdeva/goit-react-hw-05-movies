import styled from 'styled-components';

export const Btn = styled.button`
  background-color: #0a0a23;
  color: #cca8e9;
  border: none;
  font-weight: 800;
  border-radius: 10px;
  box-shadow: 0px 0px 2px 2px rgb(0, 0, 0);
  margin-right: 12px;
  margin-bottom: 4px;
  padding: 12px;
  &:hover,
  &:focus {
    color: palevioletred;
  }
  &:active {
    color: red;
  }
`;
