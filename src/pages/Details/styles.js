import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 64px 0;
  }
//Criei o main para pegar toda a largura;
//vou usar o main para acessa o grid
// E aqui eu vou ativar um overflow em y de scroll, quando o conteúdo não caber mais na vertical, eu quero que apareça uma barra para scrollar.
`

export const Links = styled.ul`
  list-style: none;

  > li {
    margin-top: 12px;

    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`

export const Content = styled.div`
  max-width: 550px;
  margin: 0 auto;

  display: flex;
  flex-direction: column; // Para ficar alinhado um embaixo um do outro;

  > button:first-child {
    align-self: end; //um alinhamento no primeiro filho para o final (direita)
  }    

  > h1 {
    font-size: 36px;
    font-weight: 500;
    padding-top: 64px;
  }

  > p {
    font-size: 16px;
    margin-top: 16px;
    text-align: justify; //Gosto de deixar sempre justificado
  }
//Criei o content para definir uma largura máxima, para o conteudo ficar bem no centro da tela
`