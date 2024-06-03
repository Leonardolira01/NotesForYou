import { createContext, useContext, useState } from "react";
import { api } from '../services/api';

// Criação do contexto de autenticação
const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  // Função de login
  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      api.defaults.headers.authorization = `Bearer $(token)`;
      setData({ user, token})

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar.");
      }
    }
  }

  // Prover o contexto para os filhos
  return (
    <AuthContext.Provider value={{ signIn, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook para usar o contexto de autenticação
function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

// Exportações
export { AuthProvider, useAuth };
