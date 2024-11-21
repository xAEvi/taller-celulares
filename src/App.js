import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavBar";
import Home from "./components/pages/Home";
import Peticiones from "./components/pages/Peticiones";
import Reparaciones from "./components/pages/Reparaciones";
import Administracion from "./components/pages/Administracion";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Perfil from "./components/pages/Perfil";
import Respuestos from "./components/pages/Respuestos";
import Tecnicos from "./components/pages/Tecnicos";
import Equipos from "./components/pages/Equipos";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("isAdmin") === "true"
  );
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || ""
  );

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
    localStorage.setItem("isAdmin", isAdmin);
    localStorage.setItem("userName", userName);
  }, [isLoggedIn, isAdmin, userName]);

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    // Verificar si el usuario es admin
    // Usar el nombre del usuario
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    setUserName("");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("userName");
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const modoAdmin = () => {
    setIsAdmin(!isAdmin);
  };

  return (
    <Router>
      <NavbarComponent
        isLoggedIn={isLoggedIn}
        isAdmin={isAdmin}
        handleLogout={handleLogout}
        handleLogin={handleLogin}
        toggleModal={toggleModal}
        modalOpen={modalOpen}
      />
      {/* Botón Admin Mode */}
      <button className="btn btn-warning" onClick={modoAdmin}>
        {isAdmin ? "Admin Mode On" : "Admin Mode Off"}
      </button>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              isLoggedIn={isLoggedIn}
              isAdmin={isAdmin}
              userName={userName}
              toggleModal={toggleModal}
              modalOpen={modalOpen}
            />
          }
        />
        <Route
          path="/peticiones"
          element={<Peticiones isLoggedIn={isLoggedIn} isAdmin={isAdmin} />}
        />
        <Route
          path="/reparaciones"
          element={<Reparaciones isLoggedIn={isLoggedIn} isAdmin={isAdmin} />}
        />
        <Route
          path="/administracion"
          element={<Administracion isAdmin={isAdmin} />}
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/perfil"
          element={<Perfil isLoggedIn={isLoggedIn} isAdmin={isAdmin} />}
        />
        <Route path="/repuestos" element={<Respuestos isAdmin={isAdmin} />} />
        <Route path="/tecnicos" element={<Tecnicos isAdmin={isAdmin} />} />
        <Route path="/equipos" element={<Equipos isAdmin={isAdmin} />} />
      </Routes>
    </Router>
  );
};

export default App;
