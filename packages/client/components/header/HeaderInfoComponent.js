import React from 'react';
import Link from 'next/link';
import CategoryDropdownComponent from '../CategoryDropdownComponent';

const HeaderInfoComponent = () => (
  <div className="collapse navbar-collapse">
    <ul className="navbar-nav ml-auto">
      <CategoryDropdownComponent />
      <li className="button-container nav-item iframe-extern">
        <a
          href="https://www.creative-tim.com/product/material-kit-pro?ref=presentation"
          target="_blank"
          className="btn btn-rose btn-round btn-block"
        >
          <i className="material-icons">shopping_cart</i> Share your post
        </a>
      </li>
    </ul>
  </div>
);

export default HeaderInfoComponent;
