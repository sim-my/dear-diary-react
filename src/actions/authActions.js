export const LOGIN = "LOGIN_SUCCESS";
export const REGISTER = "REGISTER_SUCCESS";
export const LOGOUT = "LOGOUT";

export const login = payload => {
    return {
        type: LOGIN,
        payload
    }
};

export const register = payload => {
    return {
        type: REGISTER,
        payload
    }
};


export const logout = payload => {
    return {
        type: LOGOUT,
        payload
    }
};