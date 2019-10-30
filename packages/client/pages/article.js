import React from 'react';
import UserPageLayout from '../layouts/UserPageLayout';
import ArticleComponent from '../components/ArticleComponent';

const ArticlePage = ({ articleId, ...rootProps }) => (
  <UserPageLayout {...rootProps}>
        
    <ArticleComponent articleId={articleId} />
      
  </UserPageLayout>
);

ArticlePage.getInitialProps = ctx => {
  const {
    query: { id }
  } = ctx;
  return {
    articleId: { id }
  };
};

export default ArticlePage;
