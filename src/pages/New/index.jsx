import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

import { Container, Form } from './styles';

export function New() {
  return ( 
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href="/">voltar</a>
          </header>

          <Input placeholder="Título" />
          <Textarea placeholder="Observações" />

          <Section title="Links úteis">
            <NoteItem value="https://www.linkedin.com/in/leonardoliradev/"/>
            <NoteItem isNew placeholder="Novo link" />
          </Section>

          <Section title="Marcadores">
            <div className='tags'>
              <NoteItem value="React.js"/>
              <NoteItem isNew placeholder="Nova tag" />
            </div>
          </Section>
          
          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  );
}