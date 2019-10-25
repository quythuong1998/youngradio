import React from 'react';
import Link from 'next/link';

const AuthorCardComponent = ({ image, name, profession, quote, userId }) => (
  <div className="col-md-4">
    <div className="card card-testimonial card-plain">
      <div className="card-avatar">
        <Link href={`/user?id=${userId}`}>
          <a>
            <img className="img" src={image} alt="mock-img" />
          </a>
        </Link>
      </div>
      <div className="card-body ">
        <h4 className="card-title">{name}</h4>
        <h6 className="card-category text-muted">{profession}</h6>
        <h5 className="card-description">&quot; {quote} &quot;</h5>
      </div>
    </div>
  </div>
);

export default AuthorCardComponent;
