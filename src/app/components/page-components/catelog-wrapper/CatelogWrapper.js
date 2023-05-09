import React from "react";
import "./CatelogWrapper.css";
import Image from "next/image";

const CatelogWrapper = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="container py-5">
        <div className="row">
          <div className="col-xl-5 col-lg-5 col-sm-12">
            <img src="/endlos1.jpg" className="img-fluid" alt="endlos" />
          </div>
          <div className="col-xl-7 col-lg-7 col-sm-12">
            <p className="catelog-paragraph-content lead">
              We bring control and data across our enterprise, allowing
              industrial firms and their employees to become more efficient and
              long-lasting.
            </p>
            <div className="d-flex gap-2">
              <button className="my-2 catelog-download"><a href="assets/pdf/1.pdf" download="Recycling Machines.pdf">Recycling Machines</a></button>
              <button className="my-2 catelog-download"><a href="assets/pdf/1.pdf" download="Solid Waste Management.pdf">Solid Waste Management</a></button>
            </div>
            <div className="d-flex gap-2">
              <button className="my-2 catelog-download"><a href="assets/pdf/1.pdf" download="Vending Machines.pdf">Vending Machines</a></button>
              <button className="my-2 catelog-download"><a href="assets/pdf/1.pdf" download="Hospitality Case Goods.pdf">Hospitality Case Goods</a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatelogWrapper;
