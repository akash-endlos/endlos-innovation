import React, { useEffect, useRef, useState } from "react";
import { AiOutlineRight, AiOutlineClose } from "react-icons/ai";
import SwipeChildSection from "../swipe-child-section/SwipeChildSection";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const SwipeSection = ({ children, handleClose }) => {
  const router = useRouter();
  const [subChild, setsubChild] = useState([]);
  const [everyUpdataeChildData, seteveryUpdataeChildData] = useState([]);
  const [trigger, settrigger] = useState("");
  const path = usePathname();
  useEffect(() => {
    seteveryUpdataeChildData(subChild);
  }, [subChild]);
  const handleSetSubChildData = (subchildData, key) => {
    if (subchildData) {
      setsubChild(subchildData);
      settrigger(key);
    }
  };

  const NavigateOnClick = (link) => {
    if (link) {
      router.push(link);
      handleClose();
    }
  };
  return (
    <>
      <div className="scrollable-container py-5 box">
        {children.map((item, index) => (
          <div
            key={index}
            className="py-3 d-flex flex-column justify-content-center px-2"
          >
            <div
              className={`d-flex flex-row justify-content-between pointer ${
                item.parentItem === trigger || item.link === path
                  ? "text-color"
                  : ""
              }`}
            >
              <div onClick={() => NavigateOnClick(item.link)}>
                <Link href={item.link}>{item.parentItem}</Link>
              </div>
              {item?.subchildren && (
                <div
                  onClick={() =>
                    handleSetSubChildData(
                      item?.subchildren,
                      item?.subchildren[0].key
                    )
                  }
                  className={`${false && "right-icon"}`}
                >
                  <AiOutlineRight />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <SwipeChildSection
        trigger={trigger}
        settrigger={settrigger}
        handleClose={handleClose}
        subChild={everyUpdataeChildData}
      />
    </>
  );
};

export default SwipeSection;
