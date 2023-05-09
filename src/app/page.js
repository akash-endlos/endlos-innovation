"use client";
import SwiperCarousel from "./components/feature/swiper-carousel/SwiperCarousel";
import "./page.css";
import ImageCardContainer from "./components/page-components/image-card-container/ImageCardContainer";
import CatelogWrapper from "./components/page-components/catelog-wrapper/CatelogWrapper";
import UpperContainer from "./components/page-components/upper-container/UpperContainer";
import {
  IndustriesCarouselSection,
  IndustriesImageCardContainer,
  IndustriesUpperContainer,
} from "./all-content/Industries";
import BlogComponent from "./blog-component/BlogComponent";

export default function Home() {
  return (
    <div>
      {/* <title>Welcome To Endlos Innovation</title> */}
      <SwiperCarousel data={IndustriesCarouselSection} />
      <div className="wrapper-case-studies py-5">
        <UpperContainer data={IndustriesUpperContainer} />
        <div className="horizontal-rule" />
        <ImageCardContainer data={IndustriesImageCardContainer} />
        <div className="horizontal-rule" />
        <CatelogWrapper />
        <div className="horizontal-rule" />
      </div>
      <div className="wrapper-case-studies">
       <BlogComponent/>
      </div>
    </div>
  );
}
