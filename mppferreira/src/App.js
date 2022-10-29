import React, { useState } from "react";
import "./App.css";
import EmployeeList from "./componentes/EmployeeList";
import Header from "./componentes/Header";
import MPPFerreiraData from "./data/MPPFerreiraData";

function App() {
  const [mppFerreiraData, setMPPFerreiraData] = useState(MPPFerreiraData);
  
  /*
  const createEmployee = (id) => {
    if(window.confirm("Deseja mesmo apagar" )){
      setMPPFerreiraData(mppFerreiraData.filter((item) => item.id != id));
    }
  }
  */

  const deleteEmployee = (id) => {
    if(window.confirm("Deseja mesmo apagar" )){
      setMPPFerreiraData(mppFerreiraData.filter((item) => item.id != id));
    }
  }
 
  return (
    <>
    <Header title='MPP Ferreira' bgColor="rgba(0,0,0,0.4)" textColor="#ff6a95"/>
      <div className="container">
        <EmployeeList data={mppFerreiraData} /*handleCreate={createEmployee}*/ handleDelete={deleteEmployee}/>
      </div>
    </>
  );
}

export default App;