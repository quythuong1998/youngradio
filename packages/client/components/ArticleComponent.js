import React from 'react';
import parse from 'html-react-parser';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PageNotFoundComponent from '../components/PageNotFoundComponent';
import { getArticle, getArticleDataSelector } from '../stores/ArticleState';
import ArticleDescriptionComponent from '../components/ArticleDescriptionComponent';
import ArticleContentComponent from '../components/ArticleContentComponent';

const connectToRedux = connect(
  createStructuredSelector({
    articleData: getArticleDataSelector
  }),
  dispatch => ({
    GetArticle: articleId => {
      dispatch(getArticle(articleId));
    }
  })
);

class ArticleComponent extends React.Component {
  componentDidMount() {
    const { articleId } = this.props;
    this.props.GetArticle(articleId.id);
  }
  render() {
    //   2e317881-42d3-42f3-b553-1c3645a646df
    const { articleData } = this.props;
    const contentData = articleData && parse(articleData.content);
    console.log(articleData);
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
            />
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default connectToRedux(ArticleComponent);
