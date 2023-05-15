import React from "react";
import "./new-multislider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./new-multislider.css";

const NewMultiSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <div className="card">
            <div className="card-body">
              <img
                src="/images/rvm pro RVM_prem_342x456_7.jpg"
                className="img-fluid"
              />
            </div>
            <div className="px-3">
              <h5 className="card-title">Card title</h5>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <div className="card-body">
              <img
                src="/images/rvm pro RVM_prem_342x456_7.jpg"
                className="img-fluid"
              />
            </div>
            <div className="px-3">
              <h5 className="card-title">Card title</h5>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <div className="card-body">
              <img
                 src="/images/rvm pro RVM_prem_342x456_7.jpg"
                className="img-fluid"
              />
            </div>
            <div className="px-3">
              <h5 className="card-title">Card title</h5>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <div className="card-body">
              <img
                 src="/images/rvm pro RVM_prem_342x456_7.jpg"
                className="img-fluid"
              />
            </div>
            <div className="px-3">
              <h5 className="card-title">Card title</h5>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <div className="card-body">
              <img
                 src="/images/rvm pro RVM_prem_342x456_7.jpg"
                className="img-fluid"
              />
            </div>
            <div className="px-3">
              <h5 className="card-title">Card title</h5>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <div className="card-body">
              <img
                 src="/images/rvm pro RVM_prem_342x456_7.jpg"
                className="img-fluid"
              />
            </div>
            <div className="px-3">
              <h5 className="card-title">Card title</h5>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <div className="card-body">
              <img
                  src="/images/rvm pro RVM_prem_342x456_7.jpg"
                className="img-fluid"
              />
            </div>
            <div className="px-3">
              <h5 className="card-title">Card title</h5>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <div className="card-body">
              <img
                  src="/images/rvm pro RVM_prem_342x456_7.jpg"
                className="img-fluid"
              />
            </div>
            <div className="px-3">
              <h5 className="card-title">Card title</h5>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <div className="card-body">
              <img
                 src="/images/rvm pro RVM_prem_342x456_7.jpg"
                className="img-fluid"
              />
            </div>
            <div className="px-3">
              <h5 className="card-title">Card title</h5>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default NewMultiSlider;
