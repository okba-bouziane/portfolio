import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

const renderApp = () =>
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

beforeAll(() => {
  window.matchMedia = (query) => ({ matches: query.includes('reduce'), addListener() {}, removeListener() {} });
  Element.prototype.scrollIntoView = jest.fn();
});

test('renders the single page with resume and section links', () => {
  renderApp();
  expect(screen.getAllByText(/my resume/i)[0]).toHaveAttribute('href', '/okba-resume.pdf');
  expect(screen.getByRole('link', { name: 'projects' })).toHaveAttribute('href', '#projects');
  expect(screen.getAllByRole('link', { name: /gitlab/i })[0]).toHaveAttribute('href', 'https://gitlab.com/okba-bouziane');
  expect(screen.getByRole('heading', { name: 'VoiceDesk' })).toBeInTheDocument();
});

test('a demo video opens in a popup', () => {
  HTMLDialogElement.prototype.showModal = jest.fn(function () { this.open = true; });
  HTMLDialogElement.prototype.close = jest.fn(function () { this.open = false; });
  HTMLMediaElement.prototype.play = jest.fn(() => Promise.resolve());
  HTMLMediaElement.prototype.pause = jest.fn();
  renderApp();
  fireEvent.click(screen.getAllByRole('button', { name: /watch the demo/i })[0]);
  const dialog = screen.getByRole('dialog', { name: /secure agent workspace demo video/i });
  expect(dialog.querySelector('video')).toHaveAttribute('src', '/videos/secure-agent-workspace.mp4');
  fireEvent.click(screen.getAllByRole('button', { name: /close video/i })[0]);
  expect(HTMLDialogElement.prototype.close).toHaveBeenCalled();
});

test('the mobile menu opens and closes', () => {
  renderApp();
  const button = screen.getByRole('button', { name: /open menu/i });
  fireEvent.click(button);
  expect(button).toHaveAttribute('aria-expanded', 'true');
  expect(screen.getAllByRole('link', { name: 'contact' })).toHaveLength(2);
  fireEvent.keyDown(window, { key: 'Escape' });
  expect(button).toHaveAttribute('aria-expanded', 'false');
});

test('terminal answers commands', () => {
  renderApp();
  const input = screen.getByLabelText(/terminal command/i);
  fireEvent.change(input, { target: { value: 'help' } });
  fireEvent.keyDown(input, { key: 'Enter' });
  expect(screen.getByText(/open my resume/i)).toBeInTheDocument();

  fireEvent.change(input, { target: { value: 'nope' } });
  fireEvent.keyDown(input, { key: 'Enter' });
  expect(screen.getByText(/command not found: nope/i)).toBeInTheDocument();
});
