import React from 'react';

const RenderTextAreaFieldComponent = ({
  input,
  placeholder,
  rows,
  meta: { touched, error }
}) => (
  <React.Fragment>
    <textarea
      {...input}
      className="form-control"
      placeholder={placeholder}
      rows={rows}
    ></textarea>
    {touched && (error && <span style={{ color: 'red' }}>{error}</span>)}
  </React.Fragment>
);

export default RenderTextAreaFieldComponent;
