import {
    LOAD_PRODUCT_DETAIL,
    START_FETCHING
} from './constant';

const initialState = {
    data: {},
    isLoading: false
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PRODUCT_DETAIL:
            return {
                ...state,
                data: { ...action.payload.data },
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