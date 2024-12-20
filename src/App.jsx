import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import UserPage from "./pages/UserPage/UserPage"; // Importando a nova página

function App() {
  const location = useLocation();

  return (
    <div>
      {/* Renderiza o Header apenas para rotas diferentes de "/user", "/cadastro", "/login" */}
      {(location.pathname !== "/user" &&
        location.pathname !== "/cadastro" &&
        location.pathname !== "/login" && location.pathname !== "/reset-password") && <Header />}

      {/* Definindo as rotas do aplicativo */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/user" element={<UserPage />} /> {/* Rota para UserPage */}
      </Routes>
    </div>
  );
}

export default App;
