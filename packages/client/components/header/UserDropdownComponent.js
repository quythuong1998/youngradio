import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Link from 'next/link';
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
  render() {
    const { user, logout } = this.props;

    return (
      <li className="dropdown nav-item ml-2">
        <a
          href="#pablo"
          className="profile-photo dropdown-toggle nav-link"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          {user && (
            <div className="profile-photo-small">
              <img
                src={user.avatar}
                alt="circleImage"
                className="rounded-circle img-fluid"
              />
            </div>
          )}

          <div className="ripple-container"></div>
        </a>
        <div className="dropdown-menu dropdown-menu-right">
          <h6 className="dropdown-header">Hi, {user && user.fullName}</h6>
          <Link href="/user">
            <a href="#" className="dropdown-item">
              <i className="material-icons mr-2">face</i> Your page
            </a>
          </Link>

          {/* FIX LATER */}
          {user && user.role === 'ADMIN' && (
            <Link href="/admin-dashboard">
              <a href="#" className="dropdown-item">
                <i className="material-icons mr-2">build</i> Admin dashboard
              </a>
            </Link>
          )}

          <a href="#pablo" className="dropdown-item">
            <i className="material-icons mr-2">settings</i> Settings and other
            stuff
          </a>
          <a href="#pablo" className="dropdown-item" onClick={logout}>
            <i className="material-icons mr-2">fingerprint</i> Sign out
          </a>
        </div>
      </li>
    );
  }
}

export default connectToRedux(UserDropdownComponent);
