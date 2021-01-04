import { h } from 'preact';
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
                                loading="lazy"
                                class="mPoster__trigger"
                            />
                        )}
                    >
                        <img
                            alt={item.Title}
                            src={item.Poster}
                            loading="lazy"
                            class="mPoster__content"
                        />
                    </Modal>
                }
            >
                <a alt={item.Title} href={`/movies/${item.imdbID}`}>
                    <p>{item.Title}</p>
                </a>
            </Card>
        </div>
    );
}

export default Poster;
