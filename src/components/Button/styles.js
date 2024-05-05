import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  height: 56px; //altura do botão
  border: 0; // borda
  padding: 0 16px; // espaço interno dentro de um elemento
  margin-top: 16px; // espaço acima
  border-radius: 10px; // cantos arredondados
  font-weight: 500; // tamanho médio do texto

  &:disabled {
    opacity: 0.5;
  }
`;