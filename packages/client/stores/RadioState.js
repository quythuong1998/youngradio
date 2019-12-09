import { makeFetchAction } from 'redux-api-call';
import { respondToSuccess } from '../middlewares/api-reaction';
import { flow, path, map, join } from 'lodash/fp';
import { gql } from '../libs/graphql';
import Router from 'next/router';
import { getAuthorById } from './UserState';
export const CREATE_BLOG_RADIO_API = 'CreateBlogRadioAPI';
export const CREATE_BLOG_RADIO_TEMP_API = 'CreateBlogRadioTempAPI';
export const DELETE_BLOG_RADIO_TEMP_API = 'DeleteBlogRadioTempAPI';
export const GET_LASTED_BLOG_RADIO_API = 'GetLastedBlogRadioAPI';
export const GET_BLOG_RADIO_API = 'GetBlogRadioAPI';
export const GET_ALL_BLOG_RADIO_API = 'GetAllBlogRadioAPI';

export const GetAllBlogRadioAPI = makeFetchAction(
  GET_ALL_BLOG_RADIO_API,
  gql`
    query {
      get_all_blog_radio {
        title
        description
        length
        smallThumbnail
        largeThumbnail
        id
        authorName
      }
    }
  `
);

export const getAllBlogRadio = () => {
  return respondToSuccess(GetAllBlogRadioAPI.actionCreator({}), resp => {
    if (resp.errors) {
      console.error('Err:', resp.errors);
      return;
    }
    return;
  });
};

export const getAllBlogRadioDataSelector = flow(
  GetAllBlogRadioAPI.dataSelector,
  path('data.get_all_blog_radio')
);

export const resetDataGetAllBlogRadio = dispatch => {
  dispatch(GetAllBlogRadioAPI.resetter(['data', 'error']));
};

export const GetBlogRadioAPI = makeFetchAction(
  GET_BLOG_RADIO_API,
  gql`
    query($id: String!) {
      get_blog_radio(id: $id) {
        title
        description
        length
        smallThumbnail
        largeThumbnail
        id
        content
        authorName
        videoURL
        hastags
        authorId
      }
    }
  `
);

export const getBlogRadio = id => {
  return respondToSuccess(
    GetBlogRadioAPI.actionCreator({
      id
    }),

    (resp, headers, store) => {
      if (resp.errors) {
        console.error('Err:', resp.errors);
        return;
      }

      const authorId = resp.data.get_blog_radio.authorId;
      store.dispatch(getAuthorById(authorId));
      return;
    }
  );
};

export const getBlogRadioDataSelector = flow(
  GetBlogRadioAPI.dataSelector,
  path('data.get_blog_radio')
);

export const resetDataGetBlogRadio = dispatch => {
  dispatch(GetBlogRadioAPI.resetter(['data', 'error']));
};

export const GetLastedBlogRadioAPI = makeFetchAction(
  GET_LASTED_BLOG_RADIO_API,
  gql`
    query {
      get_lasted_blog_radio {
        title
        description
        length
        smallThumbnail
        largeThumbnail
        id
        authorName
      }
    }
  `
);

export const getLastedBlogRadio = id => {
  return respondToSuccess(
    GetLastedBlogRadioAPI.actionCreator({
      id
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

export const getLastedBlogRadioDataSelector = flow(
  GetLastedBlogRadioAPI.dataSelector,
  path('data.get_lasted_blog_radio')
);

export const DeleteBlogRadioTempAPI = makeFetchAction(
  DELETE_BLOG_RADIO_TEMP_API,
  gql`
    mutation($id: String!) {
      delete_blog_radio_temp(id: $id) {
        id
      }
    }
  `
);

export const deleteBlogRadioTemp = id => {
  return respondToSuccess(
    DeleteBlogRadioTempAPI.actionCreator({
      id
    }),
    resp => {
      if (resp.errors) {
        console.error('Err:', resp.errors);
        return;
      }
      // Router.push('/create-blog-radio');
      return;
    }
  );
};

export const resetDataDeleteBlogRadioTemp = dispatch => {
  dispatch(DeleteBlogRadioTempAPI.resetter(['data', 'error']));
};

// export const deleteBlogRadioTempDataSelector = flow(
//   DeleteBlogRadioTempAPI.dataSelector,
//   path('data.delete_blog_radio_temp')
// );

const CreateBlogRadioTempAPI = makeFetchAction(
  CREATE_BLOG_RADIO_TEMP_API,
  gql`
    mutation($videoURL: String!) {
      create_blog_radio_temp(videoURL: $videoURL) {
        title
        description
        length
        smallThumbnail
        largeThumbnail
        id
      }
    }
  `
);

export const createBlogRadioTemp = videoURL => {
  return respondToSuccess(
    CreateBlogRadioTempAPI.actionCreator({
      videoURL
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

export const resetDataCreateBlogRadioTemp = dispatch => {
  dispatch(CreateBlogRadioTempAPI.resetter(['data', 'error']));
};

export const createBlogRadioTempDataSelector = flow(
  CreateBlogRadioTempAPI.dataSelector,
  path('data.create_blog_radio_temp')
);

export const createBlogRadioTempErrorMessageSelector = flow(
  CreateBlogRadioTempAPI.dataSelector,
  path('errors'),
  map('message'),
  join(' | ')
);

const CreateBlogRadioAPI = makeFetchAction(
  CREATE_BLOG_RADIO_API,
  gql`
    mutation(
      $id: String!
      $title: String!
      $content: String
      $hastags: [String]
      $description: String
      $smallThumbnail: String!
      $largeThumbnail: String!
      $length: String!
    ) {
      create_blog_radio(
        id: $id
        title: $title
        content: $content
        hastags: $hastags
        description: $description
        smallThumbnail: $smallThumbnail
        largeThumbnail: $largeThumbnail
        length: $length
      ) {
        id
      }
    }
  `
);

export const createBlogRadio = ({
  id,
  title,
  content,
  hastags,
  description,
  smallThumbnail,
  largeThumbnail,
  length
}) => {
  return respondToSuccess(
    CreateBlogRadioAPI.actionCreator({
      id,
      title,
      content,
      hastags,
      description,
      smallThumbnail,
      largeThumbnail,
      length
    }),
    resp => {
      if (resp.errors) {
        console.error('Err:', resp.errors);
        return;
      }

      Router.push({
        pathname: '/shared',
        query: { id: resp.data.create_blog_radio.id }
      });

      return;
    }
  );
};

export const resetDataCreateBlogRadio = dispatch => {
  dispatch(CreateBlogRadioAPI.resetter(['data', 'error']));
};

export const createBlogRadioDataSelector = flow(
  CreateBlogRadioAPI.dataSelector,
  path('data.create_blog_radio')
);

export const createBlogRadioErrorMessageSelector = flow(
  CreateBlogRadioAPI.dataSelector,
  path('errors'),
  map('message'),
  join(' | ')
);

export default {};
