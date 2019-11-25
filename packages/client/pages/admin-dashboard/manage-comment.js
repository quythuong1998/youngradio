import React from 'react';
import UserPageLayout from '../../layouts/UserPageLayout';
import ManageCommentComponent from '../../components/ManageCommentComponent';
import AuthenHOC from '../../components/HOC/AuthenHOC';
import AdminDashboardLayout from '../../layouts/AdminDashboardLayout';

const ManageCommentPage = rootProps => (
  <UserPageLayout {...rootProps} title="not config">
    <AdminDashboardLayout />
    <ManageCommentComponent />
  </UserPageLayout>
);

export default AuthenHOC(ManageCommentPage);
