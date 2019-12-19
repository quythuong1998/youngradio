import Link from 'next/link';
import React from 'react';
import { compose, withState } from 'recompose';
const withInputState = withState('stateInput', 'setStateInput', true);
const withVotingCodeState = withState('votingCode', 'setVotingCode', '');

const enhance = compose(
  withInputState,
  withVotingCodeState
);

class AdminDashboardComponent extends React.Component {
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
                <h1 className="title">Config YoungRadio</h1>
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
            <div className="features-2">
              <div className="row">
                <Link href="/admin-dashboard/manage-category">
                  <div className="col-md-4">
                    <div className="card card-pricing bg-info">
                      <div className="card-body ">
                        <div className="icon">
                          <i className="material-icons">category</i>
                        </div>
                        <h3 className="card-title">Manage Categories</h3>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href="/admin-dashboard/manage-article">
                  <div className="col-md-4">
                    <div className="card card-pricing bg-success">
                      <div className="card-body ">
                        <div className="icon">
                          <i className="material-icons">post_add</i>
                        </div>
                        <h3 className="card-title">Manage Articles</h3>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href="/admin-dashboard/manage-comment">
                  <div className="col-md-4">
                    <div className="card card-pricing bg-primary">
                      <div className="card-body ">
                        <div className="icon">
                          <i className="material-icons">post_add</i>
                        </div>
                        <h3 className="card-title">Manage Comments</h3>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href="/">
                  <div className="col-md-4">
                    <div className="card card-pricing bg-warning">
                      <div className="card-body ">
                        <div className="icon">
                          <i className="material-icons">
                            supervised_user_circle
                          </i>
                        </div>
                        <h3 className="card-title">Manage Users</h3>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href="/">
                  <div className="col-md-4">
                    <div className="card card-pricing bg-danger">
                      <div className="card-body ">
                        <div className="icon">
                          <i className="material-icons">
                            settings_applications
                          </i>
                        </div>
                        <h3 className="card-title">Others Setting</h3>
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

export default enhance(AdminDashboardComponent);
