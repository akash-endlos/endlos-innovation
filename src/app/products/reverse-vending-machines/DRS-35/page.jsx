"use client";
import React from "react";
import "./drs-35.css";
import {
  AiOutlineRight,
  AiOutlineDownload,
  AiOutlineRead,
} from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Overview from "@/app/components/tab-components/overview-component/Overview";
import ProductCarousel from "@/app/components/feature/product-carousel/ProductCarousel";
import Automation from "@/app/components/tab-components/automation-software-component/Automation";
import Equipment from "@/app/components/tab-components/equipment-component/Equipment";
import TechnicalComponent from "@/app/components/tab-components/technical-component/TechnicalComponent";
import { usePathname } from "next/navigation";
import ImageCardContainer from "@/app/components/page-components/image-card-container/ImageCardContainer";
import NewProductCarousel from "@/app/components/feature/product-carousel/NewProductCarousel";
import { FaSquare } from "react-icons/fa";
import { rvmDRSNEW35 } from "@/app/all-content/products/rvmDRS35NEW";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const page = () => {
  const path = usePathname();
  const splittedPath = path.split("/");
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const StyledTab = styled(Tab)({
    "&.Mui-selected": {
      color: "#FF7722",
    },
  });
  return (
    <>
      <div className="final-product-page-container">
        <div className="d-flex align-items-center gap-2 px-5 pt-5">
          <p>
            <span>Home</span> <AiOutlineRight />
          </p>
          <p>
            <span>Products</span> <AiOutlineRight />
          </p>
          <p>
            <span>Reverse Vending Machine</span> <AiOutlineRight />
          </p>
          <p>
            <span>RVM DRS 35</span> <AiOutlineRight />
          </p>
        </div>
        <div className="row">
          <div className="col-lg-9 py-5">
            <div className="position-relative">
              <img
                src="https://www.trumpf.com/filestorage/TRUMPF_Processed/_processed_/1/1/csm_TruLaser-3030-L20-product-picture_071755114c_37d7b79484.jpg"
                alt="Product Image"
                className="img-fluid"
              />
              <div className="card-position">
                <div className=" p-4">
                  <strong className=" m-0 p-0 fs-2">RVM DRS 35</strong>
                  {/* <p className='fs-2'>TruLaser 3030 / 3040</p> */}
                  {/* <p>Optimum quality with CO2 lasers</p> */}
                  {/* <Button sx={{ background: "#FF7722" }} variant='contained'>Request Offer</Button> */}
                </div>
              </div>
            </div>
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Tabs
                  TabIndicatorProps={{
                    style: {
                      backgroundColor: "#FF7722",
                    },
                  }}
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                >
                  <StyledTab label="Overview" {...a11yProps(0)} />
                  {/* <StyledTab label="Technical Data" {...a11yProps(2)} /> */}
                  <StyledTab label="Technical Data" {...a11yProps(1)} />
                  {/* <StyledTab label="Equipment" {...a11yProps(3)} />
                  <StyledTab label="Software" {...a11yProps(4)} />
                  <StyledTab label="Automation" {...a11yProps(5)} /> */}
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <Overview />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <TechnicalComponent tableData={rvmDRSNEW35} />
                {/* <div className='mx-5 my-5'>
                  <div className='row mx-5'>
                    <div className='col-xl-6'>
                      <div className='py-3 fw-bold d-flex align-items-center gap-2 lead'> <FaSquare color='#FF7722' /> Perfect introduction, perfect addition</div>
                      <div className='lead pb-5'>Perfect economy even with low to medium utilization</div>
                      <div className='d-flex align-items-center '>
                        <hr style={{ width: "600px" }} />
                      </div>
                    </div>
                    <div className='col-xl-6'>
                      <div className='py-3 fw-bold d-flex align-items-center gap-2 lead'> <FaSquare color='#FF7722' /> High quality</div>
                      <div className='lead pb-3'>Intuitive operation with Touchpoint control, and easy to get started thanks to integrated cutting data</div>
                      <div className='d-flex align-items-center '>
                        <hr style={{ width: "600px" }} />
                      </div>
                    </div>
                    <div className='col-xl-6'>
                      <div className='py-3 fw-bold d-flex align-items-center gap-2 lead'> <FaSquare color='#FF7722' /> Save money, protect the environment</div>
                      <div className='lead pb-5'>Energy-efficient process cooler for laser and machine</div>
                      <div className='d-flex align-items-center '>
                        <hr style={{ width: "600px" }} />
                      </div>
                    </div>
                    <div className='col-xl-6'>
                      <div className='py-3 fw-bold d-flex align-items-center gap-2 lead'> <FaSquare color='#FF7722' /> Safe laser cutting</div>
                      <div className='lead pb-3'>Maximum safety during operation thanks to enclosed protective housing and beam guard</div>
                      <div className='d-flex align-items-center '>
                        <hr style={{ width: "600px" }} />
                      </div>
                    </div>
                    <div className='col-xl-6'>
                      <div className='py-3 fw-bold d-flex align-items-center gap-2 lead'> <FaSquare color='#FF7722' /> Safe laser cutting</div>
                      <div className='lead pb-3'>Maximum safety during operation thanks to enclosed protective housing and beam guard</div>
                      <div className='d-flex align-items-center '>
                        <hr style={{ width: "600px" }} />
                      </div>
                    </div>
                    <div className='col-xl-6'>
                      <div className='py-3 fw-bold d-flex align-items-center gap-2 lead'> <FaSquare color='#FF7722' />Automation made easy</div>
                      <div className='lead pb-5'>Autonomous work is possible</div>
                      <div className='d-flex align-items-center '>
                        <hr style={{ width: "600px" }} />
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <ProductCarousel MarginValue={'my-5'} textClasses={'text-center py-5'} /> */}
              </TabPanel>
              {/* <TabPanel value={value} index={2}>
                <TechnicalComponent />
              </TabPanel> */}
              {/* <TabPanel value={value} index={3}>
                <Equipment/>
              </TabPanel>
              <TabPanel value={value} index={4}>
              <Automation/>
              </TabPanel>
              <TabPanel value={value} index={5}>
                <Automation/>
              </TabPanel> */}
            </Box>
            {/* <div className='container-background mt-5'>
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
          </div>
          <div className="col-lg-3 mt-4 mt-lg-0">
            <div className="p-5">
              <p className="fs-4"> Contact</p>
              <div className="d-flex justify-content-lg-start justify-content-md-start justify-content-center align-items-center">
                <hr style={{ width: "500px" }} />
              </div>
              <p className="fs-5">Sales</p>
              <a href="">
                <soan>Phone </soan> 020 6675 9800
              </a>
              <p>
                <span>Email </span> info@endlos.in
              </p>
              <span className="text-success pointer">
                Email <BsArrowRight />{" "}
              </span>
              {/* <div className="mt-4 ">
                <p className="fs-4">Services</p>
                <div className='d-flex justify-content-lg-start justify-content-md-start justify-content-center align-items-center'>
                  <hr style={{ width: "500px" }} />
                </div>
                <div className="d-flex gap-4 align-items-center mb-4">
                  <div>Icon</div>
                  <div>
                    <p className="m-0 p-0">Training Courses</p>
                    <span className="text-success pointer">Find out More <BsArrowRight /> </span>
                  </div>
                </div>
                <div className="d-flex gap-4 align-items-center mb-4">
                  <div>Icon</div>
                  <div>
                    <p className="m-0 p-0">Training Courses</p>
                    <span className="text-success pointer">Find out More <BsArrowRight /> </span>
                  </div>
                </div>
                <div className="d-flex gap-4 align-items-center mb-4">
                  <div>Icon</div>
                  <div>
                    <p className="m-0 p-0">Training Courses</p>
                    <span className="text-success pointer">Find out More <BsArrowRight /> </span>
                  </div>
                </div>
                <div className="d-flex gap-4 align-items-center mb-4">
                  <div>Icon</div>
                  <div>
                    <p className="m-0 p-0">Training Courses</p>
                    <span className="text-success pointer">Find out More <BsArrowRight /> </span>
                  </div>
                </div>
              </div> */}
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
        </div>
      </div>
    </>
  );
};

export default page;
