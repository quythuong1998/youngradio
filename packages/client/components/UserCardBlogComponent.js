import React from 'react';
import Popup from 'reactjs-popup';
import Link from 'next/link';
class UserCardBlogComponent extends React.Component {
  render() {
    const { category, title, image, actionDelete, idArticle } = this.props;
    return (
      <div className="col-lg-4 col-md-6">
        <div className="rotating-card-container">
          <div className="card card-rotate">
            <div className="front">
              <div className="card-header card-header-image">
                <a href="#pablo">
                  <img src={image} alt="" />
                </a>
                <div className="colored-shadow"></div>
              </div>
              <div className="card-body">
                <h6 className="card-category text-warning">{category}</h6>
                <h4 className="card-title">
                  <a href="#pablo">{title}</a>
                </h4>
              </div>
            </div>
            <div className="back">
              <div className="card-body">
                <h5 className="card-title">Manage Post</h5>
                <p className="card-description">
                  You can edit or delete the posts.
                </p>
                <div className="footer text-center">
                  {' '}
                  <a href="#pablo" className="btn btn-rose btn-round">
                    <i className="material-icons">subject</i> Read
                    <div className="ripple-container"></div>
                  </a>
                  <Link href={'edit-article?id=' + idArticle}>
                    <a className="btn btn-success btn-just-icon btn-fill btn-round btn-wd ml-2">
                      <i className="material-icons">mode_edit</i>
                    </a>
                  </Link>
                  <Popup
                    trigger={
                      <a
                        href="#pablo"
                        className="btn btn-danger btn-just-icon btn-fill btn-round ml-2"
                      >
                        <i className="material-icons">delete</i>
                      </a>
                    }
                    modal
                  >
                    {close => (
                      <div>
                        <div className="modal-body text-center">
                          <h5>Are you sure you want to delete this? </h5>
                        </div>
                        <div className="justify-content-center ">
                          <button
                            type="button"
                            className="btn btn-danger btn-link"
                            onClick={actionDelete}
                          >
                            Yes
                          </button>
                          <button
                            type="button"
                            className="btn btn-success btn-link"
                            onClick={() => close()}
                          >
                            No
                          </button>
                        </div>
                      </div>
                    )}
                  </Popup>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UserCardBlogComponent;
