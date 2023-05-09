import Image from 'next/image';
import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import './blog.css'

const BlogComponent = () => {
    return (
        <>
            <div className="w-100 py-5">
                <div className="container px-5">
                    <h2 className='text-muted text-center'>Blog</h2>
                    <div className="d-flex justify-content-center">
                        <div className="row">
                            <div className='col-xl-4 py-5'>
                                <h4>Robot Systems</h4>
                                <p >
                                    endlos offers industrial robots in a wide range of versions with
                                    various payload capacities and reaches. Learn more!
                                </p>
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
                            <div className='col-xl-4 py-5'>
                                <h4>Robot Systems</h4>
                                <p >
                                    endlos offers industrial robots in a wide range of versions with
                                    various payload capacities and reaches. Learn more!
                                </p>
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
                            <div className='col-xl-4 py-5'>
                                <h4>Robot Systems</h4>
                                <p >
                                    endlos offers industrial robots in a wide range of versions with
                                    various payload capacities and reaches. Learn more!
                                </p>
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogComponent