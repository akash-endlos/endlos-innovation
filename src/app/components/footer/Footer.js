"use client";
import React from "react";
import "./footer.css";
import { Divider } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      {/* <Divider sx={{ bgcolor: "#FFFFFF", height: "3px" }} /> */}
      <div className="footer-middle container py-3">
        <div className="row ">
          <div className="col-md-6 col-lg-3">
            <ul className="list-unstyled">
              <li className="text-muted py-1 py-1">
                <p className="text-secondary fw-bold">Endlos</p>
              </li>
              <li className="footer-text-justify text-muted py-1">
                Endlos Technologies Private Limited is a firm envisioned to provide high-quality services and products in the software industry which sets a benchmark efficiently in software development and other IT services. Endlos is always looking for endless opportunities for growth. Our goal is to use software and cloud services to make operations simple and economical for organisations and individuals so they can grow.
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3">
            <ul className="list-unstyled">
              <li className="text-muted py-1 py-1">
                <p className="text-secondary fw-bold">Industries</p>
              </li>
              <li className="text-muted py-1">
                <Link href="/industries/recycling-machines" target="">
                  Recycling Machines
                </Link>
              </li>
              <li className="text-muted py-1">
                <Link href="/industries/solid-waste-management" target="">
                  Solid Waste Management
                </Link>
              </li>
              <li className="text-muted py-1">
                <Link href="/industries/hospitality-case-goods" target="">
                  Hospitality Case Goods
                </Link>
              </li>
              <li className="text-muted py-1">
                <Link href="/industries/vending-machines" target="">
                  Vending Machines
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3">
            <ul className="list-unstyled">
              <li className="text-muted py-1">
                <p className="text-secondary fw-bold">Products</p>
              </li>
              <li className="text-muted py-1">
                <Link href="/products/reverse-vending-machines" target="">
                  Reverse Vending Machines
                </Link>
              </li>
              <li className="text-muted py-1">
                <Link href="/products/organic-waste-composter" target="">
                  Organic Waste Composter
                </Link>
              </li>
              <li className="text-muted py-1">
                <Link href="/products/product-vending-machine" target="">
                  Product Vending Machine
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3">
            <ul className="list-unstyled">
              <li className="text-muted py-1 py-1">
                <p className="text-secondary fw-bold">Company</p>
              </li>
              <li className="text-muted py-1">
                <Link href="/company/contact-us" target="">
                  Contact
                </Link>
              </li>
              <li className="text-muted py-1">
                <Link href="/company/about-endlos" target="">
                  About Endlos
                </Link>
              </li>
              <li className="text-muted py-1">
                <Link href="/company/careers" target="">
                  Career
                </Link>
              </li>
              <li className="text-muted py-1">
                <Link href="/company/location" target="">
                  Location
                </Link>
              </li>
              <li className="text-muted py-1">
                <Link href="/company/blog" target="">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="d-flex flex-row justify-content-sm-between justify-content-xl-end align-items-center">
            <div className="d-flex flex-row justify-content-sm-evenly justify-content-xl-end flex-wrap align-items-center w-100 gap-lg-4 gap-4">
              <Link
                className="pointer"
                href="https://www.facebook.com/"
                target="_blank"
              >
                <img src="/images/facebook.svg" height={30} width={30} />
              </Link>
              <Link
                className="pointer"
                href="https://www.instagram.com/"
                target="_blank"
              >
                <img src="/images/instagram.svg" height={30} width={30} />
              </Link>
              <Link
                className="pointer"
                href="https://in.linkedin.com/"
                target="_blank"
              >
                <img src="/images/linkedin.svg" height={30} width={30} />
              </Link>
              <Link
                className="pointer"
                href="https://twitter.com/i/flow/login"
                target="_blank"
              >
                <img src="/images/twitter.svg" height={30} width={30} />
              </Link>
              <Link
                className="pointer"
                href="https://www.youtube.com/"
                target="_blank"
              >
                <img src="/images/youtube.svg" height={30} width={30} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <Divider sx={{ bgcolor: "#FFFFFF", height: "3px" }} />
      <div className="footer-middle container h-50 pt-5 pb-5">
        <div className="d-flex flex-row justify-content-sm-between justify-content-xl-end align-items-center">
          <div className="d-flex flex-row justify-content-sm-evenly justify-content-xl-end align-items-center w-100 gap-lg-4">
            <Link
              className="pointer"
              href="https://www.facebook.com/"
              target="_blank"
            >
              <img src="/images/facebook.svg" height={30} width={30} />
            </Link>
            <Link
              className="pointer"
              href="https://www.instagram.com/"
              target="_blank"
            >
              <img src="/images/instagram.svg" height={30} width={30} />
            </Link>
            <Link
              className="pointer"
              href="https://in.linkedin.com/"
              target="_blank"
            >
              <img src="/images/linkedin.svg" height={30} width={30} />
            </Link>
            <Link
              className="pointer"
              href="https://twitter.com/i/flow/login"
              target="_blank"
            >
              <img src="/images/twitter.svg" height={30} width={30} />
            </Link>
            <Link
              className="pointer"
              href="https://www.youtube.com/"
              target="_blank"
            >
              <img src="/images/youtube.svg" height={30} width={30} />
            </Link>
          </div>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
