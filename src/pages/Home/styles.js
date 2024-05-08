import styled from 'styled-components'; 

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px auto; //250px Será o menu em formato de coluna e o restante automatico;
  grid-template-rows: 105px 128px auto 64px; //vou ter 4 linhas - 1 cabeçalho / 2 Search / 3 conteúdo / 4 tamanho do botão;
  grid-template-areas: 
    "brand header"
    "menu search"
    "menu content"
    "newnote content";
    //como eu vou distribuir as areas do meu grid;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Brand = styled.div`
  grid-area: brand;
  background: lime;
`;

export const Menu = styled.ul`
  grid-area: menu;
  background: green;
`;

export const Search = styled.div`
  grid-area: search;
  background: violet;
`;

export const Content = styled.div`
    grid-area: content;
    background: blue;
`;

export const NewNote = styled.button`
    grid-area: newnote;
    background: yellow;
`;