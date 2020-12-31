import {
    LOAD_SEARCH_RESULT,
    START_FETCHING
} from './constant';

const initialState = {
    data: [],
    isLoading: false
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_SEARCH_RESULT:
            return {
                ...state,
                ...action.payload,
                isLoading: false
            }
        case START_FETCHING:
            return {
                ...state,
                isLoading: true
            }
        default:
            return state;
    }
}

export default Reducer;
