import React from "react";
const EvenOddImages = ({ EvenOddImagesData }) => {
  const OddImageComponent = ({ title, subtitle, images }) => {
    return (
      <>
        <div className="col-xl-6">
          <img
            src={images}
            alt="Product Image"
            className="img-fluid"
          />
        </div>
        <div className="col-xl-6">
          <p className="fs-2">{title}</p>
          <p className="lead">
            {subtitle}
          </p>
        </div>
      </>
    );
  };
  const EvenImageComponent = ({ title, subtitle, images }) => {
    return (
      <>
        <div className="col-xl-6">
          <p className="fs-2">{title}</p>
          <p className="lead">
            {subtitle}
          </p>
        </div>
        <div className="col-xl-6 pt-2">
          <img
            src={images}
            alt="Product Image"
            className="img-fluid"
          />
        </div>
      </>
    );
  };
  return (
    <div className="row m-5">
      {EvenOddImagesData && EvenOddImagesData.map((item) => {
        const { title, images, subtitle } = item;
        if (item.type === "odd") {
          return <OddImageComponent title={title} subtitle={subtitle} images={images} />
        }
        else {
          return <EvenImageComponent title={title} subtitle={subtitle} images={images} />
        }
      })}
      {/* <OddImageComponent />
      <EvenImageComponent />
      <OddImageComponent />
      <EvenImageComponent /> */}
    </div>
  );
};

export default EvenOddImages;
