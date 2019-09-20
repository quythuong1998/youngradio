import React from 'react';
import Link from 'next/link';
import CategoryDropdownComponent from '../CategoryDropdownComponent';

const HeaderInfoComponent = () => (
  <div className="collapse navbar-collapse">
    <ul className="navbar-nav ml-auto">
      <CategoryDropdownComponent />
      <li className="button-container nav-item iframe-extern">
        <Link href="/login">
          <a className="btn btn-success btn-round btn-block">
            <i className="material-icons">email</i> Share your post
          </a>
        </Link>
      </li>
    </ul>
  </div>
);

export default HeaderInfoComponent;
