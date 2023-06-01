"use client";
import React, { useEffect, useState } from "react";
import "./hospitality-case-goods.css";
import Image from "next/image";
import { AiOutlineRight, AiOutlineClose } from "react-icons/ai";
import { ImMail4 } from "react-icons/im";
import { Divider } from "@mui/material";
import NewMultiSlider from "@/app/components/multi-slider-images/NewMultiSlider";
import bg from '../../../../public/assets/1.jpg'

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
              <h1 className="text-white font-weight-bold fs-1">Hospitality Case Goods</h1>
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
                    <div>Hospitality Case Goods</div> <div><AiOutlineRight /></div>
                  </div>
                </div>
                <div className="container py-2">
                  {/* <h1 className="text-secondary text-center font-weight-bold py-5">
                    Automation in the Recycling Industry
                  </h1> */}
                  <p className="lead justify py-4">
                    Welcome to Endlos Innovation's Hospitality Case Goods page. Here, we provide you with high-quality case goods solutions designed specifically for the hospitality industry. Discover our history and learn how our innovative solutions can enhance your hospitality spaces.

                  </p>
                </div>
                {/* <div className="d-flex justify-content-center align-items-center">
                  <hr style={{ width: "700px" }} />
                </div> */}
                <div className="px-5">
                  <h4 className="py-2 text-secondary">
                    History:

                  </h4>
                  <p className="lead justify">

                    Endlos Innovation has been a leading provider of hospitality case goods for over two decades. With a passion for design, functionality, and durability, we have consistently delivered exceptional products to hotels, resorts, restaurants, and other hospitality establishments worldwide. Our extensive experience and commitment to customer satisfaction have earned us a strong reputation in the industry.

                  </p>
                </div>
                <div className="px-5 py-1">
                  <h4 className="text-secondary">
                    Solutions:
                  </h4>
                  <p className="lead justify">
                    Our range of hospitality case goods is designed to meet the unique needs of the industry, combining style, functionality, and durability. Whether you're looking for furniture for guest rooms, lobbies, restaurants, or conference rooms, we have the perfect solution for you.

                  </p>
                </div>
                <div className="px-5 py-2">
                  <h4 className=" text-secondary">
                    Guest Room Case Goods:
                  </h4>
                  <p className="lead justify">
                    Create a welcoming and comfortable atmosphere for your guests with our thoughtfully designed guest room case goods. From elegant beds and nightstands to functional desks and wardrobes, our furniture enhances both the aesthetics and functionality of any guest room.

                  </p>
                  <p className="pt-4 lead">
                    Our logistics and infrastructure solutions ensure efficient
                    and cost-effective transportation and processing of recycled
                    materials. With our expertise and commitment to
                    sustainability, we help businesses and industries achieve
                    their sustainability goals and create a better future for
                    all.
                  </p>
                </div>
                <div className="px-5 py-4">
                  <h4 className=" text-secondary">Lobby And Common Area  Furniture</h4>
                  <p className="lead justify">
                    Make a lasting impression on your guests with our stylish lobby and common area furniture. Our collection includes chic seating options, elegant tables, and storage solutions that elevate the overall ambience of your hospitality space.
                  </p>
                </div>
                <div className="px-5 py-4">
                  <h4 className="text-secondary">
                    Restaurant and Bar Furnishings:

                  </h4>
                  <p className="lead justify">
                    Enhance your dining experience with our restaurant and bar furnishings. We offer a wide range of dining tables, chairs, bar stools, and storage units that combine aesthetics and functionality, ensuring a pleasant and memorable experience for your guests.

                  </p>
                </div>
                <div className="px-4 py-2">
                  <h4 className=" text-secondary px-4">
                    Conference and Meeting Room Furniture:
                  </h4>
                  <ul>
                    <li className="lead justify">
                      Create a professional and inspiring environment for your conferences and meetings with our conference and meeting room furniture. Our collection includes conference tables, chairs, credenzas, and presentation boards that promote productivity and collaboration.

                    </li>
                  </ul>
                  <h4 className=" text-secondary px-4">
                  Quality and Craftsmanship:
                  </h4>
                  <ul>
                    <li className="lead justify">
                    We understand that each hospitality establishment has unique requirements and design preferences. That's why we offer customization options, allowing you to tailor our case goods to your specific needs. From finishes and fabrics to dimensions and hardware, we work closely with you to create furniture that aligns perfectly with your vision.

                    </li>
                  </ul>
                  <h4 className=" text-secondary px-4">
                  Customization:
                  </h4>
                  <ul>
                    <li className="lead justify">
                    Partner with Endlos Innovation for all your hospitality case goods needs and transform your spaces into inviting, functional, and aesthetically pleasing environments. Contact us today to discuss your project requirements and explore our comprehensive range of solutions.

                    </li>
                  </ul>
                </div>
                {/* <div className="py-4">
                  <p className="fs-3 text-secondary mb-5">
                    Smart Production for an advanced Recycling industry
                  </p>
                  <div className="embed-container">
                    <iframe
                      src="https://www.youtube.com/embed/yYwVirBx_NY"
                      title="Reverse Vending Machine in India by ENDLOS"
                      frameborder="0"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <small>
                    Automated ladder frame production: another endlos innovation
                    for the automotive industry
                  </small>
                </div> */}
                {/* <p className="lead">
                  We are experts in the automotive sector and support you in
                  the further development of your production and logistics
                  processes with individual production and service concepts.
                  Discover here a variety of successful endlos solutions in
                  the automotive industry.
                </p>
                <div className="py-4">
                  <p className="fs-2 text-secondary">
                    You might also be interested in
                  </p>
                  <NewMultiSlider />
                </div> */}
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
        </div>
        <Divider sx={{ bgcolor: "#FFFFFF", height: "3px" }} />
      </div>
    </>
  );
};

export default page;
