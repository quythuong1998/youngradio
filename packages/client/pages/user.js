import React from 'react';
import UserPageLayout from '../layouts/UserPageLayout';
import UserPageComponent from '../components/UserPageComponent';
import AuthenHOC from '../components/HOC/AuthenHOC';

const UserPage = ({ userId, ...rootProps }) => (
  <UserPageLayout {...rootProps} title="not config">
    <UserPageComponent userId={userId} />
  </UserPageLayout>
);

UserPage.getInitialProps = ctx => {
  const {
    query: { id }
  } = ctx;
  return {
    userId: { id }
  };
};

export default AuthenHOC(UserPage);
