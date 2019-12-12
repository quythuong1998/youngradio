import { makeFetchAction } from 'redux-api-call';
import { respondToSuccess } from '../middlewares/api-reaction';
import { flow, path } from 'lodash/fp';
import { gql } from '../libs/graphql';
// import { createErrorSelector } from './AdminState';
export const GET_ALL_CATEGORY_API = 'GetAllCategoryAPI';
export const GET_CATEGORY_INFO_API = 'GetCategoryInfoAPI';

const GetCategoryInfoAPI = makeFetchAction(
  GET_CATEGORY_INFO_API,
  gql`
    query($categoryId: String!) {
      get_category_info(categoryId: $categoryId) {
        name
        description
      }
    }
  `
);
export const getCategoryInfo = categoryId => {
  return respondToSuccess(
    GetCategoryInfoAPI.actionCreator({ categoryId }),
    resp => {
      if (resp.errors) {
        console.error('Err:', resp.errors);
        return;
      }
      return;
    }
  );
};

export const getCategoryInfoDataSelector = flow(
  GetCategoryInfoAPI.dataSelector,
  path('data.get_category_info')
);

export const resetDataGetCategoryInfo = dispatch => {
  dispatch(GetCategoryInfoAPI.resetter(['data', 'error']));
};

const GetAllCategoryAPI = makeFetchAction(
  GET_ALL_CATEGORY_API,
  gql`
    query {
      get_all_category {
        name
        id
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
