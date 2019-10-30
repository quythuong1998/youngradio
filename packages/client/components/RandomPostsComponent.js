import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  getAllCategorySelector,
  getAllCategory
} from '../stores/CategoryState';
import {
  getArticlesByCategory,
  getArticlesByCategoryDataSelector,
  getArticlesByRandomCategory,
  getArticlesByRandomCategoryDataSelector
} from '../stores/ArticleState';

import CardWithTopImageComponent from './CardWithTopImageComponent';

const connectToRedux = connect(
  createStructuredSelector({
    categories: getAllCategorySelector,
    articleByCategory: getArticlesByCategoryDataSelector,
    articleByRandomCategory: getArticlesByRandomCategoryDataSelector
  }),
  dispatch => ({
    GetAllCategory: () => {
      dispatch(getAllCategory());
    },
    GetArticlesByCategory: categoryId => {
      dispatch(getArticlesByCategory(categoryId));
    },
    GetArticlesByRandomCategory: () => {
      dispatch(getArticlesByRandomCategory());
    }
  })
);

const ARTICLES_BY_CATEGORY = 3;

class RandomPostsComponent extends React.Component {
  componentDidMount() {
    this.props.GetAllCategory();
    this.props.GetArticlesByRandomCategory();
  }
  render() {
    const { categories = [], articleByCategory = [] } = this.props;
    return (
      <div className="section">
        <h2 className="title text-center">
          You may also be interested in about
        </h2>
        <ul className="nav nav-pills nav-pills-primary justify-content-center">
          {categories &&
            categories.map((item, key) => (
              <li className="nav-item" key={key}>
                <a
                  className="nav-link"
                  data-toggle="tab"
                  onClick={() => {
                    this.props.GetArticlesByCategory(item.id);
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
        </ul>

        <div className="row">
          {articleByCategory
            .slice(0, ARTICLES_BY_CATEGORY)
            .map((item, index) => (
              <CardWithTopImageComponent
                category={item.category}
                title={item.title}
                description={item.description}
                image={item.imageDescription}
                key={index}
                articleId={item.id}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default connectToRedux(RandomPostsComponent);
