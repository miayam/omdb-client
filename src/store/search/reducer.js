import {
    LOAD_SEARCH_RESULT,
    START_FETCHING,
    RELOAD_SEARCH_RESULT
} from './constant';

const initialState = {
    data: {},
    isLoading: false
}

export const normalizeData = (data) => {
    return data.reduce((prev, curr) => {
        return {
            ...prev,
            [curr.imdbID]: {
                ...curr
            }
        }
    }, {});
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_SEARCH_RESULT: {
            const { data, ...rest} = action.payload;
            return {
                ...state,
                data: {
                    ...state.data,
                    ...normalizeData(data)
                },
                ...rest,
                isLoading: false
            }
        }
        case RELOAD_SEARCH_RESULT: {
            const { data, ...rest} = action.payload;
            return {
                ...state,
                data: {
                    ...normalizeData(data)
                },
                ...rest,
                isLoading: false
            }
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
