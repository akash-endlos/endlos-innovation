"use client";
import React from "react";
import "./organic-waste-composter.css";
import { AiOutlineRight } from "react-icons/ai";
import { ImMail4 } from "react-icons/im";
import { Divider } from "@mui/material";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";
import ProductsContainer from "@/app/components/products-container/ProductsContainer";
import { owcProducts } from "@/app/all-content/owcProducts";

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
                      <span>Organic Waste Composter</span> <AiOutlineRight />
                    </p>
                  </div>
                  <div className="container py-2">
                    <p className="text-center fs-2 text-dark">Organic Waste Composter</p>
                    <p className="px-4 fs-5">
                    Introducing our range of Organic Waste Composters (OWCs), designed to efficiently manage and convert organic waste into nutrient-rich compost. Choose from our selection, including the END OWC 50, END OWC 100, END OWC 300, END OWC 500, and END OWC 1000, to find the perfect composting solution for your needs.
                    </p>
                  </div>
                  <ProductsContainer products={owcProducts}/>
                  <p className="lead justify text-secondary">Contact us today to discuss your organic waste management needs and explore the options available, including the END OWC 50, END OWC 100, END OWC 300, END OWC 500, and END OWC 1000. Together, let's embrace responsible waste management and harness the power of composting.
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
