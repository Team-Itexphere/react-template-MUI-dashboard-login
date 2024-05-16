import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders App', () => {
  render(<App />);
  const linkElement = screen.getByText(/New MSP Project/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders App snapshot', () => {
  const { container } = render(<App />);
  expect(container.firstChild).toMatchSnapshot();
});