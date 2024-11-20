import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "../DataTable";

const Peticiones = ({ isLoggedIn, isAdmin }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn || isAdmin) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div>
      <h2 className="text-center my-4">Mi Perfil</h2>
    </div>
  );
};

export default Peticiones;
