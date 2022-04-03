import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from 'redux-persist';

import rootReducer from "./root-reducer";

const middlewears = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewears));

export const persistor = persistStore(store);

// eslint-disable-next-line
export default { store , persistor };


