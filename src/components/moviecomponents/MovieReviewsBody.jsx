import * as React from "react";
import ReadMoreCollapse from "../shared/ReadMoreCollapse";
import { formatDate, tmdbImageSrc } from "../../utils";
import placeholder_avatar from "../../data/placeholder-userimage.png";

export default function MovieReviewsBody({ review }) {
  return (
    <div className="review">
      <div className="user">
        <img
          src={
            tmdbImageSrc(review.author_details.avatar_path, "w45")
              ? tmdbImageSrc(review.author_details.avatar_path, "w45")
              : placeholder_avatar
          }
          alt={"User Avatar"}
        />
      </div>
      <div className="commit">
        <div className="info">
          <p>
            Review by <span className="review__author">{review.author}</span> at{" "}
            <span>{formatDate(review.created_at)}</span>
          </p>
        </div>
        <ReadMoreCollapse content={review.content} />
      </div>
    </div>
  );
}
