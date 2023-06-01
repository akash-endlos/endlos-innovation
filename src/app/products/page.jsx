"use client";
import React from "react";
import "./products.css";
import Image from "next/image";
import ImageCardContainer from "../components/page-components/image-card-container/ImageCardContainer";
import { Divider } from "@mui/material";
import { ImMail4 } from "react-icons/im";
import Link from "next/link";
import { ProductsImageCardContainer } from "../all-content/products";
import bg from '../../../public/assets/1.jpg'
import ContactForm from "../components/contact-us-form/ContactForm";

const Industries = () => {
  let [over, setOver] = React.useState(false);

  return (
    <div className="endlos-container">
      <div className="bg-image d-flex align-items-center" style={{ backgroundImage: `url(${bg.src})` }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="text-white font-weight-bold fs-1">Products</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center pt-5 pb-4">
        <p className="container text-justify fs-5 text-secondary">
          Welcome to Endlos Innovation, where we present our cutting-edge solutions for waste management and recycling. Explore our range of Reverse Vending Machines, Organic Waste Composters, and Waste Compactors to revolutionize your waste management practices.
        </p>
      </div>

      <ImageCardContainer data={ProductsImageCardContainer} />
      <div className="container py-5">
        <p className="lead justify text-secondary">Contact us today to discuss your waste management requirements and explore how our Reverse Vending Machines, Organic Waste Composters, and Waste Compactors can transform your waste management practices.
        </p>
      </div>
      <ContactForm/>
      {/* <div className="contact-us-section">
        <img src="/assets/mail.svg" className="mail-middle" />
        <div className="d-flex flex-column align-items-center justify-content-center pb-4">
          <div className="text-center">
            <h4 className="text-dark">Contact us</h4>
            <p className="fs-4 text-secondary">
              Contact endlos using our online form. We will be happy to help!
            </p>
          </div>
          <Link href="/company/contact-us">
            <div
              onMouseOver={() => setOver(true)}
              onMouseOut={() => setOver(false)}
              className={`${!over ? "text-secondary" : "contact-us-border"
                } pointer d-flex align-items-center justify-content-center pt-5 pb-4 `}
            >
              <div className=" d-flex align-items-center flex-column gap-2">
                <div className={` p-3 justify-content-center`}>
                  <ImMail4 size={60} />
                </div>
                <p className="fs-5">Contact Us</p>
              </div>
            </div>
          </Link>
        </div>
        <Divider sx={{ bgcolor: "#FFFFFF", height: "3px" }} />
      </div> */}
    </div>
  );
};
export default Industries;
