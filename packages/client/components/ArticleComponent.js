import React from 'react';
import parse from 'html-react-parser';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PageNotFoundComponent from '../components/PageNotFoundComponent';
import {
  getArticle,
  getArticleDataSelector,
  resetDataGetArticle
} from '../stores/ArticleState';
import {
  getAuthorByIdDataSelector,
  resetDataGetAuthorById
} from '../stores/UserState';
import ArticleDescriptionComponent from '../components/ArticleDescriptionComponent';
import ArticleContentComponent from '../components/ArticleContentComponent';
import ArticleCommentComponent from './ArticleCommentComponent';
const connectToRedux = connect(
  createStructuredSelector({
    articleData: getArticleDataSelector,
    authorData: getAuthorByIdDataSelector
  }),
  dispatch => ({
    GetArticle: articleId => {
      dispatch(getArticle(articleId));
    },

    resetData: () => {
      resetDataGetArticle(dispatch);
      resetDataGetAuthorById(dispatch);
    }
  })
);

class ArticleComponent extends React.Component {
  componentDidMount() {
    const { articleId } = this.props;
    this.props.GetArticle(articleId.id);
  }

  componentWillUnmount() {
    this.props.resetData();
  }

  render() {
    const { articleData, authorData } = this.props;
    const contentData = articleData && parse(articleData.content);

    return (
      <React.Fragment>
        {!articleData ? (
          <PageNotFoundComponent />
        ) : (
          <div>
            <ArticleDescriptionComponent
              title={articleData.title}
              description={articleData.description}
              image={articleData.imageDescription}
            />
            <div className="main main-raised" id="content-section">
              <div className="container">
                <ArticleContentComponent
                  title={articleData.title}
                  contents={contentData}
                  tags={articleData.hastags}
                  authorData={authorData}
                />

                <ArticleCommentComponent articleData={articleData} />
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default connectToRedux(ArticleComponent);
