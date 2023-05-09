"use client";
import React, { useState } from "react";
import "./location.css";
import Image from "next/image";
import { AiOutlineRight, AiOutlineClose } from "react-icons/ai";
import { ImMail4 } from "react-icons/im";

import ImageCardContainer from "../../components/page-components/image-card-container/ImageCardContainer";
import { Divider } from "@mui/material";
import { AboutImageCardContainer } from "@/app/all-content/about";
import Link from "next/link";
import MapWrapper from "@/app/components/page-components/map-wrapper/MapWrapper";
import LocationWrapper from "@/app/components/location-wrapper/LocationWrapper";
const page = () => {
  let [over, setOver] = React.useState(false);
  return (
    <>
      <div className="image-section">
        <Image src="/assets/1.jpg" fill />
        <p className="img-text">Location</p>
      </div>
      <div className="container px-5 py-4">
        <div className="d-flex align-items-center gap-2">
          <p>
            <span>Home</span> <AiOutlineRight />
          </p>
          <p>
            <span>Company</span> <AiOutlineRight />
          </p>
          <p>
            <span>Location</span> <AiOutlineRight />
          </p>
        </div>
        <div className="container py-2">
          <h1 className="text-center text-muted my-5">Endlos Location</h1>
          <p className="para-text lead">
            Endlos Innovation was established in 2018, specializing in an
            environmental services-based company with 50+ employees. We are a
            leading provider of innovative solutions such as Reverse Vending
            Machines, Organic Waste Composters, and Pet Bottle Shredders/Plastic
            Bottle Crushing Machines. Our products have successfully met the
            needs of consumers, businesses, and the environment worldwide.
          </p>
        </div>
      </div>
      {/* <div className="d-flex justify-content-center align-items-center">
        <hr style={{ width: "400px" }} />
      </div> */}
      {/* <ImageCardContainer data={AboutImageCardContainer} /> */}
      <LocationWrapper />
      <div className="contact-us-section">
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
              className={`${
                !over ? "text-secondary" : "contact-us-border"
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
      </div>
    </>
  );
};

export default page;
