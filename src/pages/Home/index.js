import { h } from 'preact';
import Card from '../../components/atoms/Card';
import Spinner from '../../components/atoms/Spinner';
import Modal from '../../components/molecules/Modal';

const Home = (props) => {
    console.log(props);

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

export default Home;
