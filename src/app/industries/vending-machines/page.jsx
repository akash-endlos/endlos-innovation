"use client";
import React, { useEffect, useState } from "react";
import "./vending-machines.css";
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
              <h1 className="text-white font-weight-bold fs-1">Recycling Machines</h1>
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
                    <div>Vending Machines</div> <div><AiOutlineRight /></div>
                  </div>
                </div>
                <div className="container py-2">
                  {/* <h1 className="text-secondary text-center font-weight-bold py-5">
                    Automation in the Recycling Industry
                  </h1> */}
                  <p className="lead justify py-4">
                    At Endlos Innovation! We are passionate about revolutionizing the vending machine industry. Here's some information about vending machines, their history, and our innovative solutions.
                  </p>
                </div>
                <div >
                  <h4 className="py-2 text-secondary">
                    History of Vending Machines
                  </h4>
                  <p className="lead justify">
                    At Endlos Innovation, we are at the forefront of transforming the vending machine industry. Our innovative solutions aim to enhance user experience, increase efficiency, and offer greater convenience. Here are some of our key offerings:

                  </p>
                </div>
                <h4 className="py-2 text-secondary">
                  Innovative Solutions by Endlos Innovation

                </h4>
                <div className="px-4">
                  <p className="lead justify">
                    <span className="fw-bold text-secondary fs-5">Smart Vending Machines : </span>  Our vending machines have cutting-edge technology like IoT connectivity and advanced sensors. This enables real-time inventory tracking, remote management, and data analytics, ensuring optimal performance and minimizing downtime.



                  </p>
                  <p className="lead justify">
                    <span className="fw-bold text-secondary fs-5">Cashless Payment Systems : </span>   We have integrated secure and convenient cashless payment options into our vending machines. Users can now pay using various methods, including credit cards, mobile wallets, and contactless payments, making transactions faster and more seamless.

                  </p>
                  <p className="lead justify">
                    <span className="fw-bold text-secondary fs-5">Interactive Touchscreen Displays : </span> Our vending machines feature interactive touchscreen displays, providing a user-friendly interface for browsing and selecting products. This engaging experience improves customer satisfaction and encourages impulse purchases.



                  </p>
                  <p className="lead justify">
                    <span className="fw-bold text-secondary fs-5">Product Diversification : </span>  Endlos Innovation offers vending machines tailored to specific product categories, such as snacks, beverages, and health foods. We work closely with our clients to customize product offerings based on consumer preferences and market trends.


                  </p>
                  <p className="lead justify">
                    <span className="fw-bold text-secondary fs-5">Sustainability Initiatives : </span> We are committed to promoting eco-friendly practices. Our vending machines are designed to be energy-efficient, utilizing LED lighting and low-power modes. We also encourage using recyclable materials and collaborating with suppliers prioritising sustainable sourcing.
                  </p>
                  <p className="lead justify">
                    <span className="fw-bold text-secondary fs-5"> Real-Time Data Analytics : </span> Leveraging the power of data, our vending machines provide real-time insights into consumer behavior, inventory management, and sales trends. This valuable information helps businesses make informed decisions and optimize their vending operations.

                  </p>
                </div>
                <h4 className="py-2 text-secondary">
                  Partner with Endlos Innovation
                </h4>
                <p className="lead justify text-secondary">By partnering with Endlos Innovation, you can use our expertise and cutting-edge solutions to revolutionize your vending machine business. We are dedicated to providing high-quality products, exceptional customer service, and continuous innovation.
                </p>
                <p className="lead justify text-secondary">Discover the endless possibilities with Endlos Innovation. Contact us today to explore how our vending machine solutions can elevate your business.
                </p>
                {/* <div className="px-5">
                  <h4 className="py-2 px-2 text-secondary">
                    Challenges in the Recycling Industry
                  </h4>
                  <p className="lead justify">
                    Recycling is a crucial process that helps reduce waste,
                    conserve natural resources, and minimize the impact of human
                    activities on the environment. However, the recycling
                    industry faces several challenges hindering its growth and
                    sustainability. As an innovative solution provider, Endlos
                    Innovation understands these challenges and strives to
                    overcome them through cutting-edge technology and innovative
                    approaches.
                  </p>
                  <p className="lead justify">
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
                <div className="px-5 py-1">
                  <h4 className="text-secondary">
                    Solutions for the Recycling Industry
                  </h4>
                  <p className="lead justify">
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
                  <p className="lead justify">
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
                  <p className="lead justify">
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
                  <p className="lead justify">
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
                <div className="px-3 py-2">
                  <h4 className=" text-secondary px-4">
                    Innovations and successes for the Recycling Industry
                  </h4>
                  <ul>
                    <li className="lead justify">
                      Endlos Innovation has a track record of innovation and
                      success in the recycling industry. Our cutting-edge
                      solutions have helped businesses and industries become
                      more sustainable and reduce their carbon footprint. We
                      have developed state-of-the-art sorting technology,
                      leveraging robotics and software to streamline and
                      optimize recycling.
                    </li>
                    <li className="lead justify">
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
                <p className="lead">
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
