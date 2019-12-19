import React from 'react';
import Link from 'next/link';
import { USER, ADMIN } from '../enums/userRole';
import { ARTICLE } from '../enums/postType';

const PostSuccessComponent = ({
  userRole = ADMIN,
  articleId,
  type = ARTICLE
}) => (
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
        {type === ARTICLE ? (
          <Link href={`/article?id=${articleId}`}>
            <a>View your article</a>
          </Link>
        ) : (
          <Link href={`/radio?id=${articleId.id}`}>
            <a>View your article</a>
          </Link>
        )}
      </div>
    </div>
  </div>
);

export default PostSuccessComponent;
