import React from 'react';
import UserPageLayout from '../../layouts/UserPageLayout';
import ManageCategoryComponent from '../../components/ManageCategoryComponent';
import AuthenHOC from '../../components/HOC/AuthenHOC';
import AdminDashboardLayout from '../../layouts/AdminDashboardLayout';

const ManageCategoryPage = rootProps => (
  <UserPageLayout {...rootProps} title="not config">
    <AdminDashboardLayout />
    <ManageCategoryComponent />
  </UserPageLayout>
);

export default AuthenHOC(ManageCategoryPage);
