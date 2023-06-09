import React from "react";
import "./image-card-container.css";
import { FaArrowCircleRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const ImageCardContainer = ({ data }) => {
  return (
    <>
      <div class="container pt-5">
        <div class="row">
          {data?.length > 0 &&
            data?.map((item) => (
              <div className="col-lg-12 col-xl-6">
                <Link href={item.link}>
                  <h4>{item.title}</h4>

                  <div className="position-relative pt-5 mb-5">
                    <div className="inner">
                      <img
                        src={item.img_src}
                        alt="img1"
                        className="image-container "
                      />
                    </div>
                    <div className="arrow-on-image pointer">
                      {/* <Link href={item.link}>
                      {" "}
                      <FaArrowCircleRight size={60} />
                    </Link> */}
                    </div>
                  </div>
                    <div class="row">
                      <div class="col-sm-10">
                        <p class="text-height">{item.subtitle}</p>
                      </div>
                    </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ImageCardContainer;
