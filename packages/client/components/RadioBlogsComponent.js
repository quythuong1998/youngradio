import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  getAllBlogRadio,
  getAllBlogRadioDataSelector,
  resetDataGetAllBlogRadio
} from '../stores/RadioState';
import BlogRadioCardComponent from './BlogRadioCardComponent';

const connectToRedux = connect(
  createStructuredSelector({
    blogRadioData: getAllBlogRadioDataSelector
  }),
  dispatch => ({
    getAllBlogRadio: () => {
      dispatch(getAllBlogRadio());
    },
    resetData: () => {
      resetDataGetAllBlogRadio(dispatch);
    }
  })
);

class RadioBlogsComponent extends React.Component {
  componentDidMount() {
    this.props.getAllBlogRadio();
  }

  componentWillUnmount() {
    this.props.resetData();
  }

  render() {
    const { blogRadioData = [] } = this.props;
    return (
      <React.Fragment>
        <div
          className="page-header header-filter header-small blogradio-background-image"
          data-parallax="true"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-8 ml-auto mr-auto text-center">
                <h1 className="title">Let&apos;s get started</h1>
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
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <h2 className="title text-center mb-4"> Share your article </h2>
                {blogRadioData &&
                  blogRadioData.map((radio, index) => (
                    <div className="pb-2">
                      <BlogRadioCardComponent
                        title={radio.title}
                        author={radio.authorName}
                        length={radio.length}
                        description={radio.description}
                        smallThumbnail={radio.smallThumbnail}
                        largeThumbnail={radio.largeThumbnail}
                        id={radio.id}
                        key={index}
                      />
                    </div>
                  ))}
                <div className="d-flex justify-content-center mt-2">
                  <ul className="pagination pagination-info">
                    <li className="page-item">
                      <a href="" className="page-link">
                        {' '}
                        prev
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="" className="page-link">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="" className="page-link">
                        2<div className="ripple-container"></div>
                      </a>
                    </li>
                    <li className="active page-item">
                      <a href="" className="page-link">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="" className="page-link">
                        4
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="" className="page-link">
                        5
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="" className="page-link">
                        next{' '}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .blogradio-background-image {
              background-image: url('/static/material/assets/img/bg6.jpg');
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}

export default connectToRedux(RadioBlogsComponent);
