/* eslint-disable react-hooks/exhaustive-deps */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import * as Sentry from '@sentry/react';
import reducers from './reducerCombiner';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage
};
const persistedReducer = persistReducer(persistConfig, reducers);
const sentryReduxEnhancer = Sentry.createReduxEnhancer({
  // Optionally pass options listed below
});

let store;
if (process.env.NODE_ENV !== 'production') {
  store = createStore(
    persistedReducer,
    compose(applyMiddleware(logger, sagaMiddleware), sentryReduxEnhancer)
  );
}
else {
  store = createStore(
    persistedReducer,
    compose(applyMiddleware(sagaMiddleware), sentryReduxEnhancer)
  );
}

const persistor = persistStore(store);

store.subscribe(() => {});

sagaMiddleware.run(sagas);

if ((module as any).hot) {
  (module as any).hot.accept(() => {
    store.replaceReducer(reducers as any);
  });
}

export { store, persistor };
