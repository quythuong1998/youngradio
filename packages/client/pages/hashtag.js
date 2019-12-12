import React from 'react';
import UserPageLayout from '../layouts/UserPageLayout';
import ArticleByHashtagComponent from '../components/ArticleByHashtagComponent';

const HashTagPage = ({ keyword, ...rootProps }) => (
  <UserPageLayout {...rootProps}>
    <ArticleByHashtagComponent keyword={keyword} />
  </UserPageLayout>
);

HashTagPage.getInitialProps = ctx => {
  const {
    query: { keyword }
  } = ctx;
  return {
    keyword: { hashtag: keyword }
  };
};

export default HashTagPage;
