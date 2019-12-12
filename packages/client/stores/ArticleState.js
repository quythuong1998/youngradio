import { makeFetchAction } from 'redux-api-call';
import { respondToSuccess } from '../middlewares/api-reaction';
import { flow, path, map, join } from 'lodash/fp';
import { gql } from '../libs/graphql';
import { getAuthorById } from './UserState';
export const CREATE_ARTICLE_API = 'CreateArticleAPI';
export const GET_USER_ARTICLES_API = 'GetUserArticlesAPI';
export const GET_MOST_VIEW_ARTICLES_API = 'GetMostViewArticlesAPI';
export const GET_LASTED_ARTICLES_API = 'GetLastedArticlesAPI';
export const DELETE_ARTICLE_API = 'DeleteArticleAPI';
export const GET_ARTICLE = 'GetArticle';
export const EDIT_ARTICLE = 'EditArticle';
export const GET_ARTICLES_BY_CATEGORY = 'GetArticlesByCategory';
export const GET_ARTICLES_BY_RANDOM_CATEGORY = 'GetArticlesByRandomCategory';

export const resetDataEditArticle = dispatch => {
  dispatch(EditArticleAPI.resetter(['data', 'error']));
};

const EditArticleAPI = makeFetchAction(
  EDIT_ARTICLE,
  gql`
    mutation(
      $title: String!
      $content: String!
      $categoryId: String!
      $hastags: [String]
      $description: String!
      $imageDescription: String
      $id: String!
    ) {
      edit_article(
        title: $title
        content: $content
        categoryId: $categoryId
        hastags: $hastags
        description: $description
        imageDescription: $imageDescription
        id: $id
      ) {
        id
      }
    }
  `
);

export const editArticle = ({
  id,
  title,
  description,
  content,
  categoryId,
  hastags,
  imageDescription
}) => {
  return respondToSuccess(
    EditArticleAPI.actionCreator({
      id,
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

const GetArticleAPI = makeFetchAction(
  GET_ARTICLE,
  gql`
    query($id: String!) {
      get_article(id: $id) {
        id
        title
        description
        content
        categoryId
        hastags
        imageDescription
        authorId
      }
    }
  `
);

export const getArticle = id =>
  respondToSuccess(
    GetArticleAPI.actionCreator({ id }),
    (resp, headers, store) => {
      if (resp.errors) {
        console.error('Err:', resp.errors);
        return;
      }

      const authorId = resp.data.get_article.authorId;
      store.dispatch(getAuthorById(authorId));
      return;
    }
  );

export const getArticleDataSelector = flow(
  GetArticleAPI.dataSelector,
  path('data.get_article')
);

export const resetDataGetArticle = dispatch => {
  dispatch(GetArticleAPI.resetter(['data', 'error']));
};

const DeleteArticleAPI = makeFetchAction(
  DELETE_ARTICLE_API,
  gql`
    mutation($id: String!) {
      delete_article(id: $id) {
        id
      }
    }
  `
);

export const deleteArticle = id => {
  return respondToSuccess(
    DeleteArticleAPI.actionCreator({
      id
    }),
    (resp, headers, store) => {
      if (resp.errors) {
        console.error('Err:', resp.errors);
        return;
      }

      store.dispatch(getUserArticles());
      return;
    }
  );
};

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

const GetUserArticlesAPI = makeFetchAction(
  GET_USER_ARTICLES_API,
  gql`
    query($userId: String!) {
      get_user_articles(userId: $userId) {
        description
        imageDescription
        title
        category
        id
      }
    }
  `
);

export const getUserArticles = userId => {
  return respondToSuccess(
    GetUserArticlesAPI.actionCreator({ userId }),
    resp => {
      if (resp.errors) {
        console.error('Err:', resp.errors);
        return;
      }
      return;
    }
  );
};

export const getUserArticlesDataSelector = flow(
  GetUserArticlesAPI.dataSelector,
  path('data.get_user_articles')
);

export const resetDataGetUserArticles = dispatch => {
  dispatch(GetUserArticlesAPI.resetter(['data', 'error']));
};

const GetLastedArticlesAPI = makeFetchAction(
  GET_LASTED_ARTICLES_API,
  gql`
    query($amount: Int!) {
      get_lasted_articles(amount: $amount) {
        description
        imageDescription
        title
        category
        authorName
        authorAvatar
        authorId
        createdAt
        id
      }
    }
  `
);
export const getLastedArticles = amount => {
  return respondToSuccess(
    GetLastedArticlesAPI.actionCreator({ amount }),
    resp => {
      if (resp.errors) {
        console.error('Err:', resp.errors);
        return;
      }
      return;
    }
  );
};

const GetMostViewArticlesAPI = makeFetchAction(
  GET_MOST_VIEW_ARTICLES_API,
  gql`
    query($amount: Int!) {
      get_most_view_articles(amount: $amount) {
        description
        imageDescription
        title
        category
        id
      }
    }
  `
);

export const getMostViewArticles = amount => {
  return respondToSuccess(
    GetMostViewArticlesAPI.actionCreator({ amount }),
    resp => {
      if (resp.errors) {
        console.error('Err:', resp.errors);
        return;
      }
      return;
    }
  );
};

export const mostViewArticlesDataSelector = flow(
  GetMostViewArticlesAPI.dataSelector,
  path('data.get_most_view_articles')
);

export const lastedArticlesDataSelector = flow(
  GetLastedArticlesAPI.dataSelector,
  path('data.get_lasted_articles')
);

export const editArticleDataSelector = flow(
  EditArticleAPI.dataSelector,
  path('data.edit_article')
);

export const editArticleErrorMessageSelector = flow(
  EditArticleAPI.dataSelector,
  path('errors'),
  map('message'),
  join(' | ')
);

// export const createArticleDataSelector = flow(
//   CreateArticleAPI.dataSelector,
//   path('data.create_article')
// );

// export const createArticleErrorMessageSelector = flow(
//   CreateArticleAPI.dataSelector,
//   path('errors'),
//   map('message'),
//   join(' | ')
// );

const GetArticlesByCategoryAPI = makeFetchAction(
  GET_ARTICLES_BY_CATEGORY,
  gql`
    query($categoryId: String!) {
      get_articles_by_category(categoryId: $categoryId) {
        category
        title
        description
        imageDescription
        id
      }
    }
  `
);

export const getArticlesByCategory = categoryId => {
  return respondToSuccess(
    GetArticlesByCategoryAPI.actionCreator({ categoryId }),
    resp => {
      if (resp.errors) {
        console.error('Err:', resp.errors);
        return;
      }
      return;
    }
  );
};

export const getArticlesByCategoryDataSelector = flow(
  GetArticlesByCategoryAPI.dataSelector,
  path('data.get_articles_by_category')
);

export const resetDataGetArticlesByCategory = dispatch => {
  dispatch(GetArticlesByCategoryAPI.resetter(['data', 'error']));
};

const GetArticlesByRandomCategoryAPI = makeFetchAction(
  GET_ARTICLES_BY_RANDOM_CATEGORY,
  gql`
    query {
      get_articles_by_random_category {
        category
        title
        description
        imageDescription
        id
      }
    }
  `
);

export const getArticlesByRandomCategory = () => {
  return respondToSuccess(
    GetArticlesByRandomCategoryAPI.actionCreator(),
    resp => {
      if (resp.errors) {
        console.error('Err:', resp.errors);
        return;
      }
      return;
    }
  );
};

export const getArticlesByRandomCategoryDataSelector = flow(
  GetArticlesByRandomCategoryAPI.dataSelector,
  path('data.get_articles_by_random_category')
);
export default {};
