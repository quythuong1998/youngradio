import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'recompose';
import { Field, reduxForm } from 'redux-form';
import {
  createArticle,
  createArticleDataSelector,
  createArticleErrorMessageSelector,
  resetDataCreateArticle
} from '../stores/ArticleState';
import { getCurrentUserDataSelector } from '../stores/UserState';
import PostSuccessComponent from './PostSuccessComponent';
import RenderEditorFieldComponent from './FormField/RenderEditorFieldComponent';
import RenderInputFieldComponent from '../components/FormField/RenderInputFieldComponent';
import RenderSelectedCategoryFieldComponent from './FormField/RenderSelectedCategoryFieldComponent';
import RenderTextAreaFieldComponent from './FormField/RenderTextAreaFieldComponent';
import RenderSelectedImageFieldComponent from './FormField/RenderSelectedImageFieldComponent';
import RenderTagInputFieldComponent from './FormField/RenderTagInputFieldComponent';
import ErrorMessageComponent from './ErrorMessageComponent';
import { required } from '../utils/validation';

const connectToRedux = connect(
  createStructuredSelector({
    errorMessage: createArticleErrorMessageSelector,
    successMessage: createArticleDataSelector,
    currentUser: getCurrentUserDataSelector
  }),
  dispatch => ({
    onSubmit: ({
      title,
      categoryId,
      description,
      imageDescription,
      content,
      hastags
    }) =>
      dispatch(
        createArticle({
          title,
          categoryId,
          description,
          imageDescription,
          content,
          hastags
        })
      ),
    resetData: () => {
      resetDataCreateArticle(dispatch);
    }
  })
);

const withForm = reduxForm({ form: 'share_your_post' });

const enhance = compose(
  connectToRedux,
  withForm
);
class SharePostComponent extends React.Component {
  componentWillUnmount() {
    this.props.resetData();
  }

  render() {
    const {
      handleSubmit,
      pristine,
      submitting,
      reset,
      errorMessage,
      successMessage,
      currentUser
    } = this.props;

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
                  <h2 className="title text-center"> Share your article </h2>
                  {successMessage ? (
                    <PostSuccessComponent userRole={currentUser.role} />
                  ) : (
                    <div className="form-group has-default bmd-form-group">
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-md-12">
                            <h4>Article information</h4>
                          </div>
                          <div className="col-lg-6 col-sm-12">
                            <Field
                              type="text"
                              className="form-control"
                              placeholder="Title"
                              name="title"
                              component={RenderInputFieldComponent}
                              validate={[required]}
                              icon="title"
                            />
                          </div>
                          <div className="col-lg-6 col-sm-12">
                            <Field
                              type="text"
                              name="categoryId"
                              component={RenderSelectedCategoryFieldComponent}
                              validate={[required]}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <h4>Article descriptons</h4>
                          </div>
                          <div className="col-md-5 col-sm-8">
                            <Field
                              name="imageDescription"
                              component={RenderSelectedImageFieldComponent}
                              type="file"
                            />
                          </div>
                          <div className="col-md-7 col-sm-8">
                            <Field
                              rows="12"
                              name="description"
                              placeholder="Write some descriptions for your article..."
                              component={RenderTextAreaFieldComponent}
                              validate={[required]}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <h4>Article Contents</h4>
                          </div>
                          <div className="col-lg-12">
                            <Field
                              name="content"
                              component={RenderEditorFieldComponent}
                              validate={[required]}
                            />
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-12">
                            <h4>Hastags</h4>
                          </div>
                          <div className="col-md-6">
                            <Field
                              name="hastags"
                              component={RenderTagInputFieldComponent}
                              validate={[required]}
                            />
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mt-3">
                          <button
                            type="submit"
                            disabled={pristine || submitting}
                            className="btn btn-success btn-fill btn-round btn-rotate"
                          >
                            <i className="material-icons">done</i> Submit
                            <div className="ripple-container"></div>
                          </button>

                          <button
                            type="button"
                            disabled={pristine || submitting}
                            className="btn btn-danger btn-fill btn-round btn-rotate ml-3"
                            onClick={reset}
                          >
                            <i className="material-icons">refresh</i> Reset
                            <div className="ripple-container"></div>
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
                {errorMessage && (
                  <ErrorMessageComponent message={errorMessage} />
                )}
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
