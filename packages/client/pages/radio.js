import React from 'react';
import UserPageLayout from '../layouts/UserPageLayout';
import BlogRadioComponent from '../components/BlogRadioComponent';

const BlogRadioPage = ({ blogRadioId, ...rootProps }) => (
  <UserPageLayout {...rootProps}>
        
    <BlogRadioComponent blogRadioId={blogRadioId} />
      
  </UserPageLayout>
);

BlogRadioPage.getInitialProps = ctx => {
  const {
    query: { id }
  } = ctx;
  return {
    blogRadioId: { id }
  };
};

export default BlogRadioPage;
