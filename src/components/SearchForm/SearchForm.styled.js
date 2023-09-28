import styled from 'styled-components';

export const MainTitle = styled.h2`
  font-size: 20px;
  color: #265301;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0 16px;
  flex-wrap: wrap;

  input {
    font-size: 16px;
    padding: 8px 32px 8px 8px;
    width: 250px;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #064e8a;
    outline: none;
  }
`;
