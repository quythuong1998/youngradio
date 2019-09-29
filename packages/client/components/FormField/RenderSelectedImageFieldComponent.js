import React from 'react';

class RenderSelectedImageFieldComponent extends React.Component {
  //review it later
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const {
      input: { onChange }
    } = this.props;
    e.preventDefault();
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      onChange(reader.result);
    };
  }

  render() {
    const {
      input: { value }
    } = this.props;

    return (
      <React.Fragment>
        <div className="fileinput fileinput-new text-center">
          <div className="fileinput-new thumbnail img-raised">
            <img
              src={value || '/static/images/image_placeholder.jpg'}
              alt="..."
            />
          </div>
          <span className="btn btn-raised btn-round btn-default btn-file">
            <div className="d-flex justify-content-center">
              <span className="fileinput-new">Select image</span>
            </div>
            <input type="file" onChange={this.onChange} />
          </span>
        </div>
      </React.Fragment>
    );
  }
}

export default RenderSelectedImageFieldComponent;
