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
      <div className="row">
        <div className="col-md-10 ml-auto mr-auto">
          <h2 className="title">Latest Blogposts</h2>
          <br />
          <div className="card card-plain card-blog">
            <div className="row">
              <div className="col-md-5">
                <div className="card-header card-header-image">
                  <a href="#pablito">
                    <img
                      className="img"
                      src="/static/material/assets/img/examples/card-blog4.jpg"
                      alt="mock-img"
                    />
                  </a>
                </div>
              </div>
              <div className="col-md-7">
                <h6 className="card-category text-info">Enterprise</h6>
                <h3 className="card-title">
                  <a href="#pablo">
                    Autodesk looks to future of 3D printing with Project Escher
                  </a>
                </h3>
                <p className="card-description">
                  Like so many organizations these days, Autodesk is a company
                  in transition. It was until recently a traditional boxed
                  software company selling licenses. Today, it’s moving to a
                  subscription model. Yet its own business model disruption is
                  only part of the story — and…
                  <a href="#pablo"> Read More </a>
                </p>
                <p className="author">
                  by
                  <a href="#pablo">
                    <b>Mike Butcher</b>
                  </a>
                  , 2 days ago
                </p>
              </div>
            </div>
          </div>
          <div className="card card-plain card-blog">
            <div className="row">
              <div className="col-md-7">
                <h6 className="card-category text-danger">
                  <i className="material-icons">trending_up</i> Trending
                </h6>
                <h3 className="card-title">
                  <a href="#pablo">
                    6 insights into the French Fashion landscape
                  </a>
                </h3>
                <p className="card-description">
                  Like so many organizations these days, Autodesk is a company
                  in transition. It was until recently a traditional boxed
                  software company selling licenses. Today, it’s moving to a
                  subscription model. Yet its own business model disruption is
                  only part of the story — and…
                  <a href="#pablo"> Read More </a>
                </p>
                <p className="author">
                  by
                  <a href="#pablo">
                    <b>Mike Butcher</b>
                  </a>
                  , 2 days ago
                </p>
              </div>
              <div className="col-md-5">
                <div className="card-header card-header-image">
                  <img
                    className="img img-raised"
                    src="/static/material/assets/img/office2.jpg"
                    alt="mock-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RandomPostsComponent;
