export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";
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

export const login = () => {
    return {
        type: LOGOUT
    }
};