import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavBar"; // Importa tu Navbar
import Home from "./components/pages/Home"; // Componentes para las diferentes páginas
import Peticiones from "./components/pages/Peticiones";
import Reparaciones from "./components/pages/Reparaciones";
import Administracion from "./components/pages/Administracion";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Perfil from "./components/pages/Perfil";

const App = () => {
  const isLoggedIn = true; // Cambia esto según tu lógica de autenticación
  const isAdmin = true; // Cambia esto según tu lógica de rol de administrador
  const userName = "Pepito";

  return (
    <Router>
      <NavbarComponent isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              isLoggedIn={isLoggedIn}
              isAdmin={isAdmin}
              userName={userName}
            />
          }
        />
        <Route path="/peticiones" element={<Peticiones />} />
        <Route path="/reparaciones" element={<Reparaciones />} />
        <Route path="/administracion" element={<Administracion />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </Router>
  );
};

export default App;
