import { ThemeModes } from '../ThemingConstants';

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
    themeMode: ThemeModes.light,
};

/* ------------- Types and Action Creators ------------- */

const Types = {
    CHANGE_THEME: 'theme/change_theme',
};

const Actions = {
    changeTheme: ({ themeMode }) => ({
        type: Types.CHANGE_THEME,
        payload: { themeMode },
    }),
};

export const ThemeTypes = Types;
export const ThemeActions = Actions;

/* ------------- Selectors ------------- */

export const ThemeSelectors = {
    themeMode: state => state.theme.themeMode,
  };

/* ------------- Reducers ------------- */

export const changeTheme = (state, action) => {
    let { themeMode } = action.payload;
    return {
        ...state,
        themeMode,
    };
};

/* ------------- Hookup Reducers To Types ------------- */

export const ThemeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.CHANGE_THEME:
            return changeTheme(state, action);
        default:
            return state;
    }
};
