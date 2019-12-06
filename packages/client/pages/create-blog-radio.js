import React from 'react';
import AuthenHOC from '../components/HOC/AuthenHOC';
import ShareBlogRadioComponent from '../components/ShareBlogRadioComponent';
import UserPageLayout from '../layouts/UserPageLayout';

const CreateBlogRadioPage = rootProps => (
  <UserPageLayout {...rootProps} title="not config">
    <ShareBlogRadioComponent />
  </UserPageLayout>
);

export default AuthenHOC(CreateBlogRadioPage);
