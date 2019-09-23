import React from 'react';

const CardWithSideImageComponent = ({
  category,
  title,
  description,
  author,
  time,
  image,
  imageLeft = true
}) => (
  <React.Fragment>
    {imageLeft === true ? (
      <div className="card card-plain card-blog">
        <div className="row">
          <div className="col-md-5 d-flex align-items-center">
            <div className="card-header card-header-image">
              <a href="#pablito">
                <img className="img" src={image} alt="mock-img" />
              </a>
            </div>
          </div>
          <div className="col-md-7">
            <h6 className="card-category text-info">{category}</h6>
            <h3 className="card-title">
              <a href="#pablo">{title}</a>
            </h3>
            <p className="card-description">
              {description}
              <a href="#pablo"> Read More </a>
            </p>
            <p className="author">
              by
              <a href="#pablo">
                <b> {author}</b>
              </a>
              , {time}
            </p>
          </div>
        </div>
      </div>
    ) : (
      <div className="card card-plain card-blog">
        <div className="row">
          <div className="col-md-7">
            <h6 className="card-category text-info">{category}</h6>
            <h3 className="card-title">
              <a href="#pablo">{title}</a>
            </h3>
            <p className="card-description">
              {description}
              <a href="#pablo"> Read More </a>
            </p>
            <p className="author">
              by
              <a href="#pablo">
                <b> {author}</b>
              </a>
              , {time}
            </p>
          </div>
          <div className="col-md-5 d-flex align-items-center">
            <div className="card-header card-header-image">
              <a href="#pablito">
                <img className="img" src={image} alt="mock-img" />
              </a>
            </div>
          </div>
        </div>
      </div>
    )}
  </React.Fragment>
);

export default CardWithSideImageComponent;
