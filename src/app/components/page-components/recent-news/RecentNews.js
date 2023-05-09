import React from "react";
import "./recent-news.css";
import { Divider } from "@mui/material";
import Image from "next/image";

const RecentNews = () => {
  return (
    <div className="w-100 news-background">
      <div className="container-fluid py-5">
        <h1 className="text-center text-white">Recent News</h1>
        <div className="line-wrapper">
          <hr className="line" />
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <div className="row ">
            <div className="col-6">
              <Image src="/assets/img/blog/1.jpg" width={100} height={100} />
            </div>
            <div className="col-6">
              <div>asdsds</div>
              <div>asdsds</div>
              <div>asdsds</div>
              <div>asdsds</div>
              <div>asdsds</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentNews;
