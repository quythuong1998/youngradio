import { makeFetchAction } from 'redux-api-call';
import { respondToSuccess } from '../middlewares/api-reaction';
import { flow, includes, join, map, path, get } from 'lodash/fp';
import { gql } from '../libs';
// import { createErrorSelector } from './AdminState';

const GET_ALL_CATEGORY_API = 'GetAllCategoryAPI';

const GetAllCategoryAPI = makeFetchAction(
  GET_ALL_CATEGORY_API,
  gql`
    query {
      get_all_category {
        name
      }
    }
  `
);

export const getAllCategory = () => {
  return respondToSuccess(GetAllCategoryAPI.actionCreator(), resp => {
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
