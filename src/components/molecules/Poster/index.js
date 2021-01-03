import { h } from 'preact';
import { Link } from 'preact-router';
import Card from 'atoms/Card';
import Modal from 'molecules/Modal';
import './index.scss';

const Poster = (props) => {
    const {
        item
    } = props;

    return (
        <div
            class="mPoster"
        >
            <Card
                header={
                    <Modal
                        trigger={({
                            onClick,
                            onKeyDown
                        }) => (
                            <img
                                alt={item.Title}
                                onClick={onClick}
                                onKeyDown={onKeyDown}
                                src={item.Poster}
                                class="mPoster__trigger"
                            />
                        )}
                    >
                        <img
                            alt={item.Title}
                            src={item.Poster}
                            class="mPoster__content"
                        />
                </Modal>
                }
            >
                <Link href={`/movies/${item.imdbID}`}>
                    <p>{item.Title}</p>
                </Link>
            </Card>
        </div>
    );
}

export default Poster;
