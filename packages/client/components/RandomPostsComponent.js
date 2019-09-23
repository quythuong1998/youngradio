import React from 'react';
// import { compose } from 'recompose';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// import {} from '../store/CategoryState';

// const connectToRedux = connect(
//   createStructuredSelector(
//     {
//       categories: getAllCategorySelector
//     },
//     dispatch => ({
//       getAllCategory: () => {
//         dispatch(getAllCategory());
//       }
//     })
//   )
// );

class RandomPostsComponent extends React.Component {
  //   componentWillMount() {
  //     this.props.getAllCategorySelector();
  //   }
  render() {
    return (
      <div className="section">
        <h3 className="title text-center">You may also be interested in</h3>
        <ul className="nav nav-pills nav-pills-primary justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" href="#pill1" data-toggle="tab">
              All
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#pill2" data-toggle="tab">
              World
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#pill3" data-toggle="tab">
              Arts
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#pill3" data-toggle="tab">
              Tech
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#pill3" data-toggle="tab">
              Business
            </a>
          </li>
        </ul>
        {/* <div className="tab-content tab-space">
              <div className="tab-pane active" id="pill1">
                bla bla
              </div>
              <div className="tab-pane" id="pill2">
                {' '}
                bla bla2
              </div>
              <div className="tab-pane" id="pill3">
                {' '}
                bla bl3
              </div>
              <div className="tab-pane" id="pill4">
                {' '}
                bla bl4
              </div>
            </div> */}

        <div className="row">
          <div className="col-md-4">
            <div className="card card-plain card-blog">
              <div className="card-header card-header-image">
                <a href="#pablo">
                  <img
                    className="img img-raised"
                    src="/static/material/assets/img/bg5.jpg"
                    alt="mock-img"
                  />
                </a>
              </div>
              <div className="card-body">
                <h6 className="card-category text-info">Enterprise</h6>
                <h4 className="card-title">
                  <a href="#pablo">
                    Autodesk looks to future of 3D printing with Project Escher
                  </a>
                </h4>
                <p className="card-description">
                  Like so many organizations these days, Autodesk is a company
                  in transition. It was until recently a traditional boxed
                  software company selling licenses.
                  <a href="#pablo"> Read More </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-plain card-blog">
              <div className="card-header card-header-image">
                <a href="#pablo">
                  <img
                    className="img img-raised"
                    src="/static/material/assets/img/examples/blog5.jpg"
                    alt="mock-img"
                  />
                </a>
              </div>
              <div className="card-body">
                <h6 className="card-category text-success">Startups</h6>
                <h4 className="card-title">
                  <a href="#pablo">
                    Lyft launching cross-platform service this week
                  </a>
                </h4>
                <p className="card-description">
                  Like so many organizations these days, Autodesk is a company
                  in transition. It was until recently a traditional boxed
                  software company selling licenses.
                  <a href="#pablo"> Read More </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-plain card-blog">
              <div className="card-header card-header-image">
                <a href="#pablo">
                  <img
                    className="img img-raised"
                    src="/static/material/assets/img/examples/blog6.jpg"
                    alt="mock-img"
                  />
                </a>
              </div>
              <div className="card-body">
                <h6 className="card-category text-danger">
                  <i className="material-icons">trending_up</i> Enterprise
                </h6>
                <h4 className="card-title">
                  <a href="#pablo">
                    6 insights into the French Fashion landscape
                  </a>
                </h4>
                <p className="card-description">
                  Like so many organizations these days, Autodesk is a company
                  in transition. It was until recently a traditional boxed
                  software company selling licenses.
                  <a href="#pablo"> Read More </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RandomPostsComponent;
