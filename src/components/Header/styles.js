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

`;

export const Profile = styled.div`
  display: flex; //Para garantir que a imagem e o texto ficará centralizada,
  align-items: center;

  > img {
    width: 56px; // Largura
    height: 56px; // Altura 
    border-radius: 50%; // Deixar a imagem redonda
  } // Esse sinal de maior é pra garantir que eu vou estilizar a imagem que existe dentro do meu componente de profile. Isso me garante a não mexer em outras imagens de outros contextos.

  > div {
    display: flex; // alinhamento
    flex-direction: column; // texto um embaixo do outro
    margin-left: 16px;
    line-height: 24px;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  };
`;