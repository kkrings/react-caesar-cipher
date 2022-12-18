import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CipherAppBar } from './CipherAppBar';

test('render app bar', () => {
  render(<CipherAppBar />);
  expect(screen.queryByRole('tooltip')).toBeNull();
});

test('click info button', async () => {
  const user = userEvent.setup();
  render(<CipherAppBar />);
  await user.click(screen.getByLabelText('Datenschutzerklärung, Lizenz'));
  expect(screen.getByRole('tooltip')).toBeInTheDocument();
});

test('click info button twice', async () => {
  const user = userEvent.setup();
  render(<CipherAppBar />);
  const button = screen.getByLabelText('Datenschutzerklärung, Lizenz');
  await user.click(button);
  await user.click(button);
  expect(screen.queryByRole('tooltip')).toBeNull();
});

test('click info button; click close button', async () => {
  const user = userEvent.setup();
  render(<CipherAppBar />);
  await user.click(screen.getByLabelText('Datenschutzerklärung, Lizenz'));
  await user.click(screen.getByRole('close'));
  expect(screen.queryByRole('tooltip')).toBeNull();
});
