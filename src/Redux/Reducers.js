// Packages
import { combineReducers } from 'redux';

// Reducers
import { ThemeReducer } from '../Modules/Theming';
import { LocalizationReducer } from '../Modules/Localization';

export default combineReducers({
  theme: ThemeReducer,
  localization: LocalizationReducer,
});


