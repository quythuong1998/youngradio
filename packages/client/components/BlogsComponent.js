import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  getMostViewArticles,
  mostViewArticlesDataSelector,
  getLastedArticles,
  lastedArticlesDataSelector
} from '../stores/ArticleState';

import {
  getTypycalUsers,
  getTypycalUsersDataSelector
} from '../stores/UserState';

import {
  getLastedBlogRadio,
  getLastedBlogRadioDataSelector
} from '../stores/RadioState';

import MostViewPostsComponent from './MostViewPostsComponent';
import RandomPostsComponent from './RandomPostsComponent';
import TypicalAuthorsComponent from './TypicalAuthorsComponent';
import LastedPostsComponent from './LastedPostsComponent';
import LastedRadioComponent from './LastedRadioComponent';

const connectToRedux = connect(
  createStructuredSelector({
    mostViewArticles: mostViewArticlesDataSelector,
    lastedArticles: lastedArticlesDataSelector,
    typycalUsers: getTypycalUsersDataSelector,
    lastedBlogRadio: getLastedBlogRadioDataSelector
  }),
  dispatch => ({
    GetMostViewArticles: amount => {
      dispatch(getMostViewArticles(amount));
    },
    GetLastedArticles: amount => {
      dispatch(getLastedArticles(amount));
    },
    GetTypycalUsers: () => {
      dispatch(getTypycalUsers());
    },
    getLastedBlogRadio: () => {
      dispatch(getLastedBlogRadio());
    }
  })
);
const MOST_VIEW_ARTICLES = 3;
const LASTED_ARTICLES = 3;

class IndexBodyComponent extends React.Component {
  componentDidMount() {
    this.props.GetMostViewArticles(MOST_VIEW_ARTICLES);
    this.props.GetLastedArticles(LASTED_ARTICLES);
    this.props.GetTypycalUsers();
    this.props.getLastedBlogRadio();
  }

  render() {
    const {
      mostViewArticles = [],
      lastedArticles = [],
      typycalUsers = [],
      lastedBlogRadio = []
    } = this.props;
    return (
      <div className="main main-raised">
        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col-md-8 ml-auto mr-auto text-center">
                <h2 className="title">New radio from my heart with love ...</h2>
              </div>
            </div>
          </div>
          <LastedRadioComponent lastedBlogRadio={lastedBlogRadio} />
          <MostViewPostsComponent mostViewArticlesData={mostViewArticles} />
          <LastedPostsComponent lastedArticlesData={lastedArticles} />
          <RandomPostsComponent />
          <TypicalAuthorsComponent typycalUsersData={typycalUsers} />
        </div>
        <style jsx>
          {`
            .section {
              padding: 40px 0;
            }
          `}
        </style>
      </div>
    );
  }
}

export default connectToRedux(IndexBodyComponent);
