import { OMDB_API, OMDB_KEY } from "../../utils/sharedConstant";
import {
    LOAD_SEARCH_RESULT,
    START_FETCHING
} from './constant';

export const loadSearchResult =  (params) => async (dispatch) => {
    dispatch({type: START_FETCHING});
    const response = await axios.get(`${OMDB_API}/?apikey=${OMDB_KEY}&s=${params.s}&page=${params.page}`);
    const data = await response.json();
    dispatch({type: LOAD_SEARCH_RESULT, payload: data})
};
