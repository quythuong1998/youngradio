import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Field, reduxForm } from 'redux-form';
import { createStructuredSelector } from 'reselect';
import RenderInputFieldComponent from '../components/FormField/RenderInputFieldComponent';
import {
  createBlogRadio,
  createBlogRadioDataSelector,
  deleteBlogRadioTemp,
  resetDataDeleteBlogRadioTemp
} from '../stores/RadioState';
import { required } from '../utils/validation';
import RenderEditorFieldComponent from './FormField/RenderEditorFieldComponent';
import RenderSelectedImageFieldComponent from './FormField/RenderSelectedImageFieldComponent';
import RenderTagInputFieldComponent from './FormField/RenderTagInputFieldComponent';
import RenderTextAreaFieldComponent from './FormField/RenderTextAreaFieldComponent';

const withForm = reduxForm({ form: 'share_your_blog_radio' });

const connectToRedux = connect(
  createStructuredSelector({
    successMessage: createBlogRadioDataSelector
  }),
  dispatch => ({
    resetData: () => {
      resetDataDeleteBlogRadioTemp(dispatch);
    },
    deleteBlogRadioTemp: id => {
      id && dispatch(deleteBlogRadioTemp(id));
    }
  })
);

const enhance = compose(
  connectToRedux,
  withForm
);

class EditInfoToCompleteRadioPostComponent extends React.Component {
  render() {
    const submit = (values, dispatch, props) => {
      const articleId = props.initialValues.id;
      dispatch(
        createBlogRadio({
          ...values,
          id: articleId
        })
      );
    };
    const {
      handleSubmit,
      pristine,
      submitting,
      reset,
      initialValues,
      // blogRadioTemp,
      deleteBlogRadioTemp
    } = this.props;
    return (
      <div className="form-group has-default bmd-form-group">
        <hr />
        <form onSubmit={handleSubmit(submit)}>
          <div className="row">
            <div className="col-md-12">
              <h4>Blog radio information</h4>
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
          </div>
          <div className="row">
            <div className="col-md-12">
              <h4>Blog radio descriptons</h4>
            </div>
            <div className="col-md-5 col-sm-8">
              <Field
                name="largeThumbnail"
                component={RenderSelectedImageFieldComponent}
                type="file"
              />
            </div>
            <div className="col-md-7 col-sm-8">
              <Field
                rows="12"
                name="description"
                placeholder="Write some descriptions for your Blog radio..."
                component={RenderTextAreaFieldComponent}
                validate={[required]}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h4>Blog radio Contents</h4>
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
              className="btn btn-warning btn-fill btn-round btn-rotate ml-3"
              onClick={reset}
            >
              <i className="material-icons">refresh</i> Reset
              <div className="ripple-container"></div>
            </button>
            <button
              type="button"
              className="btn btn-danger btn-fill btn-round btn-rotate ml-3"
              onClick={() => {
                deleteBlogRadioTemp(initialValues.id);
                window.location.reload();
              }}
            >
              <i className="material-icons">delete</i> Delete
              <div className="ripple-container"></div>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default enhance(EditInfoToCompleteRadioPostComponent);
