import React from 'react';
import UserPageLayout from '../layouts/UserPageLayout';
import SharePostComponent from '../components/SharePostComponent';
import AuthenHOC from '../components/HOC/AuthenHOC';

const SharePage = rootProps => (
  <UserPageLayout {...rootProps} title="not config">
    <SharePostComponent />
  </UserPageLayout>
);

export default AuthenHOC(SharePage);
