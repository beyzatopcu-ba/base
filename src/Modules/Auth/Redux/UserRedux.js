export const USER_NAMESPACE = 'auth';

// Initial State
const INITIAL_STATE = {
    user: null,
};

// Selectors
export const userSelector = state => state[USER_NAMESPACE].user;

// Action Types
export const SIGN_UP_REQUEST = "user/sign_up_request";
export const SIGN_OUT_REQUEST = "user/sign_out_request";
export const SIGN_IN_REQUEST = "user/sign_in_request";
export const SET_USER = "user/set_user";

// Action Creators
export const signUpRequest = (email, password, displayName) => {
    return {
        type: SIGN_UP_REQUEST,
        payload: {
            email,
            password,
            displayName,
        },
    };
}

export const signOutRequest = () => {
    return {
        type: SIGN_OUT_REQUEST,
    };
}

export const signInRequest = (email, password) => {
    return {
        type: SIGN_IN_REQUEST,
        payload: {
            email,
            password,
        },
    };
}

export const setUserAC = (user) => {
    return {
        type: SET_USER,
        payload: { user },
    };
}

// Reducer
export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USER:
            const newUser = action.payload.user;
            const lastUserEmail = newUser ? newUser.email : state.lastUserEmail;
            return {
                user: newUser,
                lastUserEmail,
            }
        default:
            return state;
    }
};