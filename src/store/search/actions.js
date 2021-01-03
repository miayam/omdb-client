import { OMDB_API, OMDB_KEY } from "utils/constant";
import {
    LOAD_SEARCH_RESULT,
    START_FETCHING
} from './constant';

// A work-around to provide async await syntax when SSR-ed.
import "regenerator-runtime/runtime.js";

export const loadSearchResult =  (params) => async (dispatch) => {
    dispatch({type: START_FETCHING});
    const response = await fetch(`${OMDB_API}/?apikey=${OMDB_KEY}&s=${params.s}&page=${params.page}`);
    const data = await response.json();
    const { Search: search } = data;
    dispatch({
        type: LOAD_SEARCH_RESULT,
        payload: {
            data: [
                ...search
            ]
        }
    });
};
