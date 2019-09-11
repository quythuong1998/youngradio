import React from 'react';

const IndexDescriptionsComponent = () => (
  <div
    className="page-header header-filter header-small background-descriptions"
    data-parallax="true"
  >
    <div className="container">
      <div className="row">
        <div className="col-md-8 ml-auto mr-auto text-center">
          <h2 className="title">
            A Place for Young people to Share and Discover New Stories
          </h2>
        </div>
      </div>
    </div>
    <style jsx>{`
      .background-descriptions {
        background-image: url('/static/material/assets/img/bg10.jpg');
      }
    `}</style>
  </div>
);

export default IndexDescriptionsComponent;
