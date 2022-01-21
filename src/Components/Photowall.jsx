import React from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Photowall(props) {
  const { posts, onRemovePhoto } = props;
  return (
    <div>
      <Link to="/AddPhoto" className="addIcon"></Link>
      <div className="photoGrid">
        {posts
          .sort((a, b) => {
            return b.id - a.id;
          })
          .map((post, index) => (
            <Photo key={post.id} post={post} onRemovePhoto={onRemovePhoto} />
          ))}
      </div>
    </div>
  );
}

Photowall.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired,
};
