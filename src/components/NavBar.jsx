import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

const NavbarComponent = ({
  isLoggedIn,
  isAdmin,
  handleLogin,
  handleLogout,
  toggleModal,
}) => {
  return (
    <Navbar color="light" light expand="md" className="px-4">
      <NavbarBrand href="/">Taller de Celulares</NavbarBrand>
      <Nav className="me-auto" navbar>
        <NavItem>
          <NavLink href="/peticiones">Peticiones</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/reparaciones">Reparaciones</NavLink>
        </NavItem>
        {isLoggedIn && isAdmin && (
          <NavItem>
            <NavLink href="/administracion">Administración</NavLink>
          </NavItem>
        )}
      </Nav>
      <Nav navbar>
        {isLoggedIn ? (
          <>
            <NavItem>
              <NavLink href="/perfil">Perfil</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#"
                onClick={handleLogout}
                className="bg-danger text-white px-4 py-2 rounded"
              >
                Cerrar Sesión
              </NavLink>
            </NavItem>
          </>
        ) : (
          <>
            <NavItem>
              <NavLink href="#" onClick={handleLogin}>
                Iniciar Sesión
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#"
                onClick={toggleModal}
                className="bg-success text-white px-4 py-2 rounded"
              >
                Crear Cuenta
              </NavLink>
            </NavItem>
          </>
        )}
      </Nav>
    </Navbar>
  );
};

export default NavbarComponent;
