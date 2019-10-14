import React from 'react';
import UserPageLayout from '../layouts/UserPageLayout';
import EditPostComponent from '../components/EditPostComponent';
import AuthenHOC from '../components/HOC/AuthenHOC';

const EditArticlePage = ({ articleId, ...rootProps }) => (
  <UserPageLayout {...rootProps}>
    <EditPostComponent articleId={articleId} />
  </UserPageLayout>
);

EditArticlePage.getInitialProps = ctx => {
  const {
    query: { id }
  } = ctx;
  return {
    articleId: { id }
  };
};

export default AuthenHOC(EditArticlePage);
