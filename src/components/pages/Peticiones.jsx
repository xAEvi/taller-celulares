import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "../DataTable";

const Peticiones = ({ isLoggedIn, isAdmin }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const columnsUser = [
    { header: "Descripción", accessor: "description" },
    { header: "Equipo", accessor: "equipment" },
    { header: "Fecha de petición", accessor: "date" },
  ];

  const columnsAdmin = [
    { header: "Descripción", accessor: "description" },
    { header: "Equipo", accessor: "equipment" },
    { header: "Cliente", accessor: "client" },
    { header: "Fecha de petición", accessor: "date" },
  ];

  const data = [
    {
      description: "Pantalla rota",
      equipment: "Samsung S21",
      client: "Juan Pérez",
      date: "2024-11-18",
    },
    {
      description: "Cargador no funciona",
      equipment: "iPhone 13",
      client: "Ana García",
      date: "2024-11-19",
    },
  ];

  return (
    <div>
      <DataTable
        title="Lista de Peticiones"
        columns={isAdmin ? columnsAdmin : columnsUser}
        data={data}
        canCRUD={true}
      />
    </div>
  );
};

export default Peticiones;
