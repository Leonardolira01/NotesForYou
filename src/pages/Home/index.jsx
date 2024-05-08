import { Container, Brand, Menu, Search, Content, NewNote } from './styles'; //Container=vai envolver toda a aplicação, a página / Brand=Parte do logo/ Menu= o que vai ficar fixo / Search=busca / Content= os conteúdos/ NewNote = botão para uma nova nota; 

import { Header } from '../../components/Header';

export function Home(){
  return(
    <Container>
      <Brand>
        <h1>Notes For You</h1>
      </Brand>

      <Header />

      <Menu>

      </Menu>

      <Search>

      </Search>

      <Content>

      </Content>

      <NewNote>

      </NewNote>
    </Container>

  );
}