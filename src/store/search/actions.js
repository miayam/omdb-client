import { OMDB_API, OMDB_KEY } from "utils/constant";
import {
    LOAD_SEARCH_RESULT,
    START_FETCHING
} from './constant';

// A work-around to provide async await syntax when SSR-ed.
import "regenerator-runtime/runtime.js";

export const loadSearchResult =  (params, type = LOAD_SEARCH_RESULT) => async (dispatch) => {
    dispatch({type: START_FETCHING});

    const queryParams= Object.entries(params).map(([key, val]) => `${key}=${val}`).join('&');
    const response = await fetch(`${OMDB_API}/?apikey=${OMDB_KEY}&${queryParams}`);
    const data = await response.json();
    const { Search: search, ...rest } = data;

    dispatch({
        type,
        payload: {
            data: [
                ...search
            ],
            params: {
                ...params
            },
            ...rest
        }
    });
};

