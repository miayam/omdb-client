import { h } from 'preact';
import Spinner from 'atoms/Spinner';
import Poster from 'molecules/Poster';
import './index.scss';

const PosterList = (props) => {
    const {
        data
    } = props;

    return (
        <div
            class="oPosterList"
            data-testid="oPosterList-test"
        >
            {
                data.length > 0 ?
                data.map((item) => (
                    <Poster item={item} />
                )) : (
                    <div class="oPosterList__empty">
                        <Spinner /> Loading...
                    </div>
                )
            }
        </div>
    );
}

export default PosterList;
