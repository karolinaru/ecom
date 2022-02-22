import { render, screen } from '@testing-library/react';
import ProductImage from './ProductImage';

test('renders product image', () => {
    render(<ProductImage />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
});