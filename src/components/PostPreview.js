import React from "react";
import { NavLink } from "react-router-dom";
const PostPreview = ({ post, className = "" }) => {
  return (
    <div className={"post-preview"}>
      <h2 className="post-title">
        <NavLink to={`/post/${post.id}`}>{post.title}</NavLink>
      </h2>
    </div>
  );
};

export default PostPreview;
