import React from 'react';

const RenderInputFieldComponent = ({
  input,
  type = 'text',
  placeholder,
  label,
  icon,
  meta: { touched, error },
  ...others
}) => (
  <div className="form-group bmd-form-group">
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className="material-icons">{icon}</i>
        </span>
      </div>
      <input
        {...input}
        type={type}
        placeholder={placeholder}
        className="form-control"
        {...others}
      />
    </div>
    <div className="text-danger text-center">
      {touched && (error && <span style={{ color: 'red' }}>{error}</span>)}
    </div>
  </div>
);

export default RenderInputFieldComponent;
