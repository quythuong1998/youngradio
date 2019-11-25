import moment from 'moment';
import Link from 'next/link';
import React from 'react';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import Popup from 'reactjs-popup';
import { createStructuredSelector } from 'reselect';
import {
  getAllArticles,
  getAllArticlesDataSelector,
  deleteArticle
} from '../stores/ArticleState';

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

const mapCategoriesTodataFeild = ({
  articles = [],
  deleteArticle,
  refeshArticleList
}) =>
  articles.map(article => ({
    title: (
      <div>
        <Link href={`/article?id=${article.id}`}>
          <a className="ml-1">{article.title}</a>
        </Link>
      </div>
    ),
    author: (
      <div>
        <Link href={`/user?id=${article.authorId}`}>
          <a className="ml-1">{article.authorName}</a>
        </Link>
      </div>
    ),
    category: (
      <div>
        <Link href={`/category?id=${article.categoryId}`}>
          <a className="ml-1">{article.categoryName}</a>
        </Link>
      </div>
    ),
    createdAt: moment(article.createdAt).format('DD MMM YYYY'),
    action: (
      <td className="td-actions text-right">
        <Link href={`/edit-article?id=${article.id}`}>
          <button
            type="button"
            rel="tooltip"
            className="btn btn-success btn-round btn-just-icon btn-sm"
            data-original-title="edit"
            title="Edit"
          >
            <i className="material-icons">edit</i>
          </button>
        </Link>

        <Popup
          trigger={
            <button
              type="button"
              rel="tooltip"
              className="btn btn-danger btn-round btn-just-icon btn-sm"
              data-original-title=""
              title="Delete"
            >
              <i className="material-icons">close</i>
            </button>
          }
          modal
        >
          {close => (
            <div>
              <div className="modal-body">
                <div className="card-title text-center">
                  <div className="icon-custom center">
                    <i className="material-icons">delete</i>
                    <h3 className="text-truncate">
                      Do you want to delete "{article.title}"
                    </h3>
                    <p>It can't be recovery :(</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={e => {
                    e.preventDefault();
                    deleteArticle(article.id);
                    refeshArticleList();
                    close();
                  }}
                >
                  Detele
                </button>
                <button
                  type="button"
                  className="btn btn-link"
                  onClick={() => close()}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </Popup>
      </td>
    )
  }));

class ManageArticleComponent extends React.Component {
  componentDidMount() {
    this.props.getAllArticles();
  }

  render() {
    const { articles, deleteArticle, getAllArticles } = this.props;
    const COLUMNS = [
      {
        accessor: 'title',
        Header: 'Title'
      },
      {
        accessor: 'author',
        Header: 'Author'
      },
      {
        accessor: 'category',
        Header: 'Category'
      },
      {
        accessor: 'createdAt',
        Header: 'Created At'
      },
      {
        accessor: 'action',
        Header: 'Action',
        className: 'd-flex justify-content-center'
      }
    ];

    return (
      <>
        <link
          rel="stylesheet"
          type="text/css"
          href="/static/customs/react-table.css"
        />

        <div className="main main-raised">
          <div className="container">
            <Link href="/admin-dashboard">
              <button className="btn btn-fab btn-lg btn-round mt-4">
                <i className="material-icons">keyboard_backspace</i>
              </button>
            </Link>

            <div className="card card-plain">
              <div className="card-body">
                <h3 className="card-title">Manage Articles</h3>
                <div className="row">
                  <div className="col-sm-4">
                    <Link href="/share">
                      <a className="btn btn-success btn-round btn-block">
                        <i className="material-icons">add</i> Add new article
                      </a>
                    </Link>
                  </div>
                  <div className="col-sm-8">
                    <span className="bmd-form-group">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="material-icons">search</i>
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name of article..."
                        />
                      </div>
                    </span>
                  </div>
                </div>
                <br />

                <ReactTable
                  data={mapCategoriesTodataFeild({
                    articles,
                    deleteArticle,
                    refeshArticleList: getAllArticles
                  })}
                  manual // Forces table not to paginate or sort automatically, so we can handle it server-side
                  // pages={Math.ceil(
                  //   totalCount / (pageSize || PAGE_SIZE_DEFAULT)
                  // )} // Display the total number of pages
                  // onFetchData={e => this.fetchData(e, { dispatchAction })}
                  defaultPageSize={5}
                  // page={page || PAGE_DEFAULT}
                  // pageSize={pageSize || PAGE_SIZE_DEFAULT}
                  className="-striped -highlight"
                  columns={COLUMNS}
                  // previousText={
                  //   <div className="custom-button-footer">
                  //     {t('table.previous_text')}
                  //   </div>
                  // }
                  // nextText={
                  //   <div className="custom-button-footer">
                  //     {t('table.next_text')}
                  //   </div>
                  // }
                  // noDataText={t('table.no_rows_text')}
                  // pageText={t('table.page_text')}
                  // rowsText={t('table.rows_text')}
                  // loadingText={t('table.loading_text')}
                  // ofText={t('table.of_text')}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connectToRedux(ManageArticleComponent);
