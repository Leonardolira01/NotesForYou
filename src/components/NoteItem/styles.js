import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900}; //  se for novo, então eu quero que o background seja transparente. Caso contrário, daí eu posso pegar do tema, colors, o background de 900, que é aquele tom mais escuro.

  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none'}; //Então se for um item novo, eu quero uma borda de um pixels. Eu quero que o estilo dela seja o dashed, e a cor, para aplicar a cor, eu vou abrir aqui para eu colocar uma variável. Pegando o de colors, o nosso gray de 300. Caso contrário, eu simplesmente vou setar aqui um none, ou seja, não tem borda.

  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.RED};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
  
  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;
    
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

`;