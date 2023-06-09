import React from "react";
import "./overview-component.css";
import { FaSquare } from "react-icons/fa";
import ImageCardContainer from "../../page-components/image-card-container/ImageCardContainer";
import { AiOutlineRead } from "react-icons/ai";
import EvenOddImages from "../../even-odd-images-component/EvenOddImages";
import ProductCarousel from "../../feature/product-carousel/ProductCarousel";
import NewProductCarousel from "../../feature/product-carousel/NewProductCarousel";

const Overview = ({ EvenOddImagesData,Description }) => {
  return (
    <>
      <div className="text-center w-75 m-auto px-2 my-5">
        {/* <p className="fs-4">
          Your first step into high-quality 2D laser processing
        </p> */}
        <p className="lead">
          {Description}
        </p>
      </div>
      <div className="px-5 my-5">
        <div className="row ">
          <div className="col-xl-6">
            <div className="py-3 fw-bold d-flex align-items-center gap-2 lead">
              {" "}
              <FaSquare color="#FF7722" /> Perfect introduction, perfect
              addition
            </div>
            <div className="lead pb-5">
              Perfect economy even with low to medium utilization
            </div>
            <div className="d-flex align-items-center ">
              <hr style={{ width: "600px" }} />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="py-3 fw-bold d-flex align-items-center gap-2 lead">
              {" "}
              <FaSquare color="#FF7722" /> High quality
            </div>
            <div className="lead pb-3">
              Intuitive operation with Touchpoint control, and easy to get
              started thanks to integrated cutting data
            </div>
            <div className="d-flex align-items-center ">
              <hr style={{ width: "600px" }} />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="py-3 fw-bold d-flex align-items-center gap-2 lead">
              {" "}
              <FaSquare color="#FF7722" /> Save money, protect the environment
            </div>
            <div className="lead pb-5">
              Energy-efficient process cooler for laser and machine
            </div>
            <div className="d-flex align-items-center ">
              <hr style={{ width: "600px" }} />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="py-3 fw-bold d-flex align-items-center gap-2 lead">
              {" "}
              <FaSquare color="#FF7722" /> Safe laser cutting
            </div>
            <div className="lead pb-3">
              Maximum safety during operation thanks to enclosed protective
              housing and beam guard
            </div>
            <div className="d-flex align-items-center ">
              <hr style={{ width: "600px" }} />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="py-3 fw-bold d-flex align-items-center gap-2 lead">
              {" "}
              <FaSquare color="#FF7722" /> Safe laser cutting
            </div>
            <div className="lead pb-3">
              Maximum safety during operation thanks to enclosed protective
              housing and beam guard
            </div>
            <div className="d-flex align-items-center ">
              <hr style={{ width: "600px" }} />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="py-3 fw-bold d-flex align-items-center gap-2 lead">
              {" "}
              <FaSquare color="#FF7722" />
              Automation made easy
            </div>
            <div className="lead pb-5">Autonomous work is possible</div>
            <div className="d-flex align-items-center ">
              <hr style={{ width: "600px" }} />
            </div>
          </div>
        </div>
      </div>
      <NewProductCarousel />
      {/* <ProductCarousel MarginValue={'mx-5'} /> */}
      <EvenOddImages EvenOddImagesData={EvenOddImagesData} />
      <div className="d-flex align-items-center justify-content-center">
        <hr style={{ width: "1320px" }} />
      </div>
      <p className="container">
        This product range and information may vary depending on the country.
        Subject to changes to technology, equipment, price, and range of
        accessories. Please get in touch with your local contact person to find
        out whether the product is available in your country.
      </p>
      {/* <div className='container-background'>
                <div className='inner-container'>
                    <div className='d-flex align-items-start'>
                        <AiOutlineRead size={90} />
                    </div>
                    <div className='icon-container w-50'>
                        <p className='fs-4'>There has never been so much TRUMPF for your buck</p>
                        <p className='lead'>The new TruLaser Series 1000 is available with financing options for every budget to help you stay on top of your costs. Do you have questions or want to find out more about a financing option without commitment? Get in touch with us – simple and non-binding!</p>
                    </div>
                    <div className='d-flex align-items-end'>
                        <button className='button-container'>Find out more</button>
                    </div>
                </div>
            </div> */}
      {/* <div className='text-center mt-5'>
                <p className='pt-5 fs-2'>you may also find these interesting topics</p>
                <ImageCardContainer />
            </div> */}
    </>
  );
};

export default Overview;
