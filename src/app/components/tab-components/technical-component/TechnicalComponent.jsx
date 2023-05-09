import React, { useState } from "react";
import "./technical-component.css";

const TechnicalComponent = ({tableData}) => {

  return (
    <div className=" technical-container container m-5">
      <table className="table table-borderless">
        <tbody>
        {tableData.map((item,index) => (
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
          {/* <tr className="table-upper-color">
            <td className="fw-bold">
              <small>Dimensions</small>
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr className="table-upper-color">
            <td>
              <small>LENGTH</small>
            </td>
            <td>9333 mm</td>
            <td>11150 mm </td>
            <td>15500 mm</td>
          </tr>
          <tr className="table-upper-color">
            <td>
              <small>WIDTH</small>
            </td>
            <td>9333 mm</td>
            <td>11150 mm </td>
            <td>15500 mm</td>
          </tr>
          <tr className="table-upper-color">
            <td>
              <small>HEIGHT</small>
            </td>
            <td>9333 mm</td>
            <td>11150 mm </td>
            <td>15500 mm</td>
          </tr>
          <tr>
            <td className="fw-bold">
              <small>Weight</small>
            </td>
            <td>9333 mm</td>
            <td>11150 mm </td>
            <td>15500 mm</td>
          </tr>
          <tr>
            <td>
              <small>WEIGHT OF BASIC MACHINE</small>
            </td>
            <td>9333 mm</td>
            <td>11150 mm </td>
            <td>15500 mm</td>
          </tr>
          <tr className="table-upper-color">
            <td className="fw-bold">
              <small>Maximum Speed</small>
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr className="table-upper-color">
            <td>
              <small>SIMULTANEOUS</small>
            </td>
            <td>140 m/min</td>
            <td>140 m/min</td>
            <td>140 m/min</td>
          </tr>
          <tr>
            <td className="fw-bold">
              <small>WORKING RANGE</small>
            </td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>
              <small>X AXIS</small>
            </td>
            <td>3000 mm</td>
            <td>3000 mm</td>
            <td>3000 mm</td>
          </tr> */}
        </tbody>
      </table>

    </div>
  );
};

export default TechnicalComponent;
