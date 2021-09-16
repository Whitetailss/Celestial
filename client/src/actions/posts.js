import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';

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
