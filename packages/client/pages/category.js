import React from 'react';
import UserPageLayout from '../layouts/UserPageLayout';
import ArticleByCategoryComponent from '../components/ArticleByCategoryComponent';

const CategoryPage = ({ categoryId, ...rootProps }) => (
  <UserPageLayout {...rootProps}>
    <ArticleByCategoryComponent categoryId={categoryId} />   
  </UserPageLayout>
);

CategoryPage.getInitialProps = async ctx => {
  const {
    query: { id }
  } = ctx;
  return {
    categoryId: { id }
  };
};

export default CategoryPage;
