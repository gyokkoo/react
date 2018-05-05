import { FETCH_POSTS, NEW_POST } from './types';

// ES6 syntax
export const fetchPosts = () => dispatch => {
  console.log('posts fetching');
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(result => result.json())
  .then(postsData => dispatch({
    type: FETCH_POSTS,
    payload: postsData
  }));
}

export const createPost = (postData) => dispatch => {
  console.log('create post action called');
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post => dispatch({
        type: NEW_POST,
        payload: post
      }))
}

/*
export function fetchPosts () {
  return function(dispatch) {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(result => result.json())
      .then(postsData => dispatch({
        type: FETCH_POSTS,
        payload: postsData
      }));
  }
}
*/ 
