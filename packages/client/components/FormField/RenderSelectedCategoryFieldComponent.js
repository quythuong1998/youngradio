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
      <div className="mt-2">
        <select
          {...input}
          className="selectpicker w-100"
          data-style="select-with-transition"
          data-size="12"
          title="Select Category"
        >
          {categories &&
            categories.map((item, index) => (
              <option key={index} value={item.id}>
                {item.name}
              </option>
            ))}
        </select>
        {touched && (error && <span style={{ color: 'red' }}>{error}</span>)}
      </div>
    );
  }
}

export default connectToRedux(RenderSelectedCategoryComponent);
