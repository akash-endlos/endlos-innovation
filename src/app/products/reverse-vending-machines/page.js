"use client";
import React from "react";
import "./reverse-vending-machine.css";
import { AiOutlineRight } from "react-icons/ai";
import { ImMail4 } from "react-icons/im";
import { Divider } from "@mui/material";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";
import ImageCardContainer from "@/app/components/page-components/image-card-container/ImageCardContainer";

const page = () => {
  let [over, setOver] = React.useState(false);
  return (
    <div className="row product-page-container">
      <div className="col-xl-9">
        <div className="row">
          <img src="/assets/1.jpg" width={1400} />
          <div className="col-sm-10 offset-sm-1">
            <div className="row">
              <div className="col-sm-12">
                <div className="container px-5 py-5 responsive-container">
                  <div></div>
                  <div className="d-flex align-items-center gap-2">
                    <p>
                      <span>Home</span> <AiOutlineRight />
                    </p>
                    <p>
                      <span>Products</span> <AiOutlineRight />
                    </p>
                    <p>
                      <span>Reverse Vending Machines</span> <AiOutlineRight />
                    </p>
                  </div>
                  <div className="container py-2">
                    <p className="text-center fs-2 text-dark">Fiber laser</p>
                    <p className="px-4 fs-5">
                      A compact footprint, long service life, excellent single
                      mode (SM) beam quality up to 2 kW or multiple mode (MM) up
                      to 6 kW as a robust "all-in-fiber" resonator concept – all
                      these features make TRUMPF fiber lasers first choice for a
                      wide range of applications. The 10 m SM or up to 20 m MM
                      transport fiber and flexible laser communication and
                      control options also allow our fiber lasers to be easily
                      integrated into larger systems.
                    </p>
                  </div>

                  <div className="container my-5">
                    <div className="row gap-md-2 gap-xl-0">
                      <div className="col-xl-6 col-lg-12">
                        <img
                          className="w-100 shadow"
                          src="/images/RVM_eco_765x430_1.jpg"
                        />
                      </div>
                      <div className="col-xl-6 col-lg-12">
                        <div>
                          <p className="fs-2">RVM Eco</p>
                          <p>
                            The fiber-based solid-state laser, TruFiber, is the
                            precision laser for delicate work. It stands out
                            with its single-mode beam quality and the variety of
                            power classes available. While the lower power
                            classes of the fiber laser (up to 1 kW) are
                            optimally suited for laser precision cutting and
                            welding, the higher power classes (over 1 kW) shine
                            when it comes to wobble welding.
                          </p>
                        </div>
                        <div className="btn btn-dark">To The Product</div>
                      </div>
                    </div>
                  </div>
                  <div className="container my-5">
                    <div className="row gap-md-2 gap-xl-0">
                      <div className="col-xl-6 col-lg-12 position-relative">
                        <img
                          className="w-100 shadow"
                          src="/images/RVM_pro_765x430_6.jpg"
                        />
                        <div className="ribbon">New</div>
                      </div>
                      <div className="col-xl-6 col-lg-12">
                        <div>
                          <p className="fs-2">RVM Pro</p>
                          <p>
                            The fiber-based solid-state laser, TruFiber, is the
                            precision laser for delicate work. It stands out
                            with its single-mode beam quality and the variety of
                            power classes available. While the lower power
                            classes of the fiber laser (up to 1 kW) are
                            optimally suited for laser precision cutting and
                            welding, the higher power classes (over 1 kW) shine
                            when it comes to wobble welding.
                          </p>
                        </div>
                        <div className="btn btn-dark">To The Product</div>
                      </div>
                    </div>
                  </div>
                  <div className="container my-5">
                    <div className="row gap-md-2 gap-xl-0">
                      <div className="col-xl-6 col-lg-12">
                        <img
                          className="w-100 shadow"
                          src="/images/RVM_premium_765x430_2.jpg"
                        />
                      </div>
                      <div className="col-xl-6 col-lg-12">
                        <div>
                          <p className="fs-2">RVM Premium</p>
                          <p>
                            The fiber-based solid-state laser, TruFiber, is the
                            precision laser for delicate work. It stands out
                            with its single-mode beam quality and the variety of
                            power classes available. While the lower power
                            classes of the fiber laser (up to 1 kW) are
                            optimally suited for laser precision cutting and
                            welding, the higher power classes (over 1 kW) shine
                            when it comes to wobble welding.
                          </p>
                        </div>
                        <div className="btn btn-dark">To The Product</div>
                      </div>
                    </div>
                  </div>
                  <div className="container my-5">
                    <div className="row gap-md-2 gap-xl-0">
                      <div className="col-xl-6 col-lg-12">
                        <img
                          className="w-100 shadow"
                          src="https://www.trumpf.com/filestorage/TRUMPF_Processed/_processed_/f/b/csm_TRUMPF-lasers-fiber-lasers-TruFiber-new-generation-product-picture_da76ff46f5_c7a1592c0d.jpg"
                        />
                      </div>
                      <div className="col-xl-6 col-lg-12">
                        <div>
                          <p className="fs-2">RVM DRS 11</p>
                          <p>
                            The fiber-based solid-state laser, TruFiber, is the
                            precision laser for delicate work. It stands out
                            with its single-mode beam quality and the variety of
                            power classes available. While the lower power
                            classes of the fiber laser (up to 1 kW) are
                            optimally suited for laser precision cutting and
                            welding, the higher power classes (over 1 kW) shine
                            when it comes to wobble welding.
                          </p>
                        </div>
                        <div className="btn btn-dark">To The Product</div>
                      </div>
                    </div>
                  </div>
                  <div className="container my-5">
                    <div className="row gap-md-2 gap-xl-0">
                      <div className="col-xl-6 col-lg-12">
                        <img
                          className="w-100 shadow"
                          src="https://www.trumpf.com/filestorage/TRUMPF_Processed/_processed_/f/b/csm_TRUMPF-lasers-fiber-lasers-TruFiber-new-generation-product-picture_da76ff46f5_c7a1592c0d.jpg"
                        />
                      </div>
                      <div className="col-xl-6 col-lg-12">
                        <div>
                          <p className="fs-2">RVM DRS 22</p>
                          <p>
                            The fiber-based solid-state laser, TruFiber, is the
                            precision laser for delicate work. It stands out
                            with its single-mode beam quality and the variety of
                            power classes available. While the lower power
                            classes of the fiber laser (up to 1 kW) are
                            optimally suited for laser precision cutting and
                            welding, the higher power classes (over 1 kW) shine
                            when it comes to wobble welding.
                          </p>
                        </div>
                        <div className="btn btn-dark">To The Product</div>
                      </div>
                    </div>
                  </div>
                  <div className="container my-5">
                    <div className="row gap-md-2 gap-xl-0">
                      <div className="col-xl-6 col-lg-12">
                        <img
                          className="w-100 shadow"
                          src="https://www.trumpf.com/filestorage/TRUMPF_Processed/_processed_/f/b/csm_TRUMPF-lasers-fiber-lasers-TruFiber-new-generation-product-picture_da76ff46f5_c7a1592c0d.jpg"
                        />
                      </div>
                      <div className="col-xl-6 col-lg-12">
                        <div>
                          <p className="fs-2">RVM DRS 35</p>
                          <p>
                            The fiber-based solid-state laser, TruFiber, is the
                            precision laser for delicate work. It stands out
                            with its single-mode beam quality and the variety of
                            power classes available. While the lower power
                            classes of the fiber laser (up to 1 kW) are
                            optimally suited for laser precision cutting and
                            welding, the higher power classes (over 1 kW) shine
                            when it comes to wobble welding.
                          </p>
                        </div>
                        <div className="btn btn-dark">To The Product</div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="px-5 pt-4">
                    <p className="fs-2 text-center text-secondary">
                      You might also be interested in
                    </p>
                    <ImageCardContainer />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 p-5 ">
        <div className="p-5">
          <p className="fs-4"> Contact</p>
          <div className="d-flex justify-content-lg-start justify-content-md-start justify-content-center align-items-center">
            <hr style={{ width: "500px" }} />
          </div>
          <p className="fs-5">Sales</p>
          <a href="">Phone 020 6675 9800</a>
          <p>Fax 020 6675 9899</p>
          <span className="text-success pointer">
            Email <BsArrowRight />{" "}
          </span>
          <div className="mt-4 ">
            <p className="fs-4">Services</p>
            <div className="d-flex justify-content-lg-start justify-content-md-start justify-content-center align-items-center">
              <hr style={{ width: "500px" }} />
            </div>
            <div className="d-flex gap-4 align-items-center mb-4">
              <div>Icon</div>
              <div>
                <p className="m-0 p-0">Training Courses</p>
                <span className="text-success pointer">
                  Find out More <BsArrowRight />{" "}
                </span>
              </div>
            </div>
            <div className="d-flex gap-4 align-items-center mb-4">
              <div>Icon</div>
              <div>
                <p className="m-0 p-0">Training Courses</p>
                <span className="text-success pointer">
                  Find out More <BsArrowRight />{" "}
                </span>
              </div>
            </div>
            <div className="d-flex gap-4 align-items-center mb-4">
              <div>Icon</div>
              <div>
                <p className="m-0 p-0">Training Courses</p>
                <span className="text-success pointer">
                  Find out More <BsArrowRight />{" "}
                </span>
              </div>
            </div>
            <div className="d-flex gap-4 align-items-center mb-4">
              <div>Icon</div>
              <div>
                <p className="m-0 p-0">Training Courses</p>
                <span className="text-success pointer">
                  Find out More <BsArrowRight />{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p className="fs-4"> Downloads</p>
            <div className="d-flex justify-content-lg-start justify-content-md-start justify-content-center align-items-center">
              <hr style={{ width: "500px" }} />
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <img src="https://www.trumpf.com/filestorage/TRUMPF_Master/_processed_/b/f/csm_TRUMPF-laser-beam-sources-broschure-EN_17c5c3f88f.png" />
            </div>
            <div className="d-flex align-items-center justify-content-between mt-2">
              <div>
                <p>Beam Source Brochure</p>
                <small>PDF - 4 MB</small>
              </div>
              <div className="btn btn-dark">
                <AiOutlineDownload size={25} />
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
    </div>
  );
};

export default page;
