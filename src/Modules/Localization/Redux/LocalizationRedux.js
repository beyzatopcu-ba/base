
/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
    locale: 'tr',
};

/* ------------- Types and Action Creators ------------- */

const Types = {
    CHANGE_LOCALE: 'locale/change_locale',
};

const Actions = {
    changeLocale: ({ locale }) => ({
        type: Types.CHANGE_LOCALE,
        payload: { locale },
    }),
};

export const LocalizationTypes = Types;
export const LocalizationActions = Actions;

/* ------------- Selectors ------------- */

export const LocalizationSelectors = {
    locale: state => state.localization.locale,
  };

/* ------------- Reducers ------------- */

export const changeLocale = (state, action) => {
    let { locale } = action.payload;
    return {
        ...state,
        locale,
    };
};

/* ------------- Hookup Reducers To Types ------------- */

export const LocalizationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.CHANGE_LOCALE:
            return changeLocale(state, action);
        default:
            return state;
    }
};
