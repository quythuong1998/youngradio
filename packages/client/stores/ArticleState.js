import { makeFetchAction } from 'redux-api-call';
import { respondToSuccess } from '../middlewares/api-reaction';
import { flow, path, map, join } from 'lodash/fp';
import { gql } from '../libs/graphql';

export const CREATE_ARTICLE_API = 'CreateArticleAPI';

const CreateArticleAPI = makeFetchAction(
  CREATE_ARTICLE_API,
  gql`
    mutation(
      $title: String!
      $content: String!
      $categoryId: String!
      $hastags: [String]
      $description: String!
      $imageDescription: String
    ) {
      create_article(
        title: $title
        content: $content
        categoryId: $categoryId
        hastags: $hastags
        description: $description
        imageDescription: $imageDescription
      ) {
        id
      }
    }
  `
);

export const createArticle = ({
  title,
  description,
  content,
  categoryId,
  hastags,
  imageDescription
}) => {
  return respondToSuccess(
    CreateArticleAPI.actionCreator({
      title,
      content,
      description,
      categoryId,
      hastags,
      imageDescription
    }),
    resp => {
      if (resp.errors) {
        console.error('Err:', resp.errors);
        return;
      }
      return;
    }
  );
};

export const createArticleDataSelector = flow(
  CreateArticleAPI.dataSelector,
  path('data.create_article')
);

export const createArticleErrorMessageSelector = flow(
  CreateArticleAPI.dataSelector,
  path('errors'),
  map('message'),
  join(' | ')
);

export const resetDataCreateArticle = dispatch => {
  dispatch(CreateArticleAPI.resetter(['data', 'error']));
};

export default {};
