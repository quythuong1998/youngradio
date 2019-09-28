import React from 'react';
import TagsInput from 'react-tagsinput';

const RenderTagInputFieldComponent = ({ input, meta: { touched, error } }) => (
  <React.Fragment>
    <div>
      <TagsInput
        className="form-control"
        value={input.value || []}
        onChange={input.onChange}
      />
    </div>
    {touched && (error && <span style={{ color: 'red' }}>{error}</span>)}
  </React.Fragment>
);
export default RenderTagInputFieldComponent;
