"use client";
import React, { useEffect, useState } from "react";
import "./our-teams.css";
import Image from "next/image";
import { AiOutlineRight, AiOutlineClose } from "react-icons/ai";
import { ImMail4 } from "react-icons/im";
import { Divider } from "@mui/material";
import OurTeam from "@/app/components/our-team-container/OurTeam";
import { OurTeamMembers } from "@/app/all-content/our-team";
import bg from '../../../../public/assets/1.jpg'

const page = () => {
  let [over, setOver] = React.useState(false);
  const [position, setPosition] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      let moving = scrollY;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  const cls = visible ? "visible-page" : "hidden-page";
  return (
    <>
   <div className="bg-image d-flex align-items-center" style={{ backgroundImage: `url(${bg.src})` }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="text-white font-weight-bold fs-1">Our Team</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-10 offset-sm-1">
          <div className="row">
            <div className="col-sm-12">
              <div className="container pt-5 responsive-container">
                <div className="d-flex align-items-center px-5 gap-2">
                  <p>
                    <span>Home</span> <AiOutlineRight />
                  </p>
                  <p>
                    <span>Company</span> <AiOutlineRight />
                  </p>
                  <p>
                    <span>Managing Board</span> <AiOutlineRight />
                  </p>
                </div>
                <div className="container py-2">
                  <p className="lead text-center text-dark fs-2">
                    Managing Board of Endlos
                  </p>
                  <p className="lead para-text">
                    Endlos is a family company. And we want it to remain that
                    way. The members of the Managing Board of the holding
                    company ensure continuity and constant development.
                  </p>
                </div>
                <div className="row gy-5 my-5">
                  <OurTeam team={OurTeamMembers} />
                </div>
              </div>
            </div>
          </div>
        </div>
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
        </div>
        <Divider sx={{ bgcolor: "#FFFFFF", height: "3px" }} />
      </div>
    </>
  );
};

export default page;
