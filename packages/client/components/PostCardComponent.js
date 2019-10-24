import React from 'react';

const PostCardComponent = ({
  col,
  category,
  title,
  description,
  image,
  articleId
}) => (
  <div className={`col-md-${col}`}>
    <div className="card card-raised card-background card-background-img">
      <div className="card-body">
        <h6 className="card-category text-info">{category}</h6>
        <a href={`/article?id=${articleId}`}>
          <h3 className="card-title">{title}</h3>
        </a>
        <p className="card-description">{description}</p>
        <a
          href={`/article?id=${articleId}`}
          className="btn btn-warning btn-round"
        >
          <i className="material-icons">format_align_left</i> Read Article
        </a>
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
