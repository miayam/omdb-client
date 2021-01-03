import {
    applyMiddleware,
    combineReducers,
    compose
} from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import searchReducer from './search/reducer';
import detailReducer from './detail/reducer';

export const rootReducer = combineReducers({
    search: searchReducer,
    detail: detailReducer
})

const middlewareEnhancer = applyMiddleware(thunk)

export const composedEnhancers = composeWithDevTools(
    compose(middlewareEnhancer)
);

export default {
    rootReducer,
    composedEnhancers
}

