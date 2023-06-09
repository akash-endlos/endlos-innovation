"use client";
import React from "react";
import "./reverse-vending-machine.css";
import { AiOutlineRight } from "react-icons/ai";
import { ImMail4 } from "react-icons/im";
import { Divider } from "@mui/material";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";
import ImageCardContainer from "@/app/components/page-components/image-card-container/ImageCardContainer";
import ProductsContainer from "@/app/components/products-container/ProductsContainer";
import { rvmProducts } from "@/app/all-content/rvmProducts";

const page = () => {
  let [over, setOver] = React.useState(false);
  return (
    <div className="row product-page-container">
      <div className="col-xl-9">
        <div className="row">
          <img src="/images/RVM_family_1600x900.jpg" width={1400} />
          <div className="col-sm-10 offset-sm-1">
            <div className="row">
              <div className="col-sm-12">
                <div className="container px-5 py-5 responsive-container">
                  <div></div>
                  <div className="d-flex align-items-center gap-2 flex-wrap">
                  <div className="d-flex justify-between align-items-center">
                    <div>Home</div> <div><AiOutlineRight /></div>
                  </div>
                  <div className="d-flex justify-between align-items-center">
                    <div>Products</div> <div><AiOutlineRight /></div>
                  </div>
                  <div className="d-flex justify-between align-items-center">
                    <div>Reverse Vending Machines</div> <div><AiOutlineRight /></div>
                  </div>
                </div>
                  <div className="container py-2">
                    <p className="text-center fs-2 text-dark">Reverse Vending Machines</p>
                    <p className="px-4 fs-5">
                    Introducing our range of Reverse Vending Machines (RVMs) designed to revolutionize recycling and waste management. Explore our diverse lineup, including the RVM Eco, RVM Pro, RVM Premium, RVM DRS 11, RVM DRS 22, and RVM DRS 35, each offering unique features to meet specific needs.
                    </p>
                  </div>
                   <ProductsContainer products={rvmProducts}/>
                   <p className="text-secondary lead justify">
                   Contact us today to discuss your specific recycling needs and find the perfect Reverse Vending Machine from our range of options, including the RVM Eco, RVM Pro, RVM Premium, RVM DRS 11, RVM DRS 22, and RVM DRS 35. Together, let's make recycling a rewarding experience and drive positive change in waste management.

                   </p>
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
         <p> Phone<a href=""> +91 97278 02087</a></p>
          <span className="text-success pointer">
            Email <BsArrowRight />{" "}
            info@endlos.in
          </span>
          {/* <div className="mt-4 ">
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
          </div> */}
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
