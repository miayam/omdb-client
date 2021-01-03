import { h } from 'preact';
import Card from 'atoms/Card';
import Spinner from 'atoms/Spinner';
import React from 'react';
import Modal from 'molecules/Modal';
import { connect } from 'react-redux';
import { useEffect } from 'preact/hooks';
import { loadProductDetail } from 'store/detail/actions';

const Detail = (props) => {
    const { dispatch, id } = props;

    useEffect(() => {
        dispatch(loadProductDetail(id));
    }, []);

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

const mapStateToProps = (state) => ({
    detail: state.detail
});

export default connect(
    mapStateToProps
)(Detail);
