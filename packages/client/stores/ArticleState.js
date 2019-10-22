import { makeFetchAction } from 'redux-api-call';
import { respondToSuccess } from '../middlewares/api-reaction';
import { flow, path, map, join } from 'lodash/fp';
import { gql } from '../libs/graphql';

export const CREATE_ARTICLE_API = 'CreateArticleAPI';
export const GET_USER_ARTICLES_API = 'GetUserArticlesAPI';
export const GET_MOST_VIEW_ARTICLES_API = 'GetMostViewArticlesAPI';
export const GET_LASTED_ARTICLES_API = 'GetLastedArticlesAPI';
export const DELETE_ARTICLE_API = 'DeleteArticleAPI';
export const GET_ARTICLE = 'GetArticle';
export const EDIT_ARTICLE = 'EditArticle';

export const resetDataEditArticle = dispatch => {
  dispatch(EditArticleAPI.resetter(['data', 'error']));
};

export const EditArticleAPI = makeFetchAction(
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
        title
        description
        content
        categoryId
        hastags
        imageDescription
      }
    }
  `
);

export const getArticle = id =>
  respondToSuccess(GetArticleAPI.actionCreator({ id }), resp => {
    if (resp.errors) {
      console.error('Err:', resp.errors);
      return;
    }
    return;
  });

export const getArticleDataSelector = flow(
  GetArticleAPI.dataSelector,
  path('data.get_article')
);

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
    query {
      get_user_articles {
        description
        imageDescription
        title
        category
        id
      }
    }
  `
);

export const getUserArticles = () => {
  return respondToSuccess(GetUserArticlesAPI.actionCreator({}), resp => {
    if (resp.errors) {
      console.error('Err:', resp.errors);
      return;
    }
    return;
  });
};

export const getUserArticlesDataSelector = flow(
  GetUserArticlesAPI.dataSelector,
  path('data.get_user_articles')
);

const GetLastedArticlesAPI = makeFetchAction(
  GET_MOST_VIEW_ARTICLES_API,
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

export default {};
