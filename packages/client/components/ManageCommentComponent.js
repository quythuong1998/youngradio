import Link from 'next/link';
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  deleteArticle,
  getAllArticles,
  getAllArticlesDataSelector
} from '../stores/ArticleState';
import DisqusLogoComponent from './DisqusLogoComponent';

const DISQUS_SHORT_NAME = process.env.DISQUS_SHORT_NAME || 'youngradio';

const connectToRedux = connect(
  createStructuredSelector({
    articles: getAllArticlesDataSelector
  }),
  dispatch => ({
    getAllArticles: () => {
      dispatch(getAllArticles());
    },
    deleteArticle: id => {
      dispatch(deleteArticle(id));
    }
  })
);

class ManageArticleComponent extends React.Component {
  render() {
    return (
      <div className="main main-raised">
        <div className="container">
          <Link href="/admin-dashboard">
            <button className="btn btn-fab btn-lg btn-round mt-4">
              <i className="material-icons">keyboard_backspace</i>
            </button>
          </Link>

          <div className="card card-plain">
            <div className="card-body">
              <h3 className="card-title">Manage Comments</h3>
              <div className="row center">
                <div className="col-lg-12">
                  <div className="mt-2">
                    <DisqusLogoComponent />
                  </div>
                  <h3> You can manage all comments by 3rd party module at </h3>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://${DISQUS_SHORT_NAME}.disqus.com/admin`}
                  >
                    <button className="btn btn-social btn-fill btn-github">
                      <i class="material-icons">comment</i>
                      https://{DISQUS_SHORT_NAME}.disqus.com/admin
                      <div className="ripple-container"></div>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connectToRedux(ManageArticleComponent);
