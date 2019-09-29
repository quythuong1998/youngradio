import CKEditor from 'react-ckeditor-component';
import React from 'react';

const RenderEditorComponent = ({ input: { value, onChange } }) => {
  return (
    <CKEditor
      content={value}
      events={{
        change: event => onChange(event.editor.getData())
      }}
    />
  );
};

export default RenderEditorComponent;
