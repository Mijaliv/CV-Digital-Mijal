import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the site owner name in the header', () => {
  render(<App />);
  const nameElement = screen.getByText(/Mijal Nuñez/i);
  expect(nameElement).toBeInTheDocument();
});
