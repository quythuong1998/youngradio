import React from 'react';

import HomePageLayout from '../layouts/HomePageLayout';
import FeaturePostsComponent from '../components/FeaturePostsComponent';
import LastedBlogPostsComponent from '../components/LastedBlogPostsComponent';

const UserLogin = rootProps => (
  <HomePageLayout {...rootProps} title="not config">
    {/* <FeaturePostsComponent /> */}
    <LastedBlogPostsComponent />
  </HomePageLayout>
);

export default UserLogin;
