import { h } from 'preact';
import './index.scss';

const Card = (props) => {
    const {
        header,
        children,
        ...rest
    } = props;

    return (
        <div
            class={'aCard'}
            data-testid={'aCard-test'}
            role="presentation"
            {...rest}
        >
            {header}
            <div class="aCard__content">
                {children}
            </div>
        </div>
    );
};

export default Card;