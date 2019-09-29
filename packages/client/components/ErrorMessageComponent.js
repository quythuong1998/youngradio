import React from 'react';

const ErrorMessageComponent = ({ message }) => (
  <div className="col-lg-12">
    <div className="alert alert-danger">
      <div className="container">
        <div className="alert-icon">
          <i className="material-icons">error_outline</i>
        </div>
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">
            <i className="material-icons">clear</i>
          </span>
        </button>
        <b>Error: </b> {message}
      </div>
    </div>
  </div>
);

export default ErrorMessageComponent;
