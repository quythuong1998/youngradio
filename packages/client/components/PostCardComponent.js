import React from 'react';
import Link from 'next/link';

const PostCardComponent = ({
  col,
  category,
  title,
  description,
  image,
  articleId
}) => (
  <div className={`col-md-${col} d-flex align-items-stretch`}>
    <div className="card card-raised card-background card-background-img">
      <div className="card-body">
        <h6 className="card-category text-info">{category}</h6>
        <Link href={`/article?id=${articleId}`}>
          <a>
            <h3 className="card-title">{title}</h3>
          </a>
        </Link>
        <p className="card-description text-description">{description}</p>
        <Link href={`/article?id=${articleId}`}>
          <a className="btn btn-warning btn-round">
            <i className="material-icons">format_align_left</i> Read Article
          </a>
        </Link>
      </div>
    </div>
    <style jsx>{`
      .card-background-img {
        background-image: url("${image}");
      }

    `}</style>
  </div>
);

export default PostCardComponent;
