import { h } from 'preact';
import { connect } from 'react-redux';
import { useEffect } from 'preact/hooks';
import { loadSearchResult } from 'store/search/actions';
import SearchResultContent from 'templates/SearchResultContent';

const Home = (props) => {
    const { dispatch, s, page } = props;

    useEffect(() => {
        dispatch(loadSearchResult({
            s: s ? s : 'Batman',
            page: page ? page : 1
        }));
    }, [])

    return (
        <div class="pHome">
            <SearchResultContent />
        </div>
    );
}

export default connect()(Home);
