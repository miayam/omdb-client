import {
    createStore,
    applyMiddleware,
    combineReducers,
    compose
} from "redux";
import thunk from 'redux-thunk';
import searchReducer from './search/reducer';

export const rootReducer = combineReducers({
    search: searchReducer
})

const middlewareEnhancer = applyMiddleware(thunk)

export const composedEnhancers = compose(middlewareEnhancer)

export default {
    rootReducer,
    middlewareEnhancer
}

