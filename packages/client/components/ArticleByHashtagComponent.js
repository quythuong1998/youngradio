import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  getArticleByHashTag,
  getArticleByHashTagDataSelector,
  resetDataGetArticleByHashTag
} from '../stores/ArticleState';

import PostCardComponent from './PostCardComponent';
import PageNotFoundComponent from './PageNotFoundComponent';

const connectToRedux = connect(
  createStructuredSelector({
    articleByHashTag: getArticleByHashTagDataSelector
  }),
  dispatch => ({
    getArticleByHashTag: hashtag => {
      dispatch(getArticleByHashTag(hashtag));
    },
    resetData: () => {
      resetDataGetArticleByHashTag(dispatch);
    }
  })
);

class ArticleByHashtagComponent extends React.Component {
  componentDidMount() {
    const { keyword } = this.props;
    this.props.getArticleByHashTag(keyword.hashtag);
  }

  componentWillUnmount() {
    this.props.resetData();
  }

  render() {
    const { articleByHashTag = [], keyword } = this.props;
    return (
      <React.Fragment>
        {articleByHashTag.length === 0 ? (
          <PageNotFoundComponent />
        ) : (
          <div>
            <div
              className="page-header header-filter header-small blogradio-background-image"
              data-parallax="true"
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-8 ml-auto mr-auto text-center">
                    {keyword && (
                      <div>
                        <h1 className="title">#{keyword.hashtag}</h1>
                        <h4>
                          You're viewing all articles of hashtag #
                          {keyword.hashtag}
                        </h4>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="main main-raised">
              <div className="container">
                <div className="col-md-12 col-sm-12">
                  {/* <h2 className="title text-center mb-4"> Share your article </h2> */}
                  <div className="row">
                    {articleByHashTag &&
                      articleByHashTag.map(
                        (item, index) =>
                          index === 0 && (
                            <PostCardComponent
                              col={12}
                              category={item.category}
                              title={item.title}
                              description={item.description}
                              image={item.imageDescription}
                              key={index}
                              articleId={item.id}
                            />
                          )
                      )}
                  </div>
                  <div className="row">
                    {articleByHashTag &&
                      articleByHashTag.map(
                        (item, index) =>
                          index > 0 && (
                            <PostCardComponent
                              col={6}
                              category={item.category}
                              title={item.title}
                              description={item.description}
                              image={item.imageDescription}
                              key={index}
                              articleId={item.id}
                            />
                          )
                      )}
                  </div>
                  <div className="row d-flex justify-content-center mt-2">
                    <ul className="pagination pagination-info">
                      <li className="page-item">
                        <a href="" className="page-link">
                          {' '}
                          prev
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="" className="page-link">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="" className="page-link">
                          2<div className="ripple-container"></div>
                        </a>
                      </li>
                      <li className="active page-item">
                        <a href="" className="page-link">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="" className="page-link">
                          4
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="" className="page-link">
                          5
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="" className="page-link">
                          next{' '}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <style jsx>
          {`
            .blogradio-background-image {
              background-image: url('/static/material/assets/img/bg6.jpg');
            }
            .page-header {
              magrin-top: -25px;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}

export default connectToRedux(ArticleByHashtagComponent);
