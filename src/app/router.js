import { h } from 'preact';
import Card from '../components/atoms/Card';
import Spinner from '../components/atoms/Spinner';
import Modal from '../components/molecules/Modal';

const Router = () => (
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
                Coba coba coba coba coba coba
            </Card>
        </Modal>
    </div>
);

export default Router;