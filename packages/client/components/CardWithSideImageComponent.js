import React from 'react';
import Link from 'next/link';

const CardWithSideImageComponent = ({
  category,
  title,
  description,
  author,
  time,
  image,
  authorAvatar,
  authorId,
  articleId
}) => (
  <div className="col-lg-4 col-md-6">
    <div className="card card-blog">
      <div className="card-header card-header-image">
        <Link href={`/article?id=${articleId}`}>
          <a>
            <img className="img" alt="img" src={image} />
          </a>
        </Link>
      </div>
      <div className="card-body ">
        <h6 className="card-category text-success">{category}</h6>
        <h4 className="card-title">
          <Link href={`/article?id=${articleId}`}>
            <a>{title}</a>
          </Link>
        </h4>
        <p className="card-description">{description}</p>
      </div>
      <div className="card-footer ">
        <div className="author">
          <Link href={'/user?id=' + authorId}>
            <a>
              <img src={authorAvatar} alt="..." className="avatar img-raised" />
              <span>{author}</span>
            </a>
          </Link>
        </div>
        <div className="stats ml-auto">
          <i className="material-icons">schedule</i> {time}
        </div>
      </div>
    </div>
  </div>
);

export default CardWithSideImageComponent;
