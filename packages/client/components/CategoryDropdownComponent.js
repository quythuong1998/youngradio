import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {} from '../store/CategoryState';

// const connectToRedux = connect(
//   createStructuredSelector(
//     {
//       categories: getAllCategorySelector
//     },
//     dispatch => ({
//       getAllCategory: () => {
//         dispatch(getAllCategory());
//       }
//     })
//   )
// );
class CategoryDropdownComponent extends React.Component {
  // componentWillMount() {
  //   this.props.getAllCategorySelector();
  // }

  render() {
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
            <a href="../presentation.html" className="dropdown-item">
              <i className="material-icons">layers</i> Presentation
            </a>
            <a href="../index.html" className="dropdown-item">
              <i className="material-icons">line_style</i> All Components
            </a>
            <a
              href="http://demos.creative-tim.com/material-kit-pro/docs/2.1/getting-started/introduction.html"
              className="dropdown-item"
            >
              <i className="material-icons">content_paste</i> Documentation
            </a>
          </div>
        </li>
      </React.Fragment>
    );
  }
}

export default CategoryDropdownComponent;
