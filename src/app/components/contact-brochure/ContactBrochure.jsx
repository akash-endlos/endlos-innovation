import React from 'react'
import { AiOutlineDownload } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs'

const ContactBrochure = () => {
  return (
    <div className="col-lg-3 mt-4 mt-lg-0">
    <div className="p-5">
      <p className="fs-4"> Contact</p>
      <div className="d-flex justify-content-lg-start justify-content-md-start justify-content-center align-items-center">
        <hr style={{ width: "500px" }} />
      </div>
      <p className="fs-5">Sales</p>
      <p> Phone<a href=""> +91 97278 02087</a></p>
      <span className="text-success pointer">
        Email <BsArrowRight />{" "}
        <a href="mailto:info@endlos.in">info@endlos.in</a>
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
  )
}

export default ContactBrochure