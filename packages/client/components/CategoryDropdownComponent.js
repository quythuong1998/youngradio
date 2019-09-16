import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getAllCategory, getAllCategorySelector } from '../store/CategoryState';

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

class CategoryDropdownComponent extends React.Component {
  componentDidMount() {
    this.props.GetAllCategory();
  }

  render() {
    const { categories = [] } = this.props;

    return (
      <React.Fragment>
        <li className="nav-item">
          <a href="#pablo" className="nav-link">
            Radio blog
            <div className="ripple-container"></div>
          </a>
        </li>
        <li className="dropdown nav-item">
          <a
            href="#"
            className="dropdown-toggle nav-link"
            data-toggle="dropdown"
          >
            <i className="material-icons">apps</i> All categories
          </a>
          <div className="dropdown-menu dropdown-with-icons">
            {categories &&
              categories.map(item => (
                <a href="#" className="dropdown-item">
                  <i className="material-icons">layers</i> {item.name}
                </a>
              ))}
          </div>
        </li>
      </React.Fragment>
    );
  }
}

export default connectToRedux(CategoryDropdownComponent);
