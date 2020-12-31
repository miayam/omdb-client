import {
    applyMiddleware,
    combineReducers,
    compose
} from "redux";
import thunk from 'redux-thunk';
import searchReducer from './search/reducer';
import { composeWithDevTools } from 'redux-devtools-extension'

export const rootReducer = combineReducers({
    search: searchReducer
})

const middlewareEnhancer = applyMiddleware(thunk)

export const composedEnhancers = composeWithDevTools(
    compose(middlewareEnhancer)
);

export default {
    rootReducer,
    middlewareEnhancer
}

