import React from "react";
import "./location-wrapper.css";
import Image from "next/image";
import { ImLocation } from 'react-icons/im'
import {AiOutlineMail} from 'react-icons/ai'
import {FiPhone} from 'react-icons/fi'

const LocationWrapper = () => {
  return (
    <div className="container p-5 my-5">
      <div className="card rounded">
        <div className="row no-gutters d-flex align-items-center">
          <div className="col-lg-8 ">
            <img src="/map.svg" alt="img1" className="image" />
          </div>
          <div className="col-lg-4">
            <div className="card-body d-flex align-items-center flex-column gap-5">
              <div className="text-center">
                <h5 className="card-title text-muted my-5">
                  ENDLOS INNOVATIONS
                </h5>
                <p><ImLocation size={30} /></p>
                <address>
                  Plot No 286, Near Valinath Dhamatwan Talav, Road, near Somnath Estate, near Avi Steel Processors, Bakrol, Dhamatwan, Gujarat 382435
                </address>
                <p><FiPhone size={30} /></p>
                <p>Phone: +91 97278 02087</p>
                <p><AiOutlineMail size={30} /></p>
                <p>info@endlos.in</p>
              </div>
              {/* <div className="arrowicon-in-circle">
                <IconContext.Provider value={{ color: "gray", size: 30 }}>
                  <HiOutlineArrowRight
                    className="pointer"
                    width={120}
                    height={24}
                  />
                </IconContext.Provider>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationWrapper;
