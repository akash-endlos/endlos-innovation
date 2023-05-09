"use client";
import React, { useState } from "react";
import "./careers.css";
import Image from "next/image";
import { AiOutlineRight, AiOutlineClose } from "react-icons/ai";
import { ImMail4 } from "react-icons/im";
import { FaArrowCircleRight } from "react-icons/fa";
import { Divider } from "@mui/material";
import Link from "next/link";

const page = () => {
  let [over, setOver] = React.useState(false);
  return (
    <>
      <div className="image-section">
        <Image src="/assets/1.jpg" fill />
        <p className="img-text">Career at endlos</p>
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
            <span>Careers</span> <AiOutlineRight />
          </p>
        </div>
        <div className="container py-2">
          <p className="top-para-text">
            Welcome to our orange world: endlos can offer you the best
            opportunities for development and long-term prospects. Enter the
            world of Industrie 4.0 and join us in shaping the automation of
            tomorrow: become a endlos colleague.
          </p>
          <p className="head-text">Your career in Industrie 4.0</p>
          <div className="para-text-careers">
            Whether you are a school or university student, graduate or
            professionally experienced: implementing intelligent automation
            solutions calls on teamwork ability, passion, expertise and
            creativity above all else. These are the characteristics which make{" "}
            <strong>excellent endlos employees the world over</strong>.
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <hr style={{ width: "400px" }} />
      </div>
      <div className="w-100 py-5">
        <div className="container px-5">
          <div className="d-flex">
            <div className="row">
              <div className="col-xl-6 py-5">
                <h4>Robot Systems</h4>
                <p>
                  endlos offers industrial robots in a wide range of versions
                  with various payload capacities and reaches. Learn more!
                </p>
                <div className="position-relative">
                  <div className="inner">
                    <Image
                      src="/assets/img/blog/3.jpg"
                      width={492}
                      height={220}
                      alt="img1"
                      className="careers-image-container"
                    />
                  </div>
                  <div className="arrow-on-image ">
                    <Link href="/company/careers/vacancies">
                      <FaArrowCircleRight size={60} />
                    </Link>
                  </div>
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
            <h4 className="text-dark">Your career in Industrie 4.0</h4>
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
