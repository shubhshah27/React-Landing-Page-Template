// import React from "react";
// import { useParams } from "react-router-dom";
// import JsonData from "../data/data.json";
// // import './BlogDetails.css'; // Importing custom CSS for the blog details page

// export const BlogDetails = () => {
//   const { id } = useParams(); // Get the blog ID from the URL
//   const post = JsonData.Blog[id]; // Access the blog post data using the ID

//   console.log(post.image);
//   if (!post) {
//     return <div className="container"><h2>Blog post not found!</h2></div>;
//   }

//   return (
//     <div className="blog-details container">
//       <div className="blog-header">
//         <h1>{post.title}</h1>
//         <img src={post.image} alt={post.title} className="img-fluid" />
//       </div>
//       <div className="blog-content">
//         <p>{post.content}</p>
//       </div>
//     </div>
//   );
// };
// src/page/BlogDetails.jsx

import React from "react";
import { useParams } from "react-router-dom";
import JsonData from "../data/data.json"; // Assuming your data is in this file

export const BlogDetails = () => {
  const { id } = useParams(); // Extracting blog ID from URL
  const blogPost = JsonData.Blog.find(post => post.title.replace(/\s+/g, '-').toLowerCase() === id);

  console.log(blogPost.image)
  if (!blogPost) {
    return <p>Blog post not found</p>;
  }

  return (
    <div className="blog-details container">
      <div className="section-title text-center">
        <h2>{blogPost.title}</h2>
      </div>
      <div className="blog-content">
        <img src={`${blogPost.image}`} alt={blogPost.title} className="img-fluid" />
        <p>{blogPost.content}</p>
      </div>
    </div>
  );
};
