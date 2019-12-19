import React from 'react';
import UserPageLayout from '../../layouts/UserPageLayout';
import ManageArticleComponent from '../../components/ManageArticleComponent';
import AuthenHOC from '../../components/HOC/AuthenHOC';
import AdminDashboardLayout from '../../layouts/AdminDashboardLayout';
const ManageArticlePage = rootProps => (
  <UserPageLayout {...rootProps} title="not config">
    <AdminDashboardLayout />
    <ManageArticleComponent />
  </UserPageLayout>
);

export default AuthenHOC(ManageArticlePage);
