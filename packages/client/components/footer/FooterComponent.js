import React from 'react';

const FooterComponent = () => (
  <React.Fragment>
    <footer classNameName="footer">
      <div className="container">
        <nav className="float-left">
          <ul>
            <li>
              <a href="https://creative-tim.com/presentation">About Us</a>
            </li>
            <li></li>
            <li>
              <a href="https://www.creative-tim.com/license">Licenses</a>
            </li>
          </ul>
        </nav>

        <div className="copyright float-right">
          &copy; 2019, made with ⌨️ & 🙌
        </div>
      </div>
    </footer>
  </React.Fragment>
);

export default FooterComponent;
