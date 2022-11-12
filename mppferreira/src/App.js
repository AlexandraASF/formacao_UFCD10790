import React, { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { userContext } from "./context/userContext";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import EmployeeList from "./componentes/EmployeeList";
import EmployeeStats from "./componentes/EmployeeStats";
import Header from "./componentes/Header";
import MPPFerreiraData from "./data/MPPFerreiraData";
import EmployeeForm from "./componentes/EmployeeForm";
import Inicio from "./componentes/pages/Inicio";
import Fim from "./componentes/pages/Fim";
import Dashboard from "./componentes/pages/Dashboard";

function App() {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({user, setUser}), [user, setUser]);
  const [mppFerreiraData, setMPPFerreiraData] = useState([]);
  //const [mppFerreiraData, setMPPFerreiraData] = useState(MPPFerreiraData);

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
      {/*<Header
        title="MPP Ferreira"
        bgColor="rgba(0,0,0,0.4)"
        textColor="#ff6a95"
      />
      <div className="container">
        <EmployeeForm handleAdd={handleAdd} />
        <EmployeeStats data={mppFerreiraData} />
        <EmployeeList data={mppFerreiraData} handleDelete={deleteEmployee} />
  </div>*/}
      <BrowserRouter>
      <userContext.Provider value={value}>
      <Routes>
        <Route path="/" element={ <Inicio/>} />
        { user ? (
          <>
          <Route path="/dashboard" element={ <Dashboard/>} />
          <Route path="/logout" element={ <Fim/>} />
          </>
        ) : null
          
        }
        </Routes> 
        </userContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
