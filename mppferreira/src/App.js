import React, { useState } from "react";
import "./App.css";
import MPPFerreiraList from "./componentes/MPPFerreiraList";
import Header from "./componentes/Header";
import MPPFerreiraData from "./data/MPPFerreiraData";

function App() {
  const [mppFerreira, setMPPFerreira] = useState(MPPFerreiraData);
  
  const deleteMPPFerreira = (id) => {
    if(window.confirm("Deseja mesmo apagar" )){
      setMPPFerreira(mppFerreira.filter((item) => item.id != id));
    }
  }
 
  return (
    <>
    <Header title='MPPFerreira UI APP' bgColor="rgba(0,0,0,0.4)" textColor="#ff6a95"/>
      <div className="container">
        <MPPFerreiraList data={mppFerreira} handleDelete={deleteMPPFerreira}/>
      </div>
    </>
  );
}

export default App;