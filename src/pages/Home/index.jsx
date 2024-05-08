import { FiPlus, FiSearch } from 'react-icons/fi'; //add o icone do botão newnote
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'; //Container=vai envolver toda a aplicação, a página / Brand=Parte do logo/ Menu= o que vai ficar fixo / Search=busca / Content= os conteúdos/ NewNote = botão para uma nova nota; 

import { Note } from '../../components/Note';
import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';

export function Home(){
  return(
    <Container>
      <Brand>
        <h1>Notes For You</h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText title="Todos" $isactive /></li>
        <li><ButtonText title="React"/></li>
        <li><ButtonText title="Nodejs"/></li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note data={{
            title: 'React',
            tags: [
              { id: '1', name: 'React.js' },
              { id: '2', name: 'Styled-Components' }
            ]
          }}
          />

        </Section>
      </Content>

      <NewNote>
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>

  );
}