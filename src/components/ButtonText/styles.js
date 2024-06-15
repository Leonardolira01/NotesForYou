import styled from 'styled-components';

export const Container = styled.button`
  background: none; //sem nenhum background;
  color: ${({ theme, $$isActive }) => $$isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100}; // Se $isActive estiver ativo é laranja, se não estiver vou aplicar uma outra cor que será GRAY.100  

  border: none; //sem nenhuma borda;
  font-size: 16px;
`;