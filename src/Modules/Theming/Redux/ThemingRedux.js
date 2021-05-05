import { ThemeModes } from "../ThemingConstants";

export const THEMING_NAMESPACE = 'theming';

const INITIAL_STATE = {
    themeMode: ThemeModes.light,
};

const ThemingTypes = {
    CHANGE_THEME: 'theme/change_theme',
}

export const ThemingActionCreators = {
    changeTheme: (themeMode) => ({
        type: ThemingTypes.CHANGE_THEME,
        payload: { themeMode }
    })
}

export const ThemingSelectors = {
    themeMode: globalState => globalState[THEMING_NAMESPACE].themeMode,
}

export const ThemeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ThemingTypes.CHANGE_THEME:
            let { themeMode } = action.payload;
            return {
                themeMode,
            }
        default:
            return state;
    }
}