import Image from 'next/image';
import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import './blog.css'
import { blogContent } from '../all-content/blogContent';

const BlogComponent = () => {
  return (
    <>

<div class="container pt-5">
        <div class="row">
        {blogContent.map((item, index) => (
                <div key={index} className='col-xl-4 py-5'>
                  <div className="blog-item">
                    <h4 className='justify pb-4'>{item.title}</h4>
                    <div className='pb-5'>
                      <div className='position-relative'>
                        <div className='inner'>
                          <img
                            src={item.img_src}
                            alt="img1"
                           className='blog-image-container '
                          />
                        </div>
                        {/* <div className="blog-arrow-on-image">
                          <FaArrowCircleRight size={60} />
                        </div> */}
                      </div>
                    </div>
                    <p className='justify'>{item.content}</p>
                  </div>
                </div>
              ))}
        </div>
      </div>
      {/* <div className="w-100 py-5">
        <div className="container px-5">
          <h2 className='text-muted text-center'>Blog</h2>
          <div className="d-flex justify-content-center">
            <div className="row">
              {blogContent.map((item, index) => (
                <div key={index} className='col-xl-4 py-5'>
                  <div className="blog-item">
                    <h4 className='justify pb-4'>{item.title}</h4>
                    <div className='pb-5'>
                      <div className='position-relative'>
                        <div className="inner">
                          <img
                            src="/assets/img/blog/3.jpg"
                            alt="img1"
                            className="image-container img-fluid"
                          />
                        </div>
                        <div className="blog-arrow-on-image">
                          <FaArrowCircleRight size={60} />
                        </div>
                      </div>
                    </div>
                    <p className='justify'>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default BlogComponent