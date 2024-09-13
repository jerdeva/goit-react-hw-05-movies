import styled from 'styled-components';

export const Item = styled.li`
  position: relative;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  min-width: 200px; /* Минимальная ширина каждого элемента (постера) */
  scroll-snap-align: start;
  padding: 12px;
  margin-bottom: 24px;

  background-color: rgba(250, 250, 200, 0.2);
`;

export const Container = styled.div`
max-width: 1200px;
`

export const List = styled.ul`
  display: flex;
  overflow-x: auto;
  list-style: none;
  padding: 0;
  margin: 0;
  scroll-snap-type: x mandatory; /* Чтобы элементы фиксировались при прокрутке */
  gap: 10px; /* Расстояние между элементами */
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1; /* Цвет фона скроллбара */
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888; /* Цвет ползунка */
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555; /* Цвет ползунка при наведении */
  }

  /* Для Firefox */
  scrollbar-width: thin; /* Толщина скроллбара */
  scrollbar-color: #8888 #f1f1f1; /* Цвет ползунка и фона */
`;

export const Title = styled.p`
  color: #064e8a;
  font-size: 16px;
  font-weight: 700;
`;


export const VoteAverage = styled.p`
  position: absolute;
  top: 2px;
  left: 5px;
  border-radius: 360px;
  border: 1px solid #e66465;
  background-color: rgba(0, 0, 0, 0.7);
  color: rgba(230, 100, 101, 1);
  font-weight: 700;
  padding: 12px;
  font-size: 12px;
  z-index: 1;
`;
