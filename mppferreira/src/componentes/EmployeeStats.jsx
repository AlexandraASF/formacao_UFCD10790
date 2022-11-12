import React from "react";

function EmployeeStats({ data }) {
  let media =
    data.reduce((contador, atual) => {
      return contador + atual.pontuacao;
    }, 0) / data.length;

  return (
    <>
      <div className="employee-stats">
        <h4> Pontuação média: {isNaN(media) ? 0 : media.toFixed(1)} </h4>
      </div>
    </>
  );
}

export default EmployeeStats;