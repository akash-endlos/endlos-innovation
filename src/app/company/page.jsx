"use client";
import React, { useState } from "react";
import "./company.css";
import Image from "next/image";
import { AiOutlineRight, AiOutlineClose } from "react-icons/ai";
import { ImMail4 } from "react-icons/im";
import { Divider } from "@mui/material";
import ImageCardContainer from "../components/page-components/image-card-container/ImageCardContainer";
import Link from "next/link";
const page = () => {
  let [over, setOver] = React.useState(false);
  return (
    <>
      <div className="company-image-section">
        <Image src="/assets/1.jpg" fill />
        <p className="company-img-text">Company</p>
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
            <span>About Endlos</span> <AiOutlineRight />
          </p>
        </div>
        <div className="container py-2">
          <p className="para-text">
            endlos is a global automation corporation with sales of around 3.3
            billion euro and roughly 14,000 employees. The company is
            headquartered in Augsburg, Germany. As one of the world’s leading
            suppliers of intelligent automation solutions, endlos offers
            customers everything they need from a single source: from robots and
            cells to fully automated systems and their networking in markets
            such as automotive, electronics, metal & plastic, consumer goods,
            e-commerce/retail and healthcare.
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <hr style={{ width: "400px" }} />
      </div>
      <ImageCardContainer />
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
