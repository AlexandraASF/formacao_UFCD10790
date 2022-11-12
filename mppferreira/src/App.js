import React, { useEffect, useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import EmployeeList from "./componentes/EmployeeList";
import EmployeeStats from "./componentes/EmployeeStats";
import Header from "./componentes/Header";
import MPPFerreiraData from "./data/MPPFerreiraData";
import EmployeeForm from "./componentes/EmployeeForm";

function App() {
  const [mppFerreiraData, setMPPFerreiraData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3002/mppFerreiraData`)
      .then((response) => response.json())
      .then((data) => setMPPFerreiraData(data));
  }, []);

  const deleteEmployee = (id) => {
    if (window.confirm("Deseja mesmo apagar")) {
      setMPPFerreiraData(mppFerreiraData.filter((item) => item.id != id));
    }
  };

  const handleAdd = (newEmployee) => {
    newEmployee.id = uuidv4();
    console.log(newEmployee);
    setMPPFerreiraData([newEmployee, ...mppFerreiraData]);
  };

  return (
    <>
      <Header
        title="MPP Ferreira"
        bgColor="rgba(0,0,0,0.4)"
        textColor="#ff6a95"
      />
      <div className="container">
        <EmployeeForm handleAdd={handleAdd} />
        <EmployeeStats data={mppFerreiraData} />
        <EmployeeList data={mppFerreiraData} handleDelete={deleteEmployee} />
      </div>
    </>
  );
}

export default App;
