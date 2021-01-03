import { OMDB_API, OMDB_KEY } from "utils/constant";
import {
    LOAD_PRODUCT_DETAIL,
    START_FETCHING
} from './constant';

// A work-around to provide async await syntax when SSR-ed.
import "regenerator-runtime/runtime.js";

export const loadProductDetail = (id) => async (dispatch) => {
    dispatch({type: START_FETCHING});
    const response = await fetch(`${OMDB_API}/?apikey=${OMDB_KEY}&i=${id}`);
    const data = await response.json();

    dispatch({
        type: LOAD_PRODUCT_DETAIL,
        payload: {
            data
        }
    })
}