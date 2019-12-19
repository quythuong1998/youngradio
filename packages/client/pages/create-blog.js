import React from 'react';
import AuthenHOC from '../components/HOC/AuthenHOC';
import SharePostComponent from '../components/SharePostComponent';
import UserPageLayout from '../layouts/UserPageLayout';

const CreateBlogPage = rootProps => (
  <UserPageLayout {...rootProps} title="not config">
    <SharePostComponent />
  </UserPageLayout>
);

export default AuthenHOC(CreateBlogPage);
