import React from 'react';
import UserPageLayout from '../../layouts/UserPageLayout';
import ManageCategoryComponent from '../../components/ManageCategoryComponent';
import AuthenHOC from '../../components/HOC/AuthenHOC';

const ManageCategoryPage = rootProps => (
  <UserPageLayout {...rootProps} title="not config">
    <ManageCategoryComponent />
  </UserPageLayout>
);

export default AuthenHOC(ManageCategoryPage);
