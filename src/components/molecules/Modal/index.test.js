import { h } from 'preact';
import {
    render,
    fireEvent,
    screen
} from '@testing-library/preact';
import Modal from '.';

let trigger;
let mockClick;
let content;

beforeEach(() => {
    mockClick = jest.fn();
    trigger = ({onClick, onKeyDown}) => (
        <button
            onClick={() => {
                mockClick();
                onClick();
            }}
            onKeyDown={onKeyDown}
        >
            Oka Hachiro
        </button>
    );
    content = "I am Oka Hachiro, I played pingpong in college, I took Karate course online. Do you think you can beat me?"
})

describe('@molecules/Modal', () => {
    it('appears that the trigger is clickable', async () => {
        const rendered =render(<Modal trigger={trigger}><p>{content}</p></Modal>, {container: document.body});
        const button = rendered.getByText(/Oka Hachiro/);

        rendered.debug();

        expect(button).toBeInTheDocument();

        fireEvent.click(button)

        expect(mockClick).toHaveBeenCalledTimes(1);
    });

    it('shows popup when the trigger is clicked', async () => {
        const rendered =render(<Modal trigger={trigger}><p>{content}</p></Modal>, {container: document.body});
        const button = rendered.getByText(/Oka Hachiro/);

        rendered.debug();

        expect(button).toBeInTheDocument();

        fireEvent.click(button);

        expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('close the popup when users click close button', () => {
        const rendered =render(<Modal trigger={trigger}><p>{content}</p></Modal>, {container: document.body});
        const button = rendered.getByText(/Oka Hachiro/);
        const closeText = '×';


        rendered.debug();

        expect(button).toBeInTheDocument();

        fireEvent.click(button);

        expect(screen.getByText(content)).toBeInTheDocument();
        
        fireEvent.click(screen.getByText(closeText));

        expect(screen.queryByRole('dialog')).toBeNull();
    });

    it('close the popup when users click outside the dialog', () => {
        const rendered =render(<Modal trigger={trigger}><p>{content}</p></Modal>, {container: document.body});
        const button = rendered.getByText(/Oka Hachiro/);

        rendered.debug();

        expect(button).toBeInTheDocument();

        fireEvent.click(button);

        expect(screen.getByText(content)).toBeInTheDocument();
        
        fireEvent.click(screen.getByRole('dialog'));

        expect(screen.queryByRole('dialog')).toBeNull();
    });
});