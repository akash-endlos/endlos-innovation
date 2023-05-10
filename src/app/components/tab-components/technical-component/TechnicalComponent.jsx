import React, { useState } from "react";
import "./technical-component.css";

const TechnicalComponent = ({tableData}) => {

  return (
    <div className=" technical-container container m-5">
      <table className="table table-borderless">
        <tbody>
        {tableData && tableData.map((item,index) => (
        <tr key={index} className={`${item.color === "secondary" ? "table-upper-color" : ""}`}>
          <td className={`${item.type === "bold" ? "fw-bold" : ""}`}>
            <small>{item.key}</small>
          </td>
          {item.value ? item.value.map((values,index) => (
            <td key={index}>{values.value1}</td>
          )) :
            <>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </>
          }
        </tr>
      ))}
        </tbody>
      </table>

    </div>
  );
};

export default TechnicalComponent;
