import React from 'react';

import HeaderTitleComponent from './HeaderTitleComponent';
import HeaderInfoComponent from './HeaderInfoComponent';

const HeaderComponent = ({ ...props }) => (
  <React.Fragment>
    <nav
      className="navbar navbar-color-on-scroll navbar-transparent fixed-top navbar-expand-lg"
      color-on-scroll="100"
      id="sectionsNav"
    >
      <div className="container">
        <div className="navbar-translate">
          <HeaderTitleComponent />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Navigation</span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <HeaderInfoComponent {...props} />
      </div>
    </nav>
  </React.Fragment>
);

export default HeaderComponent;
