import React from 'react';
import { connect } from 'react-redux';
import { compose, withState } from 'recompose';
import { reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';
import {
  createBlogRadioDataSelector,
  createBlogRadioErrorMessageSelector,
  createBlogRadioTemp,
  createBlogRadioTempDataSelector,
  createBlogRadioTempErrorMessageSelector,
  resetDataCreateBlogRadio,
  resetDataCreateBlogRadioTemp
} from '../stores/RadioState';
import { getCurrentUserDataSelector } from '../stores/UserState';
import EditInfoToCompleteRadioPostComponent from './EditInfoToCompleteRadioPostComponent';
import ErrorMessageComponent from './ErrorMessageComponent';

const withYoutubeLinkState = withState('videoURL', 'setVideoURL', '');

const connectToRedux = connect(
  createStructuredSelector({
    errorMessage: createBlogRadioErrorMessageSelector,
    successMessage: createBlogRadioDataSelector,
    currentUser: getCurrentUserDataSelector,
    blogRadioTemp: createBlogRadioTempDataSelector,
    createBlogRadioTempErrorMessage: createBlogRadioTempErrorMessageSelector
  }),
  dispatch => ({
    resetData: () => {
      resetDataCreateBlogRadio(dispatch);
      resetDataCreateBlogRadioTemp(dispatch);
    },
    createBlogRadioTemp: videoURL => {
      videoURL && dispatch(createBlogRadioTemp(videoURL));
    }
  })
);

const withForm = reduxForm({ form: 'share_your_blog_radio' });

const enhance = compose(
  connectToRedux,
  withForm,
  withYoutubeLinkState
);
class SharePostComponent extends React.Component {
  componentWillUnmount() {
    this.props.resetData();
  }

  render() {
    const {
      videoURL,
      createBlogRadioTemp,
      setVideoURL,
      blogRadioTemp,
      createBlogRadioTempErrorMessage
    } = this.props;
    console.log(blogRadioTemp);
    return (
      <div className="product-page sidebar-collapse">
        <div
          className="page-header header-filter share-background-image"
          data-parallax="true"
          filter-color="grey"
        ></div>
        <div className="section">
          <div className="container">
            <div className="main main-raised main-product">
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <h2 className="title text-center"> Share Blog Radio </h2>

                  <div className="row text-center">
                    <div className="col-lg-12">
                      <h4>First, You must be upload radio's audio on</h4>

                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://studio.youtube.com/"
                      >
                        <button className="btn btn-just-icon btn-round btn-youtube">
                          <i className="fa fa-youtube"> </i>
                          <div className="ripple-container"></div>
                        </button>
                      </a>
                      <h4>and then,</h4>

                      <div className="row d-flex justify-content-center">
                        <div className="col-lg-4">
                          <span className="bmd-form-group">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="material-icons">link</i>
                                </span>
                              </div>
                              <input
                                placeholder="Your video link..."
                                className="form-control"
                                onChange={e =>
                                  setVideoURL(e.currentTarget.value)
                                }
                              />
                            </div>
                          </span>
                        </div>
                        <div className="col-lg-1">
                          <button
                            className="btn btn-just-icon btn-round"
                            onClick={e => {
                              e.preventDefault();
                              createBlogRadioTemp(videoURL);
                            }}
                          >
                            <i className="fa fa-search"> </i>
                            <div className="ripple-container"></div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CENTER HERE */}
                  {createBlogRadioTempErrorMessage && (
                    <div className="col-lg-6">
                      <div className="text-center">
                        <ErrorMessageComponent
                          message={createBlogRadioTempErrorMessage}
                        />
                      </div>
                    </div>
                  )}
                  {blogRadioTemp && (
                    <EditInfoToCompleteRadioPostComponent
                      initialValues={blogRadioTemp}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .share-background-image {
              background-image: url('/static/material/assets/img/bg6.jpg');
            }
          `}
        </style>
      </div>
    );
  }
}

export default enhance(SharePostComponent);
