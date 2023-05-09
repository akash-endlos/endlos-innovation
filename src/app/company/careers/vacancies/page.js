"use client";
import React, { useState } from "react";
import "./vacancies.css";
import Image from "next/image";
import { AiOutlineRight, AiOutlineClose } from "react-icons/ai";
import { ImMail4 } from "react-icons/im";
import { Divider } from "@mui/material";
import Link from "next/link";
const page = () => {
  let [over, setOver] = React.useState(false);
  return (
    <>
      <div className="image-section">
        <Image src="/assets/1.jpg" fill />
        <p className="img-text">Vacancies</p>
      </div>
      <div className="container px-5 py-4">
        <div className="d-flex align-items-center gap-2">
          <p>
            <span>Home</span> <AiOutlineRight />
          </p>
          <p>
            <span>Industries</span> <AiOutlineRight />
          </p>
          <p>
            <span>Case Studies</span> <AiOutlineRight />
          </p>
        </div>
        <div className="container py-2">
          <p className="para-text">
            You have your goals, we give you the opportunities. Find our
            vacancies here and embark on your career at endlos.
          </p>
          <p className="para-text ">
            Simply set the filter options to find the positions matching your
            needs and skills. You can find the link to the online application
            and a contact person for any questions you may have at the bottom of
            every vacancy page.
          </p>
        </div>
      </div>
      <div className="container px-5">
        <div className="hr-sect">
          <div className="d-flex justify-content-center align-items-center flex-column">
            <h2>540</h2>
            <p className="fs-4">Results</p>
          </div>
        </div>
        <div className="vacancies-card"></div>
      </div>
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
