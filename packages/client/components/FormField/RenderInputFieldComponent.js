import React from 'react';

const RenderInputFieldComponent = ({
  input,
  type = 'text',
  col,
  placeholder,
  label,
  meta: { touched, error },
  ...others
}) => (
  <React.Fragment>
    <input
      {...input}
      type={type}
      placeholder={placeholder}
      className="form-control"
      {...others}
    />
    <div className="text-danger">
      {touched && (error && <div style={{ color: 'red' }}>{error}</div>)}
    </div>
    {/* <button
      type="button"
      class="btn"
      data-toggle="popover"
      data-placement="top"
      title="Popover on top"
      data-content="Here will be some very useful information about his popover."
      data-container="body"
    >
      On top
    </button> */}
  </React.Fragment>
);

export default RenderInputFieldComponent;
