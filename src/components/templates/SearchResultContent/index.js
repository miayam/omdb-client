import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import { connect } from 'react-redux';
import PosterList from 'organisms/PosterList';
import useIntersecting from './hooks/useIntersecting';
import Spinner from 'atoms/Spinner';
import {
    loadSearchResult
} from 'store/search/actions';

import './index.scss';

const SearchResultContent = (props) => {
    const {
        searchResult,
        isLoading,
        params,
        dispatch
    } = props;
    const ref = useRef(null);
    const visible = useIntersecting(ref, {
        threshold: 1,
        rootMargin: '100px'
    });

    useEffect(() => {
        dispatch(
            loadSearchResult({
                s: params && params.s ? params.s : 'Batman',
                page: params && params.page ? params.page + 1 : 1
            })
        );
    }, [visible])

    return (
        <div
            class="tSearchResultContent"
        >
            <PosterList data={searchResult} />
            <div ref={ref} />
            {
                true ? (
                    <div class="tSearchResultContent__loadMore">
                        <Spinner /> Loading...
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
    params: state.search.params
});

export default connect(
    mapStateToProps
)(SearchResultContent);