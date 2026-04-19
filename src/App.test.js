import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the hero heading', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /AI\/ML Engineer building practical machine learning and LLM systems/i })
  ).toBeInTheDocument();
});
