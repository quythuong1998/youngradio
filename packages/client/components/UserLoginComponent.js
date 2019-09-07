import React from 'react';

const UserLoginComponent = () => (
  <body className="login-page sidebar-collapse">
    <nav
      className="navbar navbar-color-on-scroll navbar-transparent    fixed-top  navbar-expand-lg "
      color-on-scroll="100"
      id="sectionsNav"
    >
      <div className="container">
        <div className="navbar-translate">
          <a
            className="navbar-brand"
            href="https://demos.creative-tim.com/material-kit-pro/index.html"
          >
            Material Kit PRO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="dropdown nav-item">
              <a
                href="#"
                className="dropdown-toggle nav-link"
                data-toggle="dropdown"
              >
                <i className="material-icons">apps</i> Components
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
            <li className="dropdown nav-item">
              <a
                href="#"
                className="dropdown-toggle nav-link"
                data-toggle="dropdown"
              >
                <i className="material-icons">view_day</i> Sections
              </a>
              <div className="dropdown-menu dropdown-with-icons">
                <a href="../sections.html#headers" className="dropdown-item">
                  <i className="material-icons">dns</i> Headers
                </a>
                <a href="../sections.html#features" className="dropdown-item">
                  <i className="material-icons">build</i> Features
                </a>
                <a href="../sections.html#blogs" className="dropdown-item">
                  <i className="material-icons">list</i> Blogs
                </a>
                <a href="../sections.html#teams" className="dropdown-item">
                  <i className="material-icons">people</i> Teams
                </a>
                <a href="../sections.html#projects" className="dropdown-item">
                  <i className="material-icons">assignment</i> Projects
                </a>
                <a href="../sections.html#pricing" className="dropdown-item">
                  <i className="material-icons">monetization_on</i> Pricing
                </a>
                <a
                  href="../sections.html#testimonials"
                  className="dropdown-item"
                >
                  <i className="material-icons">chat</i> Testimonials
                </a>
                <a href="../sections.html#contactus" className="dropdown-item">
                  <i className="material-icons">call</i> Contacts
                </a>
              </div>
            </li>
            <li className="dropdown nav-item">
              <a
                href="#"
                className="dropdown-toggle nav-link"
                data-toggle="dropdown"
              >
                <i className="material-icons">view_carousel</i> Examples
              </a>
              <div className="dropdown-menu dropdown-with-icons">
                <a href="../examples/about-us.html" className="dropdown-item">
                  <i className="material-icons">account_balance</i> About Us
                </a>
                <a href="../examples/blog-post.html" className="dropdown-item">
                  <i className="material-icons">art_track</i> Blog Post
                </a>
                <a href="../examples/blog-posts.html" className="dropdown-item">
                  <i className="material-icons">view_quilt</i> Blog Posts
                </a>
                <a href="../examples/contact-us.html" className="dropdown-item">
                  <i className="material-icons">location_on</i> Contact Us
                </a>
                <a
                  href="../examples/landing-page.html"
                  className="dropdown-item"
                >
                  <i className="material-icons">view_day</i> Landing Page
                </a>
                <a href="../examples/login-page.html" className="dropdown-item">
                  <i className="material-icons">fingerprint</i> Login Page
                </a>
                <a href="../examples/pricing.html" className="dropdown-item">
                  <i className="material-icons">attach_money</i> Pricing Page
                </a>
                <a
                  href="../examples/shopping-cart.html"
                  className="dropdown-item"
                >
                  <i className="material-icons">shopping_basket</i> Shopping
                  Cart
                </a>
                <a href="../examples/ecommerce.html" className="dropdown-item">
                  <i className="material-icons">store</i> Ecommerce Page
                </a>
                <a
                  href="../examples/product-page.html"
                  className="dropdown-item"
                >
                  <i className="material-icons">shopping_cart</i> Product Page
                </a>
                <a
                  href="../examples/profile-page.html"
                  className="dropdown-item"
                >
                  <i className="material-icons">account_circle</i> Profile Page
                </a>
                <a
                  href="../examples/signup-page.html"
                  className="dropdown-item"
                >
                  <i className="material-icons">person_add</i> Signup Page
                </a>
                <a href="../examples/error.html" className="dropdown-item">
                  <i className="material-icons">error</i> Error Page
                </a>
              </div>
            </li>
            <li className="button-container nav-item iframe-extern">
              <a
                href="https://www.creative-tim.com/product/material-kit-pro?ref=presentation"
                className="btn  btn-rose   btn-round btn-block"
              >
                <i className="material-icons">shopping_cart</i> Buy Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="page-header header-filter background-test">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-8 ml-auto mr-auto">
            <form className="form" method="" action="">
              <div className="card card-login card-hidden">
                <div className="card-header card-header-primary text-center">
                  <h4 className="card-title">Login</h4>
                  <div className="social-line">
                    <a
                      href="#pablo"
                      className="btn btn-just-icon btn-link btn-white"
                    >
                      <i className="fa fa-facebook-square"></i>
                    </a>
                    <a
                      href="#pablo"
                      className="btn btn-just-icon btn-link btn-white"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a
                      href="#pablo"
                      className="btn btn-just-icon btn-link btn-white"
                    >
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </div>
                </div>
                <div className="card-body ">
                  <p className="card-description text-center">
                    Or Be classNameical
                  </p>
                  <span className="bmd-form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="material-icons">face</i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name..."
                      />
                    </div>
                  </span>
                  <span className="bmd-form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="material-icons">email</i>
                        </span>
                      </div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email..."
                      />
                    </div>
                  </span>
                  <span className="bmd-form-group">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="material-icons">lock_outline</i>
                        </span>
                      </div>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password..."
                      />
                    </div>
                  </span>
                </div>
                <div className="card-footer justify-content-center">
                  <a href="#pablo" className="btn btn-rose btn-link btn-lg">
                    Lets Go
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <nav className="float-left">
            <ul>
              <li>
                <a href="https://www.creative-tim.com">Creative Tim</a>
              </li>
              <li>
                <a href="https://creative-tim.com/presentation">About Us</a>
              </li>
              <li>
                <a href="http://blog.creative-tim.com">Blog</a>
              </li>
              <li>
                <a href="https://www.creative-tim.com/license">Licensess</a>
              </li>
            </ul>
          </nav>
          <div className="copyright float-right">
            &copy;
            <script>document.write(new Date().getFullYear())</script>, made with
            <i className="material-icons">favorite</i> by
            <a href="https://www.creative-tim.com">Creative Tim</a> for a better
            web.
          </div>
        </div>
      </footer>
    </div>
    <style jsx>{`
      .background-test {
        background-image: url('/static/material/assets/img/bg7.jpg');
        background-size: cover;
        background-position: top center;
        x-flow: row wrap;
      }
    `}</style>
  </body>
);

export default UserLoginComponent;
