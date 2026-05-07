import React from "react";
import blog from "../../imgs/blog.jpg";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog">
      <div className="container">
        <p>
          Stay informed, inspired, and ahead of the trends. Welcome to our blog,
          your trusted source for insights, updates, and expert guidance. We
          share carefully crafted content to help you make smarter purchasing
          decisions, discover new products, and get the most out of your
          shopping experience. From in-depth product reviews and buying guides
          to the latest industry trends and styling inspiration, our articles
          are designed to add real value to your journey. Whether you’re
          exploring new arrivals or looking for practical tips, our blog is here
          to keep you informed and confident every step of the way.
        </p>
        <img src={blog} alt="blog img" />
      </div>
    </div>
  );
};

export default Blog;
