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
import ArticleDescriptionComponent from '../components/ArticleDescriptionComponent';
import ArticleContentComponent from '../components/ArticleContentComponent';

const connectToRedux = connect(
  createStructuredSelector({
    articleData: getArticleDataSelector
  }),
  dispatch => ({
    GetArticle: articleId => {
      dispatch(getArticle(articleId));
    },
    resetData: () => {
      resetDataGetArticle(dispatch);
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
    const { articleData } = this.props;
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
            <ArticleContentComponent
              title={articleData.title}
              contents={contentData}
              tags={articleData.hastags}
              authorId={articleData.authorId}
            />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default connectToRedux(ArticleComponent);
