import React from "react";
import { Table, Button } from "reactstrap";

const DataTable = ({ title, columns, data, canCRUD }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2 className="text-center my-4">{title}</h2>
      <div className="w-75">
        {/* Mostrar el botón de crear solo si canCRUD es true */}
        {canCRUD && (
          <div className="d-flex justify-content-end mb-3">
            <Button color="primary">Crear Nuevo</Button>
          </div>
        )}
        <Table bordered>
          <thead>
            <tr>
              {columns.map((col, index) => (
                <th key={index}>{col.header}</th>
              ))}
              {/* Mostrar columna de acciones solo si canCRUD es true */}
              {canCRUD && <th>Acciones</th>}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((col, colIndex) => (
                  <td key={colIndex}>{row[col.accessor]}</td>
                ))}
                {/* Mostrar botones de acción solo si canCRUD es true */}
                {canCRUD && (
                  <td>
                    <Button color="warning" size="sm" className="me-2">
                      Editar
                    </Button>
                    <Button color="danger" size="sm">
                      Eliminar
                    </Button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default DataTable;
