import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Card from "./shared/Card";

function EmployeeItem({ item, handleDelete }) {
  return (
    <Card reverse={false}>
      <div className="num-display"> {item.pontuacao}</div>
      <div className="text-display"> {item.texto}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes />
      </button>
    </Card>
  );
}

export default EmployeeItem;
