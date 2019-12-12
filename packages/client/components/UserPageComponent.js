import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import UserCardBlogComponent from './UserCardBlogComponent';

import {
  getAuthorById,
  getAuthorByIdDataSelector,
  resetDataGetAuthorById,
  getCurrentUserDataSelector
} from '../stores/UserState';

import {
  getUserArticles,
  getUserArticlesDataSelector,
  resetDataGetUserArticles,
  deleteArticle
} from '../stores/ArticleState';

const connectToRedux = connect(
  createStructuredSelector({
    userData: getAuthorByIdDataSelector,
    articles: getUserArticlesDataSelector,
    currentUser: getCurrentUserDataSelector
  }),
  dispatch => ({
    getUserById: authorId => {
      dispatch(getAuthorById(authorId));
    },
    GetUserArticle: userId => {
      dispatch(getUserArticles(userId));
    },
    DeleteArticle: id => {
      dispatch(deleteArticle(id));
    },

    resetData: () => {
      resetDataGetUserArticles(dispatch);
      resetDataGetAuthorById(dispatch);
    }
  })
);

class UserPageComponent extends React.Component {
  componentDidMount() {
    const { userId, currentUser } = this.props;
    const userIdToGetData = userId.id ? userId.id : currentUser.id;
    this.props.getUserById(userIdToGetData);
    this.props.GetUserArticle(userIdToGetData);
  }
  componentWillUnmount() {
    this.props.resetData();
  }

  render() {
    const {
      userData = [],
      articles = [],
      DeleteArticle,
      currentUser
    } = this.props;

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
                      {userData.avatar && (
                        <img
                          src={userData.avatar}
                          alt="user-avatar"
                          className="img-raised rounded-circle img-fluid"
                        />
                      )}
                    </div>
                    <div className="name">
                      <h3 className="title">{userData.fullName}</h3>
                      <h6>{userData.profession}</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="description text-center">
                <p>{userData.quote && userData.quote}</p>
              </div>
              <hr />
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h3 className="title">Something you shared</h3>
                </div>

                <div className="cards">
                  <div className="container">
                    <div className="row">
                      {articles && articles.length ? (
                        articles.map((item, index) => (
                          <UserCardBlogComponent
                            title={item.title}
                            category={item.category}
                            image={item.imageDescription}
                            key={index}
                            actionDelete={() => DeleteArticle(item.id)}
                            articleId={item.id}
                            isOwnerArticle={currentUser.id === userData.id}
                          />
                        ))
                      ) : (
                        <div className="d-flex justify-content-center">
                          <div className="col-lg-6">
                            <img
                              src="/static/images/empty.png"
                              className="rounded"
                              alt="notify"
                              width="100%"
                            />
                          </div>
                        </div>
                      )}
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
