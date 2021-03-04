export const DISPLAY_LIST = "DISPLAY_LIST";
export const DISPLAY_SINGLE_POST = "DISPLAY_SINGLE_POST"
export const CREATE_POST = "CREATE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";

export const displayList = payload => {

    return{
        type: DISPLAY_LIST,
        payload
    }

}

export const displaySinglePost = payload => {

    return{
        type: DISPLAY_SINGLE_POST,
        payload
    }

}
export const createPost = payload => {

    return{
        type: CREATE_POST,
        payload
    }

}
export const updatePost = payload => {

    return{
        type: UPDATE_POST,
        payload
    }

}
export const deletePost = payload => {

    return{
        type: DELETE_POST,
        payload
    }

}