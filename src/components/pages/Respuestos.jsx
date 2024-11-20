import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "../DataTable";

const Repuestos = ({ isAdmin }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin) {
      navigate("/");
    }
  }, [isAdmin, navigate]);

  const columns = [
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
        title="Lista de"
        columns={columns}
        data={data}
        canCRUD={true}
      />
    </div>
  );
};

export default Repuestos;
