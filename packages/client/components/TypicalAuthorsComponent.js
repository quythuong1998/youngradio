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

class TypicalAuthorsComponent extends React.Component {
  //   componentWillMount() {
  //     this.props.getAllCategorySelector();
  //   }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 ml-auto mr-auto text-center">
            <h2 className="title">Typical authors</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card card-testimonial card-plain">
              <div className="card-avatar">
                <a href="#pablo">
                  <img
                    className="img"
                    src="/static/material/assets/img/faces/card-profile1-square.jpg"
                    alt="mock-img"
                  />
                </a>
              </div>
              <div className="card-body ">
                <h4 className="card-title">Mike Andrew</h4>
                <h6 className="card-category text-muted">
                  CEO @ Marketing Digital Ltd.
                </h6>
                <h5 className="card-description">
                  &quot;I speak yell scream directly at the old guard on behalf
                  of the future. I gotta say at that time I&#x2019;d like to
                  meet Kanye I speak yell scream directly at the old guard on
                  behalf of the future.&quot;
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-testimonial card-plain">
              <div className="card-avatar">
                <a href="#pablo">
                  <img
                    className="img"
                    src="/static/material/assets/img/faces/card-profile4-square.jpg"
                    alt="mock-img"
                  />
                </a>
              </div>
              <div className="card-body">
                <h4 className="card-title">Tina Thompson</h4>
                <h6 className="card-category text-muted">
                  Marketing @ Apple Inc.
                </h6>
                <h5 className="card-description">
                  &quot;I promise I will never let the people down. I want a
                  better life for all!!! Pablo Pablo Pablo Pablo! Thank you Anna
                  for the invite thank you to the whole Vogue team It
                  wasn&#x2019;t any Kanyes I love Rick Owens&#x2019; bed design
                  but the back is too high for the beams and angle of the
                  ceiling&quot;
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-testimonial card-plain">
              <div className="card-avatar">
                <a href="#pablo">
                  <img
                    className="img"
                    src="/static/material/assets/img/faces/card-profile6-square.jpg"
                    alt="mock-img"
                  />
                </a>
              </div>
              <div className="card-body ">
                <h4 className="card-title">Gina West</h4>
                <h6 className="card-category text-muted">CFO @ Apple Inc.</h6>
                <h5 className="card-description">
                  &quot;I&apos;ve been trying to figure out the bed design for
                  the master bedroom at our Hidden Hills compound... Roy&#xE8;re
                  doesn&apos;t make a Polar bear bed but the Polar bear. This is
                  a very nice testimonial about this company.&quot;
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TypicalAuthorsComponent;
