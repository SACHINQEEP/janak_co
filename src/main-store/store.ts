import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';

import { Env } from '../config/env';
// import authenticationRedux from 'features/authentication/store/authentication.redux';
// import recommendationRedux from 'features/recommendations/store/recommendation.redux';
// import sharedRedux from 'features/shared/store/shared.redux';
// import stockRedux from 'features/stocks/store/stock.redux';
// import usersRedux from 'features/users/store/users.redux';

import { rootSaga } from './rootSaga';



const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory(),
  reduxTravelling: Env.isDev(),
  savePreviousLocations: 1,
})

const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware()

  const store = configureStore({
    reducer: {
      router: routerReducer,
    },
    devTools: Env.isDev(),
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware).concat(routerMiddleware),
  })

  sagaMiddleware.run(rootSaga)

  return store
}

export const store = makeStore()
export type RootStore = ReturnType<typeof makeStore>

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const history = createReduxHistory(store)
