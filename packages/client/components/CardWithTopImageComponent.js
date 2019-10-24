import React from 'react';

const CardWithTopImageComponent = ({
  category,
  title,
  description,
  image,
  articleId
}) => (
  <div className="col-md-4">
    <div className="card card-plain card-blog">
      <div className="card-header card-header-image">
        <a href={`/article?id=${articleId}`}>
          <img className="img img-raised" src={image} alt="mock-img" />
        </a>
      </div>
      <div className="card-body">
        <h6 className="card-category text-success">{category}</h6>
        <h4 className="card-title">
          <a href={`/article?id=${articleId}`}>{title}</a>
        </h4>
        <p className="card-description">
          {description}
          <a href={`/article?id=${articleId}`}> Read More </a>
        </p>
      </div>
    </div>
  </div>
);

export default CardWithTopImageComponent;
