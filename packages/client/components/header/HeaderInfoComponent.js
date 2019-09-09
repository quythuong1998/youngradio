import React from 'react';
import Link from 'next/link';

const HeaderInfoComponent = () => (
  <div className="collapse navbar-collapse">
    <ul className="navbar-nav ml-auto">
      <li className="button-container nav-item iframe-extern">
        <Link href="/login">
          <a className="btn btn-rose btn-round btn-block">
            <i className="material-icons">fingerprint</i> Login
          </a>
        </Link>
      </li>
    </ul>
  </div>
);

export default HeaderInfoComponent;
