import React from 'react';
import HomePageLayout from '../layouts/HomePageLayout';
import IndexBodyComponent from '../components/IndexBodyComponent';
const IndexPage = rootProps => (
  <HomePageLayout {...rootProps} title="not config">
    <IndexBodyComponent />
  </HomePageLayout>
);

export default IndexPage;
