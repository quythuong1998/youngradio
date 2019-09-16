import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

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
class IndexBodyComponent extends React.Component {
  //   componentWillMount() {
  //     this.props.getAllCategorySelector();
  //   }

  render() {
    return (
      <div className="main main-raised">
        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col-md-8 ml-auto mr-auto text-center">
                <h2 className="title">From my heart with love ...</h2>
                <ul className="nav nav-pills nav-pills-primary justify-content-center">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="#pill1"
                      data-toggle="tab"
                    >
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
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card card-raised card-background background-1">
                <div className="card-body">
                  <h6 className="card-category text-info">Worlds</h6>
                  <a href="#pablo">
                    <h3 className="card-title">
                      The Best Productivity Apps on Market
                    </h3>
                  </a>
                  <p className="card-description">
                    Don't be scared of the truth because we need to restart the
                    human foundation in truth And I love you like Kanye loves
                    Kanye I love Rick Owens’ bed design but the back is...
                  </p>
                  <a href="#pablo" className="btn btn-danger btn-round">
                    <i className="material-icons">format_align_left</i> Read
                    Article
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-raised card-background background-2">
                <div className="card-body">
                  <h6 className="card-category text-info">Business</h6>
                  <h3 className="card-title">
                    Working on Wallstreet is Not So Easy
                  </h3>
                  <p className="card-description">
                    Don't be scared of the truth because we need to restart the
                    human foundation in truth And I love you like Kanye loves
                    Kanye I love Rick Owens’ bed design but the back is...
                  </p>
                  <a href="#pablo" className="btn btn-primary btn-round">
                    <i className="material-icons">format_align_left</i> Read
                    Article
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="card card-raised card-background background-3">
                <div className="card-body">
                  <h6 className="card-category text-info">Marketing</h6>
                  <h3 className="card-title">
                    0 to 100.000 Customers in 6 months
                  </h3>
                  <p className="card-description">
                    Don't be scared of the truth because we need to restart the
                    human foundation in truth And I love you like Kanye loves
                    Kanye I love Rick Owens’ bed design but the back is...
                  </p>
                  <a href="#pablo" className="btn btn-warning btn-round">
                    <i className="material-icons">subject</i> Read Case Study
                  </a>
                  <a
                    href="#pablo"
                    className="btn btn-white btn-just-icon btn-link"
                    title=""
                    rel="tooltip"
                    data-original-title="Save to Pocket"
                  >
                    <i className="fa fa-get-pocket"></i>
                  </a>
                </div>
              </div>
            </div>
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
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <h6 className="card-category text-info">Enterprise</h6>
                      <h3 className="card-title">
                        <a href="#pablo">
                          Autodesk looks to future of 3D printing with Project
                          Escher
                        </a>
                      </h3>
                      <p className="card-description">
                        Like so many organizations these days, Autodesk is a
                        company in transition. It was until recently a
                        traditional boxed software company selling licenses.
                        Today, it’s moving to a subscription model. Yet its own
                        business model disruption is only part of the story —
                        and…
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
                        Like so many organizations these days, Autodesk is a
                        company in transition. It was until recently a
                        traditional boxed software company selling licenses.
                        Today, it’s moving to a subscription model. Yet its own
                        business model disruption is only part of the story —
                        and…
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
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* NEW */}
          <div className="section">
            <h3 className="title text-center">You may also be interested in</h3>
            <br />
            <div className="row">
              <div className="col-md-4">
                <div className="card card-plain card-blog">
                  <div className="card-header card-header-image">
                    <a href="#pablo">
                      <img
                        className="img img-raised"
                        src="/static/material/assets/img/bg5.jpg"
                      />
                    </a>
                  </div>
                  <div className="card-body">
                    <h6 className="card-category text-info">Enterprise</h6>
                    <h4 className="card-title">
                      <a href="#pablo">
                        Autodesk looks to future of 3D printing with Project
                        Escher
                      </a>
                    </h4>
                    <p className="card-description">
                      Like so many organizations these days, Autodesk is a
                      company in transition. It was until recently a traditional
                      boxed software company selling licenses.
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
                      Like so many organizations these days, Autodesk is a
                      company in transition. It was until recently a traditional
                      boxed software company selling licenses.
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
                      Like so many organizations these days, Autodesk is a
                      company in transition. It was until recently a traditional
                      boxed software company selling licenses.
                      <a href="#pablo"> Read More </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END NEW */}

          {/* FEATURE AUTHOR */}

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
                      />
                    </a>
                  </div>
                  <div className="card-body ">
                    <h4 className="card-title">Mike Andrew</h4>
                    <h6 className="card-category text-muted">
                      CEO @ Marketing Digital Ltd.
                    </h6>
                    <h5 className="card-description">
                      &quot;I speak yell scream directly at the old guard on
                      behalf of the future. I gotta say at that time I&#x2019;d
                      like to meet Kanye I speak yell scream directly at the old
                      guard on behalf of the future.&quot;
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
                      better life for all!!! Pablo Pablo Pablo Pablo! Thank you
                      Anna for the invite thank you to the whole Vogue team It
                      wasn&#x2019;t any Kanyes I love Rick Owens&#x2019; bed
                      design but the back is too high for the beams and angle of
                      the ceiling&quot;
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
                      />
                    </a>
                  </div>
                  <div className="card-body ">
                    <h4 className="card-title">Gina West</h4>
                    <h6 className="card-category text-muted">
                      CFO @ Apple Inc.
                    </h6>
                    <h5 className="card-description">
                      &quot;I&apos;ve been trying to figure out the bed design
                      for the master bedroom at our Hidden Hills compound...
                      Roy&#xE8;re doesn&apos;t make a Polar bear bed but the
                      Polar bear. This is a very nice testimonial about this
                      company.&quot;
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END FEATURE AUTHOR */}
        </div>
        <style jsx>{`
          .background-1 {
            background-image: url('/static/material/assets/img/examples/office2.jpg');
          }
          .background-2 {
            background-image: url('/static/material/assets/img/examples/blog8.jpg');
          }
          .background-3 {
            background-image: url('/static/material/assets/img/examples/card-project6.jpg');
          }
        `}</style>
      </div>
    );
  }
}

export default IndexBodyComponent;
