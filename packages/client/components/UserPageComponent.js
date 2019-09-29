import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import UserCardBlogComponent from './UserCardBlogComponent';
import {
  getCurrentUser,
  getCurrentUserDataSelector
} from '../stores/UserState';

import {
  getUserArticles,
  getUserArticlesDataSelector
} from '../stores/ArticleState';

const connectToRedux = connect(
  createStructuredSelector({
    currentUser: getCurrentUserDataSelector,
    articles: getUserArticlesDataSelector
  }),
  dispatch => ({
    GetCurrentUser: () => {
      dispatch(getCurrentUser());
    },
    GetAllArticle: () => {
      dispatch(getUserArticles());
    }
  })
);

class UserPageComponent extends React.Component {
  componentDidMount() {
    this.props.GetCurrentUser();
    this.props.GetAllArticle();
  }

  render() {
    const { currentUser, articles = [] } = this.props;
    return (
      <div className="profile-page sidebar-collapse">
        <div
          className="page-header header-filter profile-background-image"
          data-parallax="true"
        ></div>
        <div className="main main-raised">
          <div className="profile-content">
            <div className="container">
              <div className="row">
                <div className="col-md-6 ml-auto mr-auto">
                  <div className="profile">
                    <div className="avatar">
                      {currentUser.avatar && (
                        <img
                          src={currentUser.avatar}
                          alt="user-avatar"
                          className="img-raised rounded-circle img-fluid"
                        />
                      )}
                    </div>
                    <div className="name">
                      {console.log(currentUser)}
                      <h3 className="title">{currentUser.fullName}</h3>
                      <h6>{currentUser.profession}</h6>

                      {/* social Network: DO LATER */}
                      {/* <a
                        href="#pablo"
                        className="btn btn-just-icon btn-link btn-dribbble"
                      >
                        <i className="fa fa-dribbble"></i>
                      </a>
                      <a
                        href="#pablo"
                        className="btn btn-just-icon btn-link btn-twitter"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a
                        href="#pablo"
                        className="btn btn-just-icon btn-link btn-pinterest"
                      >
                        <i className="fa fa-pinterest"></i>
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="description text-center">
                <p>{currentUser.quote && currentUser.quote}</p>
              </div>
              <hr />
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h3 className="title">Something you shared</h3>
                </div>

                <div className="cards">
                  <div className="container">
                    <div className="row">
                      {articles &&
                        articles.map(item => (
                          <UserCardBlogComponent
                            title={item.title}
                            category={item.category}
                            image={item.imageDescription}
                          />
                        ))}
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 d-flex justify-content-center">
                  <ul className="pagination pagination-primary">
                    <li className="page-item">
                      <a href="#" className="page-link">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link">
                        ...
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link">
                        5
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link">
                        6
                      </a>
                    </li>
                    <li className="active page-item">
                      <a href="#" className="page-link">
                        7
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link">
                        8
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link">
                        9
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link">
                        ...
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link">
                        12
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .profile-background-image {
              background-image: url('/static/material/assets/img/city-profile.jpg');
            }
          `}
        </style>
      </div>
    );
  }
}

export default connectToRedux(UserPageComponent);
