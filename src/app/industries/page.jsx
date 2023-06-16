"use client";
import React, { useState } from "react";
import "./industries.css";
import Image from "next/image";
import ImageCardContainer from "../components/page-components/image-card-container/ImageCardContainer";
import { ImMail4 } from "react-icons/im";
import { IndustriesImageCardContainer } from "../all-content/Industries";
import Link from "next/link";
import ContactForm from "../components/contact-us-form/ContactForm";
import bg from '../../../public/assets/img/industries.jpg'

const Industries = () => {
  let [over, setOver] = React.useState(false);

  return (
    <div className="endlos-container">
      <div className="bg-image d-flex align-items-end justify-content-center py-5" style={{ backgroundImage: `url(${bg.src})` }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="text-white font-weight-bold fs-1">Industries</h1>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-secondary text-center font-weight-bold pt-5">
        Endlos Innovation
      </h1>
      <div className="d-flex align-items-center justify-content-center pt-5 ">
        <p className="container industries-text-justify lead text-dark text-secondary ">
          At Endlos Innovation, we assist our clients in attaining huge successes. Each business is unique in its way. We strive to provide bespoke solutions that satisfy their needs. Our investments in the most modern automation technologies cater to diverse industries like recycling Machines, Solid Waste Management, Hospitality Case Goods, and vending machines. Our goal is to become your go-to source of information for companies from any industry.
        </p>
      </div>
      <div className="d-flex align-items-center justify-content-center  ">
        <p className="container industries-text-justify lead text-dark text-secondary ">
          The pursuit of excellence is an integral part of our standards. We know the importance of being ahead of the game, which requires an ongoing quest for knowledge and development. Our business scope constantly evolves with the acquisition of new capabilities and expertise to ensure our leadership position in innovation. Every concept has the capacity for a positive impact, and it is our responsibility to bring the ideas we have in mind to reality. It doesn't matter if it's creating a novel product, improving efficiency in operations, or developing some new competitive advantage. We're dedicated to providing the required infrastructure and help.
        </p>
      </div>
      <div className="d-flex align-items-center justify-content-center  ">
        <p className="container industries-text-justify lead text-dark text-secondary ">
          While we develop and increase our capabilities, we're confident about the future and can serve our clients more effectively. Let's work together to shape a brighter future.
        </p>
      </div>
      <div className="d-flex align-items-center justify-content-center pt-2 pb-5">
        <hr className="w-25" />
      </div>
      <ImageCardContainer data={IndustriesImageCardContainer} />
      <ContactForm />
    </div>
  );
};
export default Industries;
