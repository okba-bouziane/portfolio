import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

jest.mock('./subComponents/ParticleComponent', () => () => null);

test('renders the home navigation', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/my resume/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /work/i })).toHaveAttribute('href', '/work');
  expect(screen.getByRole('link', { name: /gitlab/i })).toHaveAttribute('href', 'https://gitlab.com/okba-bouziane');
});
