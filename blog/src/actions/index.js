import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// BAD APPROACH!!! (because we are breaking the rules of redux
// you may see this error in your console "error: actions must be plain objects use
// custom middleware for async actions"....its not returning a plain jS Object because we using
// async and await but it is return a request object
// Also replacing async and await with a Promise object will not work either!!! The reducers have already ran but
// the Promise has not gotten any data yet.
/*export const fetchPosts = async () => {

    const response = await jsonPlaceholder.get('/posts');

    return {
        type: 'FETCH_POSTS',
        payload: response
    };
};*/

//
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts()); // calling action creator

  // array of all the UNIQUE users ids
  /*const userIds =  _.uniq(_.map(getState().posts, 'userId'));
  userIds.forEach(id => dispatch(fetchUser(id)));*/

  // making use of lodash chain
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value()
};

// you will very frequently see in a lot of redux projects
export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data})
};


export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};

// using lodash and memoizing allowing us to only fetch a user ONE time,
// you can call this only one time with each unique user ID
/*export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
});*/
