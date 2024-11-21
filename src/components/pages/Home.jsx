import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Register from "./Register";

const Home = ({ isLoggedIn, isAdmin, userName, modalOpen, toggleModal }) => {
  return (
    <Container className="my-5">
      <Row>
        {/* Sección izquierda */}
        <Col md={6}>
          {isLoggedIn ? (
            <>
              <h2>Bienvenido, {userName}</h2>
              {isAdmin ? (
                <>
                  <p>Como administrador, selecciona una opción:</p>
                  <Button color="primary" className="mb-3" href="/peticiones">
                    Revisar Peticiones
                  </Button>
                  <br />
                  <Button
                    color="secondary"
                    className="mb-3"
                    href="/reparaciones"
                  >
                    Crear Reparaciones
                  </Button>
                  <br />
                  <Button color="warning" href="/administracion">
                    Administrar Recursos
                  </Button>
                </>
              ) : (
                <>
                  <p>Selecciona una opción para continuar:</p>
                  <Button color="primary" className="mb-3" href="/peticiones">
                    Realizar petición de reparación
                  </Button>
                  <br />
                  <Button color="secondary" href="/reparaciones">
                    Revisar mis reparaciones
                  </Button>
                </>
              )}
            </>
          ) : (
            <>
              <h2>Bienvenido</h2>
              <p>Por favor ingresa o crea una cuenta para continuar.</p>
              <Button color="primary" className="mb-3">
                Iniciar sesión
              </Button>
              <br />
              <Button color="success" onClick={toggleModal}>
                Crear cuenta
              </Button>
              <Register toggleModal={toggleModal} isOpen={modalOpen} />
            </>
          )}
        </Col>

        {/* Sección derecha (Imagen placeholder) */}
        <Col md={6}>
          <img
            src="https://via.placeholder.com/500"
            alt="Imagen placeholder"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
