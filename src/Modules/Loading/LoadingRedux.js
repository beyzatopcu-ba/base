export const LOADING_NAMESPACE = 'loading';

// Initial State
const INITIAL_STATE = {
    isLoading: false,
};

// Selectors
export const isLoadingSelector = state => state[LOADING_NAMESPACE].isLoading;

// Action Types
const SET_IS_LOADING = "loading/set_is_loading";

// Action Creators
export const setIsLoadingAC = (isLoading) => {
    return {
        type: SET_IS_LOADING,
        payload: { isLoading },
    };
}

// Reducer
export const loadingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_IS_LOADING:
            return {
                isLoading: action.payload.isLoading,
            }
        default:
            return state;
    }
};