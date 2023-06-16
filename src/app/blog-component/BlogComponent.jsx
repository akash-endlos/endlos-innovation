import Image from 'next/image';
import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import './blog.css'
import { blogContent } from '../all-content/blogContent';

const BlogComponent = () => {
  return (
    <div >
      {blogContent.map((item, index) => (
        <div class="container py-5">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <div class="d-flex align-items-center inner">
                <img src={item.img_src} alt="img1" class="blog-image-container img-fluid" />
              </div>
            </div>
            <div class="col-sm-12 col-md-6">
              <h4 class="justify h-auto">{item.title}</h4>
              <p class="justify">{item.content}</p>
            </div>
          </div>
        </div>

      ))}
    </div>
  )
}

export default BlogComponent



// import Image from 'next/image';
// import React from 'react'
// import { FaArrowCircleRight } from "react-icons/fa";
// import './blog.css'
// import { blogContent } from '../all-content/blogContent';

// const BlogComponent = () => {
//   return (
//     <>

// <div class="container pt-5">
//         <div class="row">
//         {blogContent.map((item, index) => (
//                 <div key={index} className='col-xl-4 py-5'>
//                   <div className="blog-item">
//                     <h4 className='justify pb-4 h-50'>{item.title}</h4>
//                     <div className='pb-5'>
//                       <div className='position-relative'>
//                         <div className='inner'>
//                           <img
//                             src={item.img_src}
//                             alt="img1"
//                            className='blog-image-container '
//                           />
//                         </div>
//                       </div>
//                     </div>
//                     <p className='justify'>{item.content}</p>
//                   </div>
//                 </div>
//               ))}
//         </div>
//       </div>
//     </>
//   )
// }

// export default BlogComponent