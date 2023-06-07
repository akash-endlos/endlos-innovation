import React from "react";
import "./upper-container.css";
import Link from "next/link";

const UpperContainer = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <div className="container text-center">
          <div className="heading-container w-75">{item.title}</div>
          <p className="paragraph-container endlos-text-justify mt-4 w-75">{item.subtitle}</p>
          <button className="case-studies-button"><Link href="/company/about-endlos">{item.btntitle}</Link></button>
        </div>
      ))}
    </>
  );
};

export default UpperContainer;
