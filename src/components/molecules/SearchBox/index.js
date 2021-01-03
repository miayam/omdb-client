import { h } from 'preact';
import {
    useState,
    useRef,
    useEffect
} from 'preact/hooks';
import { loadSearchResult } from 'store/search/actions';
import { connect } from 'react-redux';
import { RELOAD_SEARCH_RESULT } from 'store/search/constant';
import debounce from 'utils/debounce';

import './index.scss';

const SearchBox = (props) => {
    const {
        dispatch,
        params
    } = props;
    const [keyword, setKeyword] = useState(params && params.s ? params.s : 'Batman');
    const ref = useRef(null);

    useEffect(() => {
        if (ref) {
            ref.current.focus();
        }
    }, [])

    const onChange = (event) => {
        setKeyword(event.target.value);
        if (keyword.length > 0) {
            dispatch(
                loadSearchResult({
                    s: keyword,
                    page: params && params.page ? params.page : 1
                },
                RELOAD_SEARCH_RESULT
            ))
        }
    }

    return (
        <form
            class="mSearchBox"
        >
            <input
                class="mSearchBox__input"
                ref={ref}
                onKeyDown={debounce(onChange, 100)}
                onChange={debounce(onChange, 100)}
                placeholder="I am feeling lucky..."
                value={keyword}
            />
        </form>
    );
}

const mapStateToProps = (state) => ({
    params: state.search.params
});

export default connect(
    mapStateToProps
)(SearchBox);
