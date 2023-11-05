/* Package imports */
import {
    createStore, combineReducers,
    compose
} from 'redux';

/* Reducer imports */
import typeReducer from '@/store/reducers/typeReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        loaderTypes: typeReducer
    }),
    {},
    composeEnhancers()
);

export default store;

