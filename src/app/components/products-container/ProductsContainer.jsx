import Link from 'next/link'
import React from 'react'

const ProductsContainer = ({ products,newproduct=false}) => {
    return (
        <>
            {
                products.map((item, index) => (
                    <div key={index} className="container my-5">
                        <div className="row gap-xl-0">
                            <div className="col-12 col-xl-6 col-lg-6 position-relative">
                                <img
                                    className="img-fluid shadow"
                                    src={item.src}
                                />
                                {newproduct && <div className="ribbon">New</div>}
                            </div>
                            <div className="col-12 col-xl-6 col-lg-6">
                                <p className="fs-2">{item.title}</p>
                                <p>
                                    {item.subtitle}
                                </p>
                                <Link href={item.link}> <div className="btn btn-dark">To The Product</div></Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default ProductsContainer