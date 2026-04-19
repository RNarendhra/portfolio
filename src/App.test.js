import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the hero heading', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /Hi, I'm Narendhra/i })).toBeInTheDocument();
});
