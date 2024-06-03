import { createContext, useContext, useState, useEffect } from "react";
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

      localStorage.setItem("@notesforyou:user", JSON.stringify(user));
      localStorage.setItem("@notesforyou:token", token);

      api.defaults.headers.common['Authorization'] = `Bearer $(token)`;
      
      setData({ user, token});
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar.");
      }
    }
  }

  function signOut(){
    localStorage.removeItem("@notesforyou:token");
    localStorage.removeItem("@notesforyou:user");

    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem("@notesforyou:token");
    const user = localStorage.getItem("@notesforyou:user");

    if(token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer $(token)`;

      setData ({
        token,
        user: JSON.parse(user)
      });
    }
  }, []);

  // Prover o contexto para os filhos
  return (
    <AuthContext.Provider value={{ 
      signIn, 
      signOut,
      user: data.user,
    }}>
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
