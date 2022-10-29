import React from "react";
import EmployeeItem from "./EmployeeItem";
import {FaTimes} from "react-icons/fa";

function EmployeeList({ data, /*handleCreate,*/ handleDelete }) {
  return (
    <>
      <button className="close">
        <FaTimes />
      </button>

      <div className="employee-list">
        {data.map((item) => (
          <EmployeeItem key={item.id} item={item} handleDelete={handleDelete} />
        ))}
      </div>
    </>
  );
}

export default EmployeeList;
