import React from 'react';
import HomePageLayout from '../layouts/HomePageLayout';

import IndexBodyComponent from '../components/IndexBodyComponent';
const UserLogin = rootProps => (
  <HomePageLayout {...rootProps} title="not config">
    <IndexBodyComponent />
  </HomePageLayout>
);

export default UserLogin;
