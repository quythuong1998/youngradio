import React from 'react';
import UserPageLayout from '../layouts/UserPageLayout';
import AdminDashboardComponent from '../components/AdminDashboardComponent';
import AuthenHOC from '../components/HOC/AuthenHOC';

const SharePage = rootProps => (
  <UserPageLayout {...rootProps} title="not config">
    {/* TODO: CHECK AUTHORIZATION */}
    <AdminDashboardComponent />
  </UserPageLayout>
);

export default AuthenHOC(SharePage);
