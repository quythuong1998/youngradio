import Link from 'next/link';
import React from 'react';

class ShareComponent extends React.Component {
  render() {
    return (
      <>
        <div
          className="page-header header-filter header-small background-dashboard"
          data-parallax="true"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-8 ml-auto mr-auto text-center">
                <h1 className="title">Share Your Feeling</h1>
                <h4>
                  To get started, you will need to choose a plan for your needs.
                  You can opt in for the monthly of annual options and go with
                  one fo the three listed below.
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="main main-raised">
          <div className="container">
            <div className="features-2 text-center">
              <h2 className="title">What do you want to share?</h2>

              <div className="row d-flex justify-content-center">
                <Link href="/create-blog">
                  <div className="col-md-4">
                    <div className="card card-pricing bg-primary">
                      <div className="card-body ">
                        <div className="icon">
                          <i className="material-icons">post_add</i>
                        </div>
                        <h3 className="card-title">Normal article</h3>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href="/create-blog-radio">
                  <div className="col-md-4">
                    <div className="card card-pricing bg-warning">
                      <div className="card-body">
                        <div className="icon">
                          <i className="material-icons">radio</i>
                        </div>
                        <h3 className="card-title">Blog radio</h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .background-dashboard {
            background-image: url('/static/material/assets/img/bg10.jpg');
          }
        `}</style>
      </>
    );
  }
}

export default ShareComponent;
