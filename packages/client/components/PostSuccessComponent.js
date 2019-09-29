import React from 'react';
import Link from 'next/link';
import { USER } from '../enums/userRole';
const PostSuccessComponent = ({ userRole }) => (
  <div className="row">
    <div className="col-lg-6">
      <img
        src="/static/images/shared.png"
        className="rounded"
        alt="notify"
        width="100%"
      />
    </div>
    <div className="col-lg-6 text-center justify-content-center d-flex align-items-center">
      <div className="">
        <h3>Your article was posted!</h3>
        {userRole === USER && (
          <h4>Pleae waiting for approval from moderator!</h4>
        )}
        <Link href="/">
          <a>View your article</a>
        </Link>
      </div>
    </div>
  </div>
);

export default PostSuccessComponent;
