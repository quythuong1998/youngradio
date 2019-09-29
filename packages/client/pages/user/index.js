import React from 'react';
import UserPageLayout from '../../layouts/UserPageLayout';
import UserPageComponent from '../../components/UserPageComponent';
import AuthenHOC from '../../components/HOC/AuthenHOC';

const UserPage = rootProps => (
  <UserPageLayout {...rootProps} title="not config">
    <UserPageComponent />
  </UserPageLayout>
);

export default AuthenHOC(UserPage);
