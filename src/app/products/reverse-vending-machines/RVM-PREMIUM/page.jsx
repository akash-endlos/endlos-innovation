"use client";
import React from "react";
import "./rvm-premium.css";
import {
  AiOutlineRight,
  AiOutlineDownload,
} from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import Overview from "@/app/components/tab-components/overview-component/Overview";
import TechnicalComponent from "@/app/components/tab-components/technical-component/TechnicalComponent";
import { usePathname } from "next/navigation";
import { rvmPremium } from "@/app/all-content/products/rvmPremium";
import { rvmPremiumEvenOddImageData } from "@/app/all-content/products/rvmPremiumEvenOddImageData";

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
            <span>RVM Premium</span> <AiOutlineRight />
          </p>
        </div>
        <div className="row">
          <div className="col-lg-9 py-5">
            <div className="position-relative">
              <img
                src="/images/RVM_premium_1440x678_3.jpg"
                alt="Product Image"
                className="img-fluid"
              />
              <div className="card-position">
                <div className=" p-4">
                  <strong className=" m-0 p-0">RVM PREMIUM</strong>
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
                  <StyledTab label="Technical Data" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <Overview EvenOddImagesData={rvmPremiumEvenOddImageData} />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <TechnicalComponent tableData={rvmPremium} />
              </TabPanel>
            </Box>
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
