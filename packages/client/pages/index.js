import React from 'react';
import UserPageLayout from '../layouts/UserPageLayout';
import BlogsComponent from '../components/BlogsComponent';

const BlogsPage = rootProps => (
  <UserPageLayout {...rootProps} title="not config">
    <BlogsComponent />
  </UserPageLayout>
);

export default BlogsPage;
