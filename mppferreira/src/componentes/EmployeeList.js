import React from "react";
import EmployeeItem from "./EmployeeItem";

function EmployeeList({ data, handleDelete }) {
  return (
    <div className="employee-list">
      {data.map((item) => (
        <EmployeeItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default EmployeeList;
