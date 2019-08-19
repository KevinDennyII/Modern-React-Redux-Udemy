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

// you will very frequently see in a lot of redux projects
export const fetchPosts = async () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response})
};

