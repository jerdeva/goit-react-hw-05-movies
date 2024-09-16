import styled from 'styled-components';

export const MovieCastTitle = styled.h1`
  color: darkblue;
  margin-left: 36px;
`;

export const ListOfActors = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: 0;
  gap: 28px 28px;
`;

export const ItemOfActors = styled.li`
  width: 200px;
`;

export const ImageWrapper = styled.img`
  border: black 1px solid;
`;

export const ActorName = styled.p`
  font-size: 18px;
  color: #680747;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 32px;
`;

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
`;

export const CastItemEmpty = styled.div`
  display: flex;
  justify-content: center;
  font-size: 32px;
  color: #064e8a;
  margin: 40px;
`;
