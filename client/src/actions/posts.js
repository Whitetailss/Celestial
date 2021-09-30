import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/index';

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error.message)
    }
};

export const updatePost = (post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(post);
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error.message)
    }
};

export const getPosts = () => async (dispatch) => {
    try {
        const data = await api.fetchPosts();
        // const {dataInObject} = await api.fetchPosts();
        // console.log('data', data);
        // console.log('dataInObject', dataInObject);

        dispatch({ type: FETCH_ALL, payload: data})
    } catch (error) {
        console.log(error.message)
    }
};




