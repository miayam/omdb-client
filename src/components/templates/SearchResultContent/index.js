import { h } from 'preact';
import {
    useEffect,
    useRef,
    useState
} from 'preact/hooks';
import { connect } from 'react-redux';
import PosterList from 'organisms/PosterList';
import useIntersecting from './hooks/useIntersecting';
import Spinner from 'atoms/Spinner';
import SearchBox from 'molecules/SearchBox';
import {
    loadSearchResult
} from 'store/search/actions';

import './index.scss';

const SearchResultContent = (props) => {
    const {
        searchResult,
        isLoading,
        params,
        totalResults,
        dispatch
    } = props;
    const ref = useRef(null);
    const visible = useIntersecting(ref, {
        threshold: 1,
        rootMargin: '100px'
    });
    const [ nothingToScroll, setNothingToScroll ] = useState(false);

    const page = params && params.page ? params.page + 1 : 1;

    useEffect(() => {
        if (searchResult.length < totalResults) {
            dispatch(
                loadSearchResult({
                    s: params && params.s ? params.s : 'Batman',
                    page
                })
            );
        } 

        if (searchResult.length === totalResults) {
            setNothingToScroll(true);
        }
    }, [visible])

    return (
        <div
            class="tSearchResultContent"
        >
            <SearchBox />
            <PosterList data={searchResult} />
            <div ref={ref} />
            {
                isLoading ? (
                    <div class="tSearchResultContent__loadMore">
                        <Spinner /> Loading...
                    </div>
                ) : null
            }
            {
                nothingToScroll ? (
                    <div class="tSearchResultContent__loadMore">
                        Nothing to scroll...
                    </div>
                ) : null
            }
        </div>
    );
}

const mapStateToProps = (state) => ({
    searchResult: Object.keys(state.search.data).map((key) => (
        state.search.data[key]
    )),
    isLoading: state.search.isLoading,
    params: state.search.params,
    totalResults: state.search.totalResults
});

export default connect(
    mapStateToProps
)(SearchResultContent);