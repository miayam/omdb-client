import { h } from 'preact';
import { useState } from 'preact/hooks'

const Card = () => {
    // how many clicks have we counted? Default to 0
    const [count, setCount] = useState(0)

    // shared event handler
    const handleClick = () => {
        console.log('tahu');
        setCount(count + 1)
    }

    return (
        <button onClick={handleClick}>
            This is a card bro!
            <span>{count}</span>
        </button>
    );
};

export default Card;