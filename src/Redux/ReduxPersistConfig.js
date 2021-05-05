import AsyncStorage from '@react-native-community/async-storage';
import { LOCALIZATION_NAMESPACE } from '../Modules/Localization';
import { THEMING_NAMESPACE } from '../Modules/Theming';
import { USER_NAMESPACE } from '../Modules/Auth';

// More info here:  https://shift.infinite.red/shipping-persistant-reducers-7341691232b1
const REDUX_PERSIST = {
  active: true,
  storeConfig: {
    key: 'primary',
    storage: AsyncStorage,
    whitelist: [
      THEMING_NAMESPACE,
      LOCALIZATION_NAMESPACE,
      USER_NAMESPACE
    ],
  },
};

export default REDUX_PERSIST;
