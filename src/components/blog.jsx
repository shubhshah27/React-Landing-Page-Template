// import React from "react";
// import { Link } from "react-router-dom";

// export const Blog = ({ data }) => {
//   return (
//     <div id="blog" className="text-center">
//       <div className="container">
//         <div className="section-title">
//           <h2>Blog</h2>
//           <p>Stay updated with the latest trends and tips on how to grow your business.</p>
//         </div>
//         <div className="row">
//           {data
//             ? data.map((post, i) => (
//                 <div key={`${post.title}-${i}`} className="col-md-4">
//                   <div className="blog-item card shadow-lg">
//                     <img
//                       src={post.image || "default-image.jpg"}
//                       alt={post.title}
//                       className="img-fluid card-img-top"
//                     />
//                     <div className="card-body">
//                       <h3 className="card-title">{post.title}</h3>
//                       <p className="card-text">{post.content.substring(0, 100)}...</p>
//                       <Link to={`/blog/${i}`} className="btn btn-primary">
//                         Read More
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             : "Loading..."}
//         </div>
//       </div>
//     </div>
//   );
// };
// src/components/blog.jsx

import React from "react";

export const Blog = ({ data }) => {
  return (
    <div id="blog" className="text-center blog-bottom">
      <div className="container">
        <div className="section-title">
          <h2 className="">Blog</h2>
          <p>Stay updated with the latest trends and tips on how to grow your business.</p>
        </div>
        <div className="row">
          {data
            ? data.map((post, i) => (
                <div key={`${post.title}-${i}`} className="col-md-4">
                  <div className="blog-item card shadow-lg">
                    <img
                      src={post.image || "default-image.jpg"}
                      alt={post.title}
                      className="img-fluid card-img-top"
                    />
                    <div className="card-body">
                      <h3 className="card-title">{post.title}</h3>
                      <p className="card-text">{post.content}</p>
                      {/* <Link to= "#" className="btn btn-primary">
                        Read More
                      </Link> */}
                    </div>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
