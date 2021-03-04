import * as authActions from "../actions/authActions";

const INITIAL_STATE = {

    authenticated : false,

};

const authReducer = (state = INITIAL_STATE, action) => {

    switch(action.type){

        case authActions.LOGIN:
            return{
                ...state,
                authenticated:true
            }

        case authActions.REGISTER:
            return{
                ...state,
                authenticated:false
            }

        case authActions.LOGOUT:
            return{
                ...state,
                authenticated:false
            }
    }

}

export default authReducer;