import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  getCurrentUserDataSelector,
  getCurrentUser,
  doLogout
} from '../../stores/UserState';

const connectToRedux = connect(
  createStructuredSelector({
    user: getCurrentUserDataSelector
  }),
  dispatch => ({
    GetCurrentUser: () => {
      dispatch(getCurrentUser());
    },
    logout: () => dispatch(doLogout())
  })
);

class UserDropdownComponent extends React.Component {
  componentDidMount() {
    this.props.GetCurrentUser();
  }

  render() {
    const { user, logout } = this.props;

    return (
      <li className="dropdown nav-item">
        <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
          {user.fullName}
        </a>
        <div className="dropdown-menu dropdown-with-icons">
          <a href="#" onClick={logout} className="dropdown-item">
            Logout
          </a>
        </div>
      </li>
    );
  }
}

export default connectToRedux(UserDropdownComponent);
