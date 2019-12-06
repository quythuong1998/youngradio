import React from 'react';
import UserPageLayout from '../layouts/UserPageLayout';
import PostSuccessComponent from '../components/PostSuccessComponent';
import AuthenHOC from '../components/HOC/AuthenHOC';
import { RADIO } from '../enums/postType';
const SharedPage = ({ id, ...rootProps }) => (
  <UserPageLayout {...rootProps}>
    <div className="product-page sidebar-collapse">
      <div
        className="page-header header-filter share-background-image"
        data-parallax="true"
        filter-color="grey"
      ></div>
      <div className="section">
        <div className="container">
          <div className="main main-raised main-product">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <h2 className="title text-center"> Share Blog Radio </h2>
                <PostSuccessComponent type={RADIO} articleId={id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style jsx>
      {`
        .share-background-image {
          background-image: url('/static/material/assets/img/bg6.jpg');
        }
      `}
    </style>
  </UserPageLayout>
);

SharedPage.getInitialProps = ctx => {
  const {
    query: { id }
  } = ctx;
  return {
    id: { id }
  };
};

export default AuthenHOC(SharedPage);
