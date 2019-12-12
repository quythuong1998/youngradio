import React from 'react';

const ArticleDescriptionComponent = ({ title, description, image }) => (
  <div className="page-header header-filter background-article">
    <div className="container">
      <div className="row">
        <div className="col-md-8 ml-auto mr-auto text-center">
          <h1 className="title">{title}</h1>
          <h4>{description}</h4>
          <br />
          <a href="#content-section" className="btn btn-rose btn-round btn-lg">
            <i className="material-icons">format_align_left</i> Read Article
          </a>
        </div>
      </div>
    </div>
    <style jsx>
      {`
          .background-article {
              background-image: url("${image}");  
          }
          .page-header{
            margin-top: -25px;
          }
        `}
    </style>
  </div>
);

export default ArticleDescriptionComponent;
