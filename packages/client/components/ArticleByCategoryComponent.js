import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  getArticlesByCategory,
  getArticlesByCategoryDataSelector,
  resetDataGetArticlesByCategory
} from '../stores/ArticleState';

import {
  getCategoryInfo,
  getCategoryInfoDataSelector,
  resetDataGetCategoryInfo
} from '../stores/CategoryState';

import PostCardComponent from './PostCardComponent';
import PageNotFoundComponent from './PageNotFoundComponent';
const connectToRedux = connect(
  createStructuredSelector({
    articleByCategory: getArticlesByCategoryDataSelector,
    categoryInfo: getCategoryInfoDataSelector
  }),
  dispatch => ({
    getArticlesByCategory: categoryId => {
      dispatch(getArticlesByCategory(categoryId));
    },
    getCategoryInfo: categoryId => {
      dispatch(getCategoryInfo(categoryId));
    },
    resetData: () => {
      resetDataGetArticlesByCategory(dispatch);
      resetDataGetCategoryInfo(dispatch);
    }
  })
);

class RadioBlogsComponent extends React.Component {
  componentDidMount() {
    const { categoryId } = this.props;
    this.props.getArticlesByCategory(categoryId.id);
    this.props.getCategoryInfo(categoryId.id);
  }

  componentWillUnmount() {
    this.props.resetData();
  }

  render() {
    const { articleByCategory = [], categoryInfo } = this.props;
    return (
      <React.Fragment>
        {!categoryInfo ? (
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
                    {categoryInfo && (
                      <div>
                        <h1 className="title">{categoryInfo.name}</h1>
                        <h4>{categoryInfo.description}</h4>
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
                    {articleByCategory &&
                      articleByCategory.map(
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
                    {articleByCategory &&
                      articleByCategory.map(
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
          `}
        </style>
      </React.Fragment>
    );
  }
}

export default connectToRedux(RadioBlogsComponent);
