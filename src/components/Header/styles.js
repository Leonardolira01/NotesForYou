import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header; //assim o cabeçalho fica fixo;

  height: 105px; // altura do cabeçalho;
  width: 100%; // largula para ocupar 100% do que estiver na tela;

  border-bottom-width: 1px; // uma linha em baixo do cabeçalho;
  border-bottom-style: solid; // um linha sólida
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between; // na horizontal, cada elemento fique em uma extremidade;

  padding: 0 80px;

  background: lime;
`;
