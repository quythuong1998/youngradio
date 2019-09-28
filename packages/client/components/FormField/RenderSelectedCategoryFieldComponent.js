import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  getAllCategory,
  getAllCategorySelector
} from '../../stores/CategoryState';

const connectToRedux = connect(
  createStructuredSelector({
    categories: getAllCategorySelector
  }),
  dispatch => ({
    GetAllCategory: () => {
      dispatch(getAllCategory());
    }
  })
);

class RenderSelectedCategoryComponent extends React.Component {
  componentDidMount() {
    this.props.GetAllCategory();
  }

  render() {
    const {
      input,
      meta: { touched, error }
    } = this.props;
    const { categories } = this.props;

    return (
      <React.Fragment>
        <select
          {...input}
          className="selectpicker"
          data-style="select-with-transition"
          data-size="12"
          title="Select Category"
        >
          <option hidden disabled value="">
            ---
          </option>
          {categories &&
            categories.map((item, index) => (
              <option key={index} value={item.id}>
                {item.name}
              </option>
            ))}
        </select>
        {touched && (error && <span style={{ color: 'red' }}>{error}</span>)}
      </React.Fragment>
    );
  }
}

export default connectToRedux(RenderSelectedCategoryComponent);
