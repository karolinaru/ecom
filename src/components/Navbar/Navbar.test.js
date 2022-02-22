import { render } from '@testing-library/react';
import Navbar from './Navbar';

test('renders naviigation bar', () => {
  const {getByText} = render(<Navbar />);
  expect(getByText('Hi there! The sidebar is in progress.')).toBeInTheDocument();
});
