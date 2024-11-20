import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Row, Col, Container } from "reactstrap";
import { Link } from "react-router-dom";

const Administracion = ({ isAdmin }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin) {
      navigate("/");
    }
  }, [isAdmin, navigate]);

  return (
    <Container className="mt-5">
      <Row>
        {/* Columna izquierda con el mensaje de bienvenida */}
        <Col md={6}>
          <h2>Bienvenido Admin</h2>
        </Col>

        {/* Columna derecha con los botones */}
        <Col md={6} className="d-flex flex-column align-items-end">
          <Link to="/repuestos">
            <Button color="primary" className="mb-3">
              Gestionar Repuestos
            </Button>
          </Link>
          <Link to="/tecnicos">
            <Button color="primary" className="mb-3">
              Gestionar Técnicos
            </Button>
          </Link>
          <Link to="/equipos">
            <Button color="primary">Gestionar Equipos</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Administracion;
