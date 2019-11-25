import React from 'react';

class HomePageLayout extends React.Component {
  render() {
    return (
      <div
        className="page-header header-filter header-small background-dashboard"
        data-parallax="true"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8 ml-auto mr-auto text-center">
              <h1 className="title">Config YoungRadio</h1>
              <h4>
                To get started, you will need to choose a plan for your needs.
                You can opt in for the monthly of annual options and go with one
                fo the three listed below.
              </h4>
            </div>
          </div>
        </div>
        <style jsx>{`
          .background-dashboard {
            background-image: url('/static/material/assets/img/bg10.jpg');
          }
        `}</style>
      </div>
    );
  }
}

export default HomePageLayout;
