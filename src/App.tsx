import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { createContext, useContext, useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Chat from './pages/Chat';
import Appointments from './pages/Appointments';
import TattooArtist from './pages/TattooArtist';
import TattooArtistProfile from './pages/TattooArtistProfile';
import Header from './components/Header';
import './index.css';

// Contexto de autenticação
const AuthContext = createContext(null);

// Provedor de autenticação
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Função de login
  const login = (email, password) => {
    // Aqui você poderia adicionar a lógica de login (ex: autenticação com API)
    setUser({ email });
  };

  // Função de registro
  const register = (email, password) => {
    // Aqui você poderia adicionar a lógica de registro (ex: registrar usuário com API)
    setUser({ email });
  };

  // Função de logout
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para consumir o contexto de autenticação
const useAuth = () => useContext(AuthContext);

// Componente para rotas privadas
const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />; // Redireciona para o login se não estiver autenticado
};

export { useAuth };

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          {/* Rotas públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Rotas privadas (necessitam de autenticação) */}
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="/chat" element={<PrivateRoute><Chat /></PrivateRoute>} />
          <Route path="/appointments" element={<PrivateRoute><Appointments /></PrivateRoute>} />

          {/* Rotas públicas adicionais */}
          <Route path="/tattoo-artists" element={<TattooArtist />} />
          <Route path="/tattoo-artist/:id" element={<TattooArtistProfile />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
