import Link from 'next/link'
import React from 'react'

const ProductsContainer = ({ products }) => {
    return (
        <>
            {
                products.map((item, index) => (
                    <div key={index} className="container my-5">
                        <div className="row gap-md-2 gap-xl-0">
                            <div className="col-xl-6 col-lg-12">
                                <img
                                    className="w-100 h-100 shadow"
                                    src={item.src}
                                />
                            </div>
                            <div className="col-xl-6 col-lg-12">
                                <div>
                                    <p className="fs-2">{item.title}</p>
                                    <p>
                                        {item.subtitle}
                                    </p>
                                </div>
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