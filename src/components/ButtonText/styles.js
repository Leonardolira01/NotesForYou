import styled from 'styled-components';

export const Container = styled.button`
  background: none; //sem nenhum background;
  color: ${({ theme }) => theme.COLORS.ORANGE};

  border: none; //sem nenhuma borda;
  font-size: 16px;
`;