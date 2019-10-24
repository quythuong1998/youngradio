import React from 'react';
import HomePageLayout from '../layouts/HomePageLayout';
import BlogsComponent from '../components/BlogsComponent';

const BlogsPage = rootProps => (
  <HomePageLayout {...rootProps} title="not config">
    <BlogsComponent />
  </HomePageLayout>
);

export default BlogsPage;
