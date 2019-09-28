import React from 'react';

const RenderSelectedImageFieldComponent = ({
  input: { onChange },
  meta: { touched, error }
}) => (
  <React.Fragment>
    <div
      className="fileinput fileinput-new text-center"
      data-provides="fileinput"
    >
      <div className="fileinput-new thumbnail img-raised">
        <img
          src="/static/material/assets/img/image_placeholder.jpg"
          alt="..."
        />
      </div>
      <div className="fileinput-preview fileinput-exists thumbnail img-raised"></div>
      <div>
        <span className="btn btn-raised btn-round btn-default btn-file">
          <span className="fileinput-new">Select image</span>
          <span className="fileinput-exists">Change</span>
          <input type="file" name="..." onChange={onChange} />
        </span>
        <a
          href="#pablo"
          className="btn btn-danger btn-round fileinput-exists"
          data-dismiss="fileinput"
        >
          <i className="fa fa-times"></i> Remove
        </a>
      </div>
    </div>

    {touched && (error && <span style={{ color: 'red' }}>{error}</span>)}
  </React.Fragment>
);

export default RenderSelectedImageFieldComponent;

// import React, { Component } from 'react';

// export default class RenderSelectedImageFieldComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.onChange = this.onChange.bind(this);
//   }

//   onChange(e) {
//     const {
//       input: { onChange }
//     } = this.props;
//     onChange(e.target.files[0]);
//   }

//   render() {
//     const {
//       input: { value }
//     } = this.props;
//     const { input, label, required, meta } = this.props; //whatever props you send to the component from redux-form Field
//     return (
//       <div>
//         <label>{label}</label>
//         <div className="fileinput-new thumbnail img-raised">
//           <img
//             src="/static/material/assets/img/image_placeholder.jpg"
//             alt="..."
//           />
//         </div>
//         <div>
//           <input
//             type="file"
//             accept=".jpg, .png, .jpeg"
//             onChange={this.onChange}
//           />
//         </div>
//       </div>
//     );
//   }
// }
