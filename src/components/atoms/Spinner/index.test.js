import { h } from 'preact';
import { render, screen } from '@testing-library/preact';
import Spinner from '.';

describe('@atoms/Spinner', () => {
    test('appears on the DOM if declared', () => {
        render(<Spinner />)
        expect(screen.getByTestId('aSpinner-test')).toBeInTheDocument();
    })
});