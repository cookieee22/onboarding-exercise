import React from "react";
import "./card.css";
import {FcDislike, FcLike} from 'react-icons/fc';

const Card = ({
  id,
  title,
  category,
  url,
  likes,
  dislikes,
  likeClick,
  disLikeClick,
}) => {
  return (
    <div className="card">
      <img src={url} alt={title} className="card--image" />
      <div className="card--body">
        <h1>
          <b>{title}</b>
        </h1>
        <p>
          category: <b>{category}</b>
        </p>
        <div className="card--poll">
          <button
            className="card-button--pill"
            id="like"
            onClick={() => likeClick(id, "like")}
          >
            <FcLike /> {likes}
          </button>
          <button
            className="card-button--pill"
            id="dislike"
            onClick={() => disLikeClick(id, "dislike")}
          >
            <FcDislike /> {dislikes}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
