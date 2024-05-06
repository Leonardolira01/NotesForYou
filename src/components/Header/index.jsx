import { Container, Profile } from "./styles";

export function Header(){
  return(
    <Container>
      <Profile>
        <img 
          src="https://github.com/leonardolira01.png" 
          alt="Foto do usuário" 
        />

        <div>
          <span>Bem vindo,</span>
          <strong>Leonardo Lira</strong>
        </div>
      </Profile>

    </Container>
  );
}