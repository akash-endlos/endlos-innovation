"use client";
import React, { useState } from "react";
import "./careers.css";
import Image from "next/image";
import { AiOutlineRight, AiOutlineClose } from "react-icons/ai";
import { ImMail4 } from "react-icons/im";
import { FaArrowCircleRight } from "react-icons/fa";
import { Divider } from "@mui/material";
import Link from "next/link";
import bg from '../../../../public/assets/1.jpg'
import ContactForm from "@/app/components/contact-us-form/ContactForm";

const page = () => {
  let [over, setOver] = React.useState(false);
  return (
    <>
      <div className="bg-image d-flex align-items-center" style={{ backgroundImage: `url(${bg.src})` }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="text-white font-weight-bold fs-1">Careers</h1>
            </div>
          </div>
        </div>
      </div>
        <h1 className="text-center text-secondary my-5" >Coming Soon...</h1>
      <div className="contact-us-section">
        <div className="d-flex flex-column align-items-center justify-content-center pb-4">
          <ContactForm />
        </div>
        <Divider sx={{ bgcolor: "#FFFFFF", height: "3px" }} />
      </div>
    </>
  );
};

export default page;
