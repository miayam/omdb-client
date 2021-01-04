import { h } from 'preact';
import ProductDetailContent from 'templates/ProductDetailContent';

const Detail = (props) => {
    const { id } = props;

    return (
        <div class="pDetail">
            <ProductDetailContent id={id} />
        </div>
    );
}

export default Detail;
