import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Link from 'next/link';
import {
  getAllCategory,
  getAllCategorySelector
} from '../stores/CategoryState';

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
          <Link href="/radio-blogs">
            <a className="nav-link">
              Radio blog
              <div className="ripple-container"></div>
            </a>
          </Link>
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
              categories.map((item, index) => (
                <Link href={`/category?id=${item.id}`} key={index}>
                  <a className="dropdown-item">
                    <i className="material-icons">layers</i> {item.name}
                  </a>
                </Link>
              ))}
          </div>
        </li>
      </React.Fragment>
    );
  }
}

export default connectToRedux(CategoryDropdownComponent);
