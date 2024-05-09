import { RiShutDownLine} from 'react-icons/ri'; //https://react-icons.github.io/react-icons/
import { Container, Profile, Logout } from "./styles";

export function Header(){
  return(
    <Container>
      <Profile to="profile">
        <img 
          src="https://github.com/leonardolira01.png" 
          alt="Foto do usuário" 
        />

        <div>
          <span>Bem vindo,</span>
          <strong>Leonardo Lira</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>

    </Container>
  );
}