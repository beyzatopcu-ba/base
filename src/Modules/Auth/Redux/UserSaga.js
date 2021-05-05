import { fork, takeEvery, call, put, all } from "@redux-saga/core/effects";
import { setUserAC, SIGN_IN_REQUEST, SIGN_OUT_REQUEST, SIGN_UP_REQUEST } from './UserRedux';
import { getCurrentUser, signIn, signOut, signUp, updateUser } from '../API/Firebase';
import { setIsLoadingAC } from "../../Loading/LoadingRedux";

function* workerSignIn(action) {
    const {email, password} = action.payload;

    try {

        yield put(setIsLoadingAC(true)); 
        
        yield call(signIn, email, password);

        const currentUser = getCurrentUser();
        yield put(setUserAC(currentUser));
        // yield spawn(call(sendReport));

    } catch (error) {
        console.log(error);
    } finally {
        yield put(setIsLoadingAC(false));
    }
}

function* watchSignInRequest() {
    yield takeEvery(SIGN_IN_REQUEST, workerSignIn);
}

function* signUpAndUpdateUser(email, password, displayName) {
    try {
        // Önce signUp yaptırdık
        yield call(signUp, email, password);
        // Sonra kullanıcı adını Firebase'de güncelledik
        yield call(updateUser, displayName);

        // Şu anki kullanıcı bilgisini Firebase'den aldık
        const currentUser = getCurrentUser();
        // Şu anki kullanıcıyı redux'a verdik
        yield put(setUserAC(currentUser));
    } catch(error) {
        
    }
}

function* workerSignUp(action) {

    const { email, password, displayName } = action.payload;

    try {

        yield put(setIsLoadingAC(true));

        yield call(signUpAndUpdateUser, email, password, displayName);

    } catch (error) {
        console.log(error);
    } finally {
        yield put(setIsLoadingAC(false));
    }

}

function* watchSignUpRequest() {
    yield takeEvery(SIGN_UP_REQUEST, workerSignUp);
}


function* workerSignOut() {
    try {

        yield put(setIsLoadingAC(true));

        yield call(signOut);
        yield put(setUserAC(null));

        yield put(setIsLoadingAC(false));

    } catch (error) {
        console.log('ERROR', error);
    }
}


function* watchSignOutRequest() {
    yield takeEvery(SIGN_OUT_REQUEST, workerSignOut)
}

export const userSagas = [
    fork(watchSignUpRequest),
    fork(watchSignOutRequest),
    fork(watchSignInRequest),
];


