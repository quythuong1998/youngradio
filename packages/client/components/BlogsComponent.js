import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  getMostViewArticles,
  mostViewArticlesDataSelector,
  getLastedArticles,
  lastedArticlesDataSelector
} from '../stores/ArticleState';
import MostViewPostsComponent from '../components/MostViewPostsComponent';
import RandomPostsComponent from '../components/RandomPostsComponent';
import TypicalAuthorsComponent from '../components/TypicalAuthorsComponent';
import LastedPostsComponent from '../components/LastedPostsComponent';

const connectToRedux = connect(
  createStructuredSelector({
    mostViewArticles: mostViewArticlesDataSelector,
    lastedArticles: lastedArticlesDataSelector
  }),
  dispatch => ({
    GetMostViewArticles: amount => {
      dispatch(getMostViewArticles(amount));
    },
    GetLastedArticles: amount => {
      dispatch(getLastedArticles(amount));
    }
  })
);
const MOST_VIEW_ARTICLES = 3;
const LASTED_ARTICLES = 3;

class IndexBodyComponent extends React.Component {
  componentDidMount() {
    this.props.GetMostViewArticles(MOST_VIEW_ARTICLES);
    this.props.GetLastedArticles(LASTED_ARTICLES);
  }

  render() {
    const { mostViewArticles, lastedArticles } = this.props;
    return (
      <div className="main main-raised">
        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col-md-8 ml-auto mr-auto text-center">
                <h2 className="title">From my heart with love ...</h2>
              </div>
            </div>
          </div>
          <MostViewPostsComponent mostViewArticlesData={mostViewArticles} />
          <LastedPostsComponent lastedArticlesData={lastedArticles} />
          <RandomPostsComponent />
          <TypicalAuthorsComponent />
        </div>
      </div>
    );
  }
}

export default connectToRedux(IndexBodyComponent);
