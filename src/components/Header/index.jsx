import { useNavigate } from "react-router-dom";
import { RiShutDownLine } from "react-icons/ri";
import { useAuth } from '../../hooks/auth'
import { Container, Profile, Logout } from "./styles";
import { api } from '../../services/api';

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Header(){
  const { signOut, user } = useAuth();
  const navigation= useNavigate();

  function handleSignOut(){
    navigation("/");
    signOut();
  }

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return(
    <Container>
      <Profile to="profile">
        <img 
          src={avatarURL} 
          alt={user.name} 
        />

        <div>
          <span>Boas-vindas,</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={handleSignOut}>
        <RiShutDownLine />
      </Logout>

    </Container>
  );
}