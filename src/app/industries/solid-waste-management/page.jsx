"use client";
import React, { useEffect, useState } from "react";
import "./solid-waste-management.css";
import Image from "next/image";
import { AiOutlineRight, AiOutlineClose } from "react-icons/ai";
import { ImMail4 } from "react-icons/im";
import { Divider } from "@mui/material";
import NewMultiSlider from "@/app/components/multi-slider-images/NewMultiSlider";
import bg from '../../../../public/assets/1.jpg'
import ContactForm from "@/app/components/contact-us-form/ContactForm";

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
              <h1 className="text-white font-weight-bold fs-1">Solid Waste Management</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-10 offset-sm-1">
          <div className="row">
            <div className="col-sm-12">
              <div className="container px-5 py-5 responsive-container">
                <div className="d-flex align-items-center gap-2 flex-wrap">
                  <div className="d-flex justify-between align-items-center">
                    <div>Home</div> <div><AiOutlineRight /></div>
                  </div>
                  <div className="d-flex justify-between align-items-center">
                    <div>Industries</div> <div><AiOutlineRight /></div>
                  </div>
                  <div className="d-flex justify-between align-items-center">
                    <div>Solid Waste Management</div> <div><AiOutlineRight /></div>
                  </div>
                </div>
                <div className="container py-2">
                  <h1 className="text-secondary text-center font-weight-bold py-5">
                    Solid Waste Management System
                  </h1>
                  <p className="lead justify">
                    Solid waste machines are equipment used in waste management systems to handle, process, and dispose of solid waste. Solid waste refers to non-liquid waste materials generated from residential, commercial, industrial, or construction activities. Solid waste machines are designed to reduce the volume of solid waste by shredding, compacting, or incinerating it.
                  </p>
                </div>
                <h4 className="text-secondary text-lead px-2">The following are some types of solid waste machines:</h4>
                <div className="px-4 py-2">
                  <p className="lead justify">
                    <span className="fw-bold text-secondary fs-5">Shredders : </span>Shredders are machines that cut or tear solid waste materials into smaller pieces, making them easier to transport and process. There are different shredders, including horizontal and vertical shaft shredders, single and double-shaft shredders, and mobile and stationary shredders. Shredders, such as furniture, mattresses, and appliances, typically process bulky waste.

                  </p>
                  <p className="lead justify">
                    <span className="fw-bold text-secondary fs-5">Compactors : </span> Compactors compress solid waste into smaller volumes, reducing the space required for storage and transportation. Different types of compactors include landfill compactors, transfer station compactors, and portable compactors. Portable compactors are used for small-scale waste disposal in commercial and industrial settings.
                  </p>
                  <p className="lead justify">
                    <span className="fw-bold text-secondary fs-5">Balers : </span>  Balers are machines that compress solid waste into compact bales, making them easier to store, transport, and recycle. Different types of balers include vertical and horizontal balers, cardboard balers, and plastic balers. Cardboard balers recycle cardboard waste, while plastic waste is not.
                  </p>
                  <p className="lead justify">
                    <span className="fw-bold text-secondary fs-5">Incinerators : </span>  Incinerators are machines that burn solid waste at high temperatures, reducing the volume of junk and converting it into ash and gases. Incinerators are typically used for medical and hazardous waste disposal but can also be used for other types of solid waste. Incineration is a controversial method of waste disposal, as it can release pollutants into the air and generate toxic ash.
                  </p>
                  <p className="lead justify">
                    <span className="fw-bold text-secondary fs-5">Sorting machines : </span>  They separate solid waste materials based on their composition and recyclability. Different sorting machine types include magnetic separators, eddy current separators, air classifiers, and optical sorters. Air classifiers are used to separate light and heavy materials, while optical sorters use cameras and sensors to identify and sort materials based on their properties.

                  </p>
                </div>
                <div className=" py-1">
                  <p className="lead justify">
                    Solid waste machines are critical in waste management systems, helping reduce waste volume, recover valuable resources, and minimize environmental impacts. Proper selection, operation, and maintenance of solid waste machines are essential to ensure efficient and effective waste management. Solid waste machines can be expensive to purchase and operate, but they can also generate revenue by selling recyclable materials and reducing disposal costs.
                  </p>
                </div>
                <div >
                  <h4 className="py-2 text-secondary">
                    The History of solid waste machines and How It Has Evolved
                  </h4>
                  <p className="lead justify">
                    The History of solid waste machines dates back to the early 20th century when the first garbage trucks were introduced. These trucks collected and transported waste from households to disposal sites. However, the process was inefficient and often led to environmental pollution.

                  </p>
                  <p className="lead justify">
                    Over the years solid waste management has undergone a significant transformation by introducing various machines and technologies. One of the most significant advancements in solid waste management was the introduction of incinerators in the 1920s. These machines were used to burn waste, reducing the volume of waste and minimizing environmental pollution.
                  </p>
                  <p className="lead justify">
                    In the 1950s, the first compactor truck was introduced, designed to compress waste into smaller volumes for more accessible transportation. This was followed by the introduction of landfill compactors in the 1960s, which were used to compact waste at landfill sites and reduce the space needed for waste disposal.

                  </p>
                  <p className="lead justify">
                    In the 1970s, the first recycling machines were introduced, which were used to separate and process recyclable materials from the waste stream. This was followed by introduction of waste-to-energy plants in the 1980s, designed to convert waste into energy through incineration.

                  </p>
                  <p className="lead justify">
                    In recent years, solid waste machines have become more advanced and sophisticated with the introduction of automated waste collection systems, which use underground pneumatic tubes to transport waste to disposal sites. Other advanced technologies include sorting machines that use sensors and artificial intelligence to sort and process waste and composting machines that can convert organic waste into compost.

                  </p>
                </div>
                <h4 className="py-2 text-secondary">
                  Solutions for solid waste
                </h4>
                <p className="lead justify">Several solutions for solid waste can help minimize waste's negative impacts on the environment and human health.
                </p>
                <h5 className="lead fw-bold text-secondary">  Some of these solutions include:
                </h5>
                <p className="lead justify">
                  <span className="fw-bold text-secondary fs-5">Source reduction : </span> Source reduction involves reducing the amount of waste generated at the source by promoting environmentally-friendly products and reducing unnecessary consumption

                </p>
                <p className="lead justify">
                  <span className="fw-bold text-secondary fs-5">Recycling : </span>  Recycling involves the collection and processing of waste materials for reuse. This helps to conserve natural resources, reduce energy consumption, and reduce the amount of waste sent to landfills.

                </p>
                <p className="lead justify">
                  <span className="fw-bold text-secondary fs-5">Waste-to-energy : </span> Waste-to-energy technologies involve the conversion of waste into energy, such as electricity or heat, through incineration, gasification, or other processes. This helps reduce waste sent to landfills, generate renewable energy, and reduce greenhouse gas emissions.


                </p>
                <p className="lead justify">
                  <span className="fw-bold text-secondary fs-5">Landfill management : </span>   Proper landfill management practices, such as covering and compacting waste to minimize odor and emissions, can help to reduce the negative impacts of landfills on the environment and nearby communities.

                </p>
                <p className="lead justify">
                  <span className="fw-bold text-secondary fs-5">Public education and outreach : </span>  Educating the public about proper waste management practices, such as recycling and composting, can help to promote responsible waste disposal behaviors and reduce the amount of waste sent to landfills.


                </p>
                <p className="lead justify">Overall, combining these solutions can help minimize the negative impacts of solid waste and promote sustainable waste management practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-us-section">
        <ContactForm/>
        {/* <img src="/assets/mail.svg" className="mail-middle" />
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
            className={`${!over ? "text-secondary" : "contact-us-border"
              } pointer d-flex align-items-center justify-content-center pt-5 pb-4 `}
          >
            <div className=" d-flex align-items-center flex-column gap-2">
              <div className={` p-3 justify-content-center`}>
                <ImMail4 size={60} />
              </div>
              <p className="fs-5">Contact Us</p>
            </div>
          </div>
        </div> */}
        <Divider sx={{ bgcolor: "#FFFFFF", height: "3px" }} />
      </div>
    </>
  );
};

export default page;
