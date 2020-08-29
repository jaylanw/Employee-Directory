import React from "react";

function EmployeeTable(props) {
  return (
      <table className="table table-hover">    
            <td>{props.fName}</td>
            <td>{props.lName}</td>
            <td>{props.email}</td>
            <td>
              <img src={props.picture} className="img-fluid" alt="..." />
            </td>

      </table>
  );
}
export default EmployeeTable;
