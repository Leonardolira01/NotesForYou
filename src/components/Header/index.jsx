import { RiShutDownLine} from 'react-icons/ri'; //https://react-icons.github.io/react-icons/
import { useAuth } from '../../hooks/auth';

import { Container, Profile, Logout } from "./styles";

export function Header(){
  const { signOut } = useAuth();

  return(
    <Container>
      <Profile to="profile">
        <img 
          src="https://github.com/leonardolira01.png" 
          alt="Foto do usuário" 
        />

        <div>
          <span>Boas-vindas,</span>
          <strong>Leonardo Lira</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>

    </Container>
  );
}