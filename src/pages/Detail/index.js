import { h } from 'preact';
import React from 'react';
import Card from '../../components/atoms/Card';
import Spinner from '../../components/atoms/Spinner';
import Modal from '../../components/molecules/Modal';

const Detail = (props) => {
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
                        Hello detail
                    </button>
                )}
            >
                <Card header={<h1>Hey</h1>}>
                    This is detail
                </Card>
            </Modal>
        </div>
    );
}

export default Detail;
