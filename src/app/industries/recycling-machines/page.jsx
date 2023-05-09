"use client";
import React, { useEffect, useState } from "react";
import "./recycling-machines.css";
import Image from "next/image";
import { AiOutlineRight, AiOutlineClose } from "react-icons/ai";
import { ImMail4 } from "react-icons/im";
import { Divider } from "@mui/material";
import NewMultiSlider from "@/app/components/multi-slider-images/NewMultiSlider";

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
      {/* <ul
        className={`d-flex justify-content-center align-items-center gap-2 page-nav gap-5 ${cls} ${
          position < 100 ? "d-none" : "position-sticky"
        }`}
      >
        <li className="pointer">Challenges</li>
        <li className="pointer">Solutions</li>
        <li className="pointer">Innovations and Success</li>
        <li className="pointer">Smart production</li>
        <li className="pointer">Case Studies</li>
      </ul> */}
      <div className="image-section">
        <Image src="/assets/1.jpg" fill />
        <p className="img-text">Case Studies</p>
      </div>
      <div className="row">
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
                    <span>Industries</span> <AiOutlineRight />
                  </p>
                  <p>
                    <span>Recycling Machines</span> <AiOutlineRight />
                  </p>
                </div>
                <div className="container py-2">
                  <p className="head-text text-secondary">
                    Automation in the Recycling Industry
                  </p>
                  <p className="para-text lead">
                    Most recycled plastics originate from industrial waste,
                    i.e., they are manufactured directly during the product's
                    manufacturing process. Therefore, they have the benefit that
                    they can be separated according to type. In Endlos
                    Innovation, recycling systems allow material reuse to make
                    more products, significantly contributing to our
                    environment. The residual products left over from the
                    manufacturing process for plastics are of high-quality and
                    precious raw materials. To ensure they can be used again in
                    production by recycling, we design and build highly
                    technologically advanced machines capable of completing this
                    task. When we build these machines, we primarily focus on
                    sustainable economics and the environment. Endlos Innovation
                    solutions preserve the total value of materials between the
                    input and production (zero-waste production), reducing
                    energy and labor costs. The benefits speak for themselves
                  </p>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <hr style={{ width: "700px" }} />
                </div>
                <div className="px-5">
                  <h4 className="py-2 px-2 text-secondary">
                    Challenges in the Recycling Industry
                  </h4>
                  <p className="lead">
                    Recycling is a crucial process that helps reduce waste,
                    conserve natural resources, and minimize the impact of human
                    activities on the environment. However, the recycling
                    industry faces several challenges hindering its growth and
                    sustainability. As an innovative solution provider, Endlos
                    Innovation understands these challenges and strives to
                    overcome them through cutting-edge technology and innovative
                    approaches.
                  </p>
                  <p className="lead">
                    One of the significant challenges facing the recycling
                    industry is contamination. Contamination occurs when
                    non-recyclable materials are mixed with recyclable
                    materials, reducing the quality and value of the recycled
                    materials. Endlos Innovation addresses this challenge
                    through state-of-the-art technology that can separate
                    different types of materials efficiently, minimizing
                    contamination and maximizing the value of recycled
                    materials. Another challenge facing the recycling industry
                    is low market demand. Recycling materials can be more
                    expensive than producing new materials, and there may not
                    always be a market for recycled materials. Endlos Innovation
                    is addressing this challenge by developing innovative
                    recycling solutions that reduce costs and create new
                    products from recycled materials. By finding new markets for
                    recycled materials, Endlos Innovation is helping to create a
                    more sustainable and circular economy.
                  </p>
                </div>
                {/* <div className="d-flex justify-content-center align-items-center flex-column gap-2">
                  <img
                    src="https://www.endlos.com/-/media/endlos-corporate/images/system/contact_images/drake_larry.jpg"
                    height={140}
                    className="rounded border rounded-circle"
                  />
                  <p className="w-50 fs-2 text-center">
                    For our customers in the automotive industry, we bundle all
                    endlos competencies, from engineering to testing to service.
                    With endlos, they always have a reliable partner they can
                    count on.
                  </p>
                  <small>Larry Drake, CEO endlos Automotive Division</small>
                </div> */}
                <div className="px-5 py-1">
                  <h4 className="text-secondary">
                    Solutions for the Recycling Industry
                  </h4>
                  <p className="lead">
                    Endlos Innovation provides innovative solutions for the
                    recycling industry. Our state-of-the-art sorting technology
                    efficiently separates materials, minimizing contamination
                    and maximizing the value of recycled materials. We also
                    develop new products from recycled materials, creating a
                    circular economy that reduces waste and conserves natural
                    resources. Our logistics and infrastructure solutions ensure
                    efficient and cost-effective transportation and processing
                    of recycled materials—partner with Endlos Innovation for a
                    sustainable future.
                  </p>
                </div>
                <div className="px-5 py-2">
                  <h4 className=" text-secondary">
                    Our services and expertises
                  </h4>
                  <p className="lead">
                    At Endlos Innovation, we provide services and expertise to
                    help businesses and industries become more sustainable in
                    the recycling industry. Our state-of-the-art sorting
                    technology efficiently separates materials, minimizing
                    contamination and maximizing the value of recycled
                    materials. We also develop new products from recycled
                    materials, creating a circular economy that reduces waste
                    and conserves natural resources.
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
                  <h4 className=" text-secondary">Robots and software</h4>
                  <p className="lead">
                    Endlos Innovation leverages cutting-edge robotics and
                    software solutions to streamline and optimize recycling. Our
                    robots are designed to perform tasks such as sorting,
                    separating, and processing materials with precision and
                    efficiency, reducing the cost and time required for manual
                    labor. We also develop software solutions that enable
                    real-time monitoring, analysis, and optimization of the
                    recycling process, ensuring that businesses and industries
                    can make data-driven decisions and achieve their
                    sustainability goals. With our expertise in robotics and
                    software, we are driving innovation and efficiency in the
                    recycling industry, creating a more sustainable and circular
                    economy.
                  </p>
                </div>
                <div className="px-5 py-4">
                  <h4 className="text-secondary">
                    Our key to success: Assembly & Test
                  </h4>
                  <p className="lead">
                    Endlos Innovation's key to success in the recycling industry
                    lies in our superior assembly and testing capabilities. Our
                    experienced team is committed to ensuring that all of our
                    solutions are built to the highest standards of quality and
                    reliability. We use state-of-the-art assembly and testing
                    processes to ensure that our solutions are fully functional
                    and meet our client's needs and requirements. By delivering
                    superior assembly and testing services, we can provide our
                    clients with efficient, cost-effective, and environmentally
                    friendly solutions, driving innovation and sustainability in
                    the recycling industry.
                  </p>
                </div>
                {/* <div className="px-5 py-4">
                  <p className="fs-2 text-secondary">
                    Innovations and successes for the automotive industry
                  </p>
                  <div className="d-flex flex-xl-row justify-content-between flex-sm-column flex-column flex-md-column align-items-center gap-5">
                    <div className="d-flex flex-column">
                      <img src="https://www.endlos.com/-/media/endlos-corporate/images/system/contact_images/drake_larry.jpg" />
                      <small>
                        Automated car body construction: In our easily
                        convertible production cell, four robots joint the
                        components precisely within a few seconds.
                      </small>
                    </div>
                    <div className="py-2">
                      <ul>
                        <li>
                          The robots of our KR QUANTEC series are ideal for
                          catering to various requirements of the automotive
                          industry. For example, our portfolio includes the KR
                          QUANTEC nano F exclusive washers, the precise robots
                          of the KR QUANTEC extra family or the powerful
                          industrial robots of the KR QUANTEC ultra family.
                        </li>
                        <li>
                          The robots of our KR QUANTEC series are ideal for
                          catering to various requirements of the automotive
                          industry. For example, our portfolio includes the KR
                          QUANTEC nano F exclusive washers, the precise robots
                          of the KR QUANTEC extra family or the powerful
                          industrial robots of the KR QUANTEC ultra family.
                        </li>
                        <li>
                          The robots of our KR QUANTEC series are ideal for
                          catering to various requirements of the automotive
                          industry. For example, our portfolio includes the KR
                          QUANTEC nano F exclusive washers, the precise robots
                          of the KR QUANTEC extra family or the powerful
                          industrial robots of the KR QUANTEC ultra family.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
                <div className="px-3 py-2">
                  <h4 className=" text-secondary px-4">
                    Innovations and successes for the Recycling Industry
                  </h4>
                  <ul>
                    <li className="lead">
                      Endlos Innovation has a track record of innovation and
                      success in the recycling industry. Our cutting-edge
                      solutions have helped businesses and industries become
                      more sustainable and reduce their carbon footprint. We
                      have developed state-of-the-art sorting technology,
                      leveraging robotics and software to streamline and
                      optimize recycling.
                    </li>
                    <li className="lead">
                      We have also created new products from recycled materials,
                      contributing to creating a circular economy that conserves
                      natural resources and reduces waste. Our logistics and
                      infrastructure solutions ensure efficient and
                      cost-effective transportation and processing of recycled
                      materials. With our expertise and commitment to
                      sustainability, we continue to drive innovation and
                      success in the recycling industry, creating a better
                      future for all.
                    </li>
                  </ul>
                </div>
                <div className="py-4">
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
                </div>
                <div className="px-5 py-4">
                  <p className="lead px-5">
                    We are experts in the automotive sector and support you in
                    the further development of your production and logistics
                    processes with individual production and service concepts.
                    Discover here a variety of successful endlos solutions in
                    the automotive industry.
                  </p>
                </div>
                <div className="px-5 py-4">
                  <p className="fs-2 text-secondary">
                    You might also be interested in
                  </p>
                  <NewMultiSlider />
                </div>
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
    </>
  );
};

export default page;
