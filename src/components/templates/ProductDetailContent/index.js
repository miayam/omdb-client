import { h } from 'preact';
import { connect } from 'react-redux';
import { Fragment } from 'react';
import Modal from 'molecules/Modal';
import Spinner from 'atoms/Spinner';
import { useEffect } from 'preact/hooks';
import { loadProductDetail } from 'store/detail/actions';

import './index.scss';

const ProductDetailContent = (props) => {
    const {
        detail,
        isLoading,
        dispatch,
        id
    } = props;

    const keysSize = Object.keys(detail).length;
    const { Poster, ...rest } = detail;
    const keys = Object.keys(rest);

    useEffect(() => {
        dispatch(loadProductDetail(id));
    }, []);

    return (
        <div
            class="tProductDetailContent"
        >
            <aside class="tProductDetailContent__back">
                <a href='/'>Back</a>
            </aside>
            {
                keysSize > 0 && (
                <Modal
                trigger={({
                    onClick,
                    onKeyDown
                }) => (
                    <img
                        alt={detail.Title}
                        onClick={onClick}
                        onKeyDown={onKeyDown}
                        src={Poster}
                        loading="lazy"
                        class="tProductDetailContent__trigger"
                    />
                )}
                >
                    <img
                        alt={detail.Title}
                        src={Poster}
                        loading="lazy"
                        class="tProductDetailContent__poster"
                    />
                </Modal>
            )}
            {
                isLoading ? (
                    <div class="tProductDetailContent__loading">
                        <Spinner /> Loading...
                    </div>
                ) : null
            }
            {
                keysSize > 0 && (
                    <aside class="tProductDetailContent__main">
                        {
                            keys.map((key) => {
                                return (
                                    <Fragment>
                                        <h1>{key}</h1>
                                        <p>{detail[key]}</p>
                                        <hr />
                                    </Fragment>
                                )
                            })
                        }
                    </aside>
                )
            }
       </div>
    );
}

const mapStateToProps = (state) => ({
    detail: state.detail.data,
    isLoading: state.detail.isLoading
})

export default connect(
    mapStateToProps
)(ProductDetailContent);
