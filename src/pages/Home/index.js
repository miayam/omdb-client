import { h } from 'preact';
import { connect } from 'react-redux';
import { useEffect } from 'preact/hooks';
import { loadSearchResult } from 'store/search/actions';
import PosterList from 'organisms/PosterList';

const Home = (props) => {
    const { dispatch, searchResult } = props;

    useEffect(() => {
        dispatch(loadSearchResult({
            s: 'Batman',
            page: 1
        }));
    }, [])

    return (
        <div>
            <PosterList data={searchResult} />
        </div>
    );
}

const mapStateToProps = (state) => ({
    searchResult: Object.keys(state.search.data).map((key) => (
        state.search.data[key]
    ))
});

export default connect(
    mapStateToProps
)(Home);
