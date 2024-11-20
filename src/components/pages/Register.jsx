import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const Register = ({ toggleModal, isOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    toggleModal();
  };

  return (
    <Modal isOpen={isOpen} toggle={toggleModal}>
      <ModalHeader toggle={toggleModal}>Crear Cuenta</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name">Nombre</Label>
            <Input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Nombre de usuario"
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Correo Electrónico</Label>
            <Input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Correo electrónico"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Contraseña</Label>
            <Input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Contraseña"
            />
          </FormGroup>
          <ModalFooter>
            <Button type="submit" color="primary">
              Crear Cuenta
            </Button>
            <Button color="secondary" onClick={toggleModal}>
              Cancelar
            </Button>
          </ModalFooter>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default Register;
