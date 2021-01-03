import { h } from 'preact';
import { render, screen } from '@testing-library/preact';
import Card from '.';

describe('@atoms/Card', () => {
    test('shows children if provided', () => {
        const children = 'Oka Hachiro';
        render(<Card>{children}</Card>);
        expect(screen.getByText(/Oka Hachiro/)).toBeInTheDocument();
        expect(screen.queryByText(/Oka Hachiro/)).toBeInTheDocument();
    })

    test('shows header if provided', () => {
        const altText = 'Oka Hachiro, he is a monster himself...';
        const header = (
            <img
                alt={altText}
                src="https://static.wikia.nocookie.net/gantz/images/2/27/Oka_hachirou_portrait.jpg/revision/latest/top-crop/width/360/height/450?cb=20151102164219" 
            />
        );

        render(<Card header={header} />);
        expect(screen.getByAltText(/Oka Hachiro/)).toBeInTheDocument();
        expect(screen.queryByAltText(/Oka Hachiro/)).toBeInTheDocument();
    })
});
