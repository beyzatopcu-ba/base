// Packages
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import ReduxPersist from './ReduxPersistConfig';
import Reducers from './Reducers';
import rootSaga from './Sagas';


const configureStore = (rootReducer) => {

    // Saga
    const sagaMiddleware = createSagaMiddleware();

    // Creating store
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

    // Running sagas
    let sagasManager = sagaMiddleware.run(rootSaga);

    // Creating Redux-Persist persistor
    const persistor = persistStore(store);

    return {
        store,
        persistor,
        sagasManager,
        sagaMiddleware,
    };

};

export default () => {

    let finalReducers = Reducers;
    if (ReduxPersist.active) {
        const persistConfig = ReduxPersist.storeConfig;
        finalReducers = persistReducer(persistConfig, Reducers);
    }

    let { store, persistor, sagasManager, sagaMiddleware } = configureStore(finalReducers);

    if (module.hot) {
        module.hot.accept(() => {
            const nextRootReducer = require('./Reducers').reducers;
            store.replaceReducer(nextRootReducer);

            const newYieldedSagas = require('./Sagas').default;
            sagasManager.cancel();
            sagasManager.done.then(() => {
                sagasManager = sagaMiddleware(newYieldedSagas);
            });
        });
    }

    return { store, persistor };
};
