import styled from 'styled-components';

export const Container = styled.div`
  width: 100%; //ocupar sempre 100% da largura do local que estiver
  display: flex; //alinhamento dos meus elementos;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  margin-bottom: 8px;
  border-radius: 10px;

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent; //PQ EU JÁ APLIQUEI UM BACKGROUND NO CONTAINER
    border: 0; //para dar a senção que o icone faz parte do input 

    &:placeholder{
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > svg {
    margin-left: 16px;
  }
`;