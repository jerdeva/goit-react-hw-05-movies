import styled from 'styled-components';

export const Btn = styled.button`
  background-color: #7fb5e1;
  color: #064e8a;
  border: none;
  font-weight: 900;
  border-radius: 4px;
  box-shadow: 0px 0px 2px 2px #7fb5e1;
  margin-right: 12px;
  margin-bottom: 4px;
  padding: 12px 24px;
  &:hover,
  &:focus {
    color: white;
    background-color: #064e8a;
  }
  &:active {
    color: white;
    background-color: #064e8a;
  }
`;
