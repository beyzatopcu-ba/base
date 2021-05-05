import { all } from 'redux-saga/effects';
import { userSagas } from '../Modules/Auth';

export default function* rootSaga() {
  yield all([
    ...userSagas,
  ]);
}
