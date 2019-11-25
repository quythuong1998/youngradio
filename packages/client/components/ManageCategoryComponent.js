import React from 'react';
import { compose, withState } from 'recompose';
import Link from 'next/link';
import ReactTable from 'react-table';
import Popup from 'reactjs-popup';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import moment from 'moment';

import {
  createCategory,
  createCategorySelector,
  resetDataCreateCategory,
  getAllCategory,
  getAllCategorySelector,
  deleteCategory,
  deleteCategorySelector,
  editCategory,
  editCategorySelector
} from '../stores/CategoryState';

const withCategoryName = withState('categoryName', 'setCategoryName', '');
const withCategoryDescription = withState(
  'categoryDescription',
  'setCategoryDescription',
  ''
);
const withEditCategoryName = withState(
  'editCategoryName',
  'setEditCategoryName',
  ''
);
const withEditCategoryDescription = withState(
  'editCategoryDescription',
  'setEditCategoryDescription',
  ''
);
const connectToRedux = connect(
  createStructuredSelector({
    createCategory: createCategorySelector,
    categories: getAllCategorySelector,
    deleteCategorySuccessMessage: deleteCategorySelector,
    editCategorySuccessMessage: editCategorySelector
  }),
  dispatch => ({
    CreateCategory: (name, description) => {
      name && description && dispatch(createCategory(name, description));
    },
    resetData: () => {
      resetDataCreateCategory(dispatch);
    },
    GetAllCategory: () => {
      dispatch(getAllCategory());
    },
    deleteCategory: id => {
      dispatch(deleteCategory(id));
    },
    editCategory: (id, name, description) => {
      name && description && dispatch(editCategory(id, name, description));
    }
  })
);

const enhance = compose(
  withEditCategoryDescription,
  withEditCategoryName,
  connectToRedux,
  withCategoryName,
  withCategoryDescription
);

const mapCategoriesTodataFeild = ({
  categories = [],
  deleteCategory,
  refeshCategoryList,
  setEditCategoryName,
  setEditCategoryDescription,
  editCategory,
  editCategoryName,
  editCategoryDescription
}) =>
  categories.map(category => ({
    name: (
      <div>
        <Link href={`/category?id=${category.id}`}>
          <a className="ml-1">{category.name}</a>
        </Link>
      </div>
    ),
    description: category.description,
    createdAt: moment(category.createdAt).format('DD MMM YYYY'),
    action: (
      <td className="td-actions text-right">
        <Popup
          trigger={
            <button
              type="button"
              rel="tooltip"
              className="btn btn-success btn-round btn-just-icon btn-sm"
              data-original-title=""
              title="Edit"
            >
              <i className="material-icons">edit</i>
            </button>
          }
          modal
        >
          {close => (
            <div>
              <div className="modal-body">
                <div className="form-group">
                  <div className="card-title center">
                    <h3>Edit category "{category.name}"</h3>
                  </div>
                  <input
                    id="input-field"
                    type="text"
                    className="form-control"
                    placeholder={category.name}
                    onChange={e => setEditCategoryName(e.currentTarget.value)}
                  />
                  <div className="form-group bmd-form-group">
                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder={category.description}
                      onChange={e =>
                        setEditCategoryDescription(e.currentTarget.value)
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={e => {
                    e.preventDefault();
                    editCategory(
                      category.id,
                      editCategoryName,
                      editCategoryDescription
                    );
                    close();
                    refeshCategoryList();
                  }}
                >
                  Edit category
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
                    <h3>Do you want to delete "{category.name}"</h3>
                    <p>
                      All post of {category.name} also be deleted and can't
                      recovery :(
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={e => {
                    e.preventDefault();
                    deleteCategory(category.id);
                    refeshCategoryList();
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

class ManageCategoryComponent extends React.Component {
  componentDidMount() {
    this.props.GetAllCategory();
  }

  render() {
    const {
      categoryName,
      setCategoryName,
      createCategory,
      CreateCategory,
      categoryDescription,
      setCategoryDescription,
      resetData,
      categories,
      deleteCategory,
      GetAllCategory,
      editCategoryName,
      setEditCategoryName,
      editCategoryDescription,
      setEditCategoryDescription,
      editCategory
    } = this.props;

    const COLUMNS = [
      {
        accessor: 'name',
        Header: 'Name'
      },
      {
        accessor: 'description',
        Header: 'Description'
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
                <h3 className="card-title">Manage Categories</h3>
                <div className="row">
                  <div className="col-sm-4">
                    <Popup
                      trigger={
                        <button
                          type="button"
                          className="btn btn-success btn-round btn-block"
                        >
                          Add new category
                        </button>
                      }
                      modal
                    >
                      {close =>
                        createCategory && createCategory.name ? (
                          <div>
                            <div className="icon-custom center">
                              <i className="material-icons">done_outline</i>
                              <h4 className="card-description">
                                {createCategory &&
                                  `"${createCategory.name}" has been created successfuly!`}
                              </h4>
                              <button
                                type="button"
                                className="btn"
                                onClick={() => {
                                  resetData();
                                  this.props.GetAllCategory();
                                  close();
                                }}
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <div className="modal-body">
                              <div className="form-group">
                                <div className="card-title">
                                  <h3>Create new category</h3>
                                </div>
                                <input
                                  id="input-field"
                                  type="text"
                                  className="form-control"
                                  placeholder="Name of the category"
                                  onChange={e =>
                                    setCategoryName(e.currentTarget.value)
                                  }
                                />
                                <div className="form-group bmd-form-group">
                                  <textarea
                                    className="form-control"
                                    rows="5"
                                    placeholder="Write some descriptions"
                                    onChange={e =>
                                      setCategoryDescription(
                                        e.currentTarget.value
                                      )
                                    }
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="text-center">
                              <button
                                type="button"
                                className="btn btn-success"
                                onClick={e => {
                                  e.preventDefault();
                                  CreateCategory(
                                    categoryName,
                                    categoryDescription
                                  );
                                }}
                              >
                                Create voting
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
                        )
                      }
                    </Popup>
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
                          placeholder="Name of category..."
                        />
                      </div>
                    </span>
                  </div>
                </div>
                <br />

                <ReactTable
                  data={mapCategoriesTodataFeild({
                    categories,
                    deleteCategory,
                    refeshCategoryList: GetAllCategory,
                    editCategory,
                    editCategoryDescription,
                    editCategoryName,
                    setEditCategoryDescription,
                    setEditCategoryName
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

export default enhance(ManageCategoryComponent);
