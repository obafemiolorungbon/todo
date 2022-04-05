import { createStore } from "@reduxjs/toolkit";
import sagas from "./saga";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware } from "redux";
import rootReducer from "./rootReducer";

const sagaMiddleware = createSagaMiddleware();

function configureAppStore(preloadedState) {
  const middlewares = [sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./rootReducer", () => store.replaceReducer(rootReducer));
  }

  return store;
}

const store = configureAppStore({});

export default store;

sagaMiddleware.run(sagas);
