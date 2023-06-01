import Image from 'next/image';
import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import './blog.css'
import { blogContent } from '../all-content/blogContent';

const BlogComponent = () => {
    return (
        <>
            <div className="w-100 py-5">
                <div className="container px-5">
                    <h2 className='text-muted text-center'>Blog</h2>
                    <div className="d-flex justify-content-center">
                        <div className="row">
                            {blogContent.map((item, index) => (
                                <div className='col-xl-4 py-5'>
                                    <div className="blog-item">
                                        <div style={{ height: "350px" }}>
                                            <h4>{item.title}</h4>
                                            <p>{item.content}</p>
                                        </div>
                                        <div className='position-relative'>
                                            <div className="inner">
                                                <img
                                                    src="/assets/img/blog/3.jpg"
                                                    alt="img1"
                                                    className="image-container"
                                                />
                                            </div>
                                            <div className="blog-arrow-on-image ">
                                                <FaArrowCircleRight size={60} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogComponent