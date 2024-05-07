import styled from 'styled-components';

export const Container = styled.span`
  font-size: 12px;
  padding: 5px 14px; //espaçamento interno;
  border-radius: 5px; //arredondamento;
  margin-right: 6px; 
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
`;