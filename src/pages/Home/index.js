import { h } from 'preact';
import Card from 'atoms/Card';
import Spinner from 'atoms/Spinner';
import Modal from 'molecules/Modal';
import { connect } from 'react-redux';
import { useEffect } from 'preact/hooks';
import { loadSearchResult } from 'store/search/actions';

const Home = (props) => {
    const { dispatch } = props;

    console.log(props);

    useEffect(() => {
        dispatch(loadSearchResult({
            s: 'Batman',
            page: 1
        }));
    }, [])

    return (
        <div>
            <Card/>
            <Spinner/>
            <Modal
                trigger={({onClick, onKeyDown}) => (
                    <button
                        onClick={onClick}
                        onKeyDown={onKeyDown}
                    >
                        Hello
                    </button>
                )}
            >
                <Card header={<h1>Hey</h1>}>
                    This is our home
                </Card>
            </Modal>
        </div>
    );
}

const mapStateToProps = (state) => ({
    search: state.search
});

export default connect(
    mapStateToProps
)(Home);
