import { makeFetchAction } from 'redux-api-call';
import { respondToSuccess } from '../middlewares/api-reaction';
import { flow, path } from 'lodash/fp';
import { gql } from '../libs/graphql';
// import { createErrorSelector } from './AdminState';

export const GET_ALL_CATEGORY_API = 'GetAllCategoryAPI';
export const CREATE_CATEGORY_API = 'CreateCategoryAPI';
export const DELETE_CATEGORY_API = 'DeleteCategoryAPI';
export const EDIT_CATEGORY_API = 'EditCategoryAPI';

const EditCategoryAPI = makeFetchAction(
  EDIT_CATEGORY_API,
  gql`
    mutation($id: String!, $name: String!, $description: String!) {
      edit_category(id: $id, name: $name, description: $description) {
        name
      }
    }
  `
);

export const editCategory = (id, name, description) => {
  return respondToSuccess(
    EditCategoryAPI.actionCreator({ id, name, description }),
    resp => {
      if (resp.errors) {
        console.error('Err:', resp.errors);
        return;
      }
      return;
    }
  );
};

export const editCategorySelector = flow(
  EditCategoryAPI.dataSelector,
  path('data.edit_category')
);

const DeleteCategoryAPI = makeFetchAction(
  DELETE_CATEGORY_API,
  gql`
    mutation($id: String!) {
      delete_category(id: $id) {
        id
      }
    }
  `
);

export const deleteCategory = id => {
  return respondToSuccess(DeleteCategoryAPI.actionCreator({ id }), resp => {
    if (resp.errors) {
      console.error('Err:', resp.errors);
      return;
    }
    return;
  });
};

export const deleteCategorySelector = flow(
  DeleteCategoryAPI.dataSelector,
  path('data.delete_category')
);

const CreateCategoryAPI = makeFetchAction(
  CREATE_CATEGORY_API,
  gql`
    mutation($name: String!, $description: String!) {
      create_category(name: $name, description: $description) {
        name
      }
    }
  `
);

export const createCategory = (name, description) => {
  return respondToSuccess(
    CreateCategoryAPI.actionCreator({ name, description }),
    resp => {
      if (resp.errors) {
        console.error('Err:', resp.errors);
        return;
      }
      return;
    }
  );
};

export const createCategorySelector = flow(
  CreateCategoryAPI.dataSelector,
  path('data.create_category')
);

export const resetDataCreateCategory = dispatch => {
  dispatch(CreateCategoryAPI.resetter(['data', 'error']));
};

const GetAllCategoryAPI = makeFetchAction(
  GET_ALL_CATEGORY_API,
  gql`
    query {
      get_all_category {
        name
        id
        description
        createdAt
        updatedAt
      }
    }
  `
);

export const getAllCategory = () => {
  return respondToSuccess(GetAllCategoryAPI.actionCreator({}), resp => {
    if (resp.errors) {
      console.error('Err:', resp.errors);
      return;
    }
    return;
  });
};

export const getAllCategorySelector = flow(
  GetAllCategoryAPI.dataSelector,
  path('data.get_all_category')
);

export default {};
