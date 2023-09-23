import React, { useState } from "react";
import { Heading } from "../common/Heading";
import { blog } from "../data/dummydata";

export const Blog = () => {
  return (
    <section className="blog">
      <div className="container">
        <Heading title="Blog" />
        <div className="content grid3">
          {blog.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BlogPost = ({ post }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  return (
    <div className="box" data-aos="flip-left">
      <div className="img" data-aos="flip-up">
        <img src={post.cover} alt="" data-aos="flip-down" />
      </div>
      <div className="text">
        <h3 data-aos="fade-right">{post.title}</h3>
        <label data-aos="fade-left">
          {post.author} - {post.date}
        </label>
        {showFullContent ? (
          <p data-aos="fade-up-right">{post.content}</p>
        ) : (
          <p data-aos="fade-up-right">{post.summary}</p>
        )}
        <div
          className="read-toggle"
          onClick={() => setShowFullContent(!showFullContent)}
        >
          {showFullContent ? "Read Less" : "Read More"}
        </div>
      </div>
    </div>
  );
};


