import React from 'react';
import UserPageLayout from '../layouts/UserPageLayout';
import RadioBlogsComponent from '../components/RadioBlogsComponent';

const RadioBlogsPage = rootProps => (
  <UserPageLayout {...rootProps} title="not config">
    <RadioBlogsComponent />
  </UserPageLayout>
);

export default RadioBlogsPage;
