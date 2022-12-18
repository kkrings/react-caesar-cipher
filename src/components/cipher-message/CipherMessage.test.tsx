import * as React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { CipherMessage } from './CipherMessage';
import { CipherService } from '../../services/CipherService';

test('encrypt message', async () => {
  const user = userEvent.setup();
  const shift = 1;
  render(<CipherMessage shift={shift} />);
  const message = 'some secret message';
  await user.type(screen.getByLabelText('Geheime Nachricht'), message);
  await user.click(screen.getByText('Verschlüsseln'));
  const encryptedMessage = new CipherService(shift).transformMessage(message);
  const textField = screen.getByLabelText('Verschlüsselte Nachricht');
  expect(textField).toHaveValue(encryptedMessage);
});

test('decrypt message', async () => {
  const user = userEvent.setup();
  const shift = 1;
  render(<CipherMessage shift={shift} />);
  const message = 'some secret message';
  await user.type(screen.getByLabelText('Geheime Nachricht'), message);
  await user.click(screen.getByText('Entschlüsseln'));
  const decryptedMessage = new CipherService(-shift).transformMessage(message);
  const textField = screen.getByLabelText('Entschlüsselte Nachricht');
  expect(textField).toHaveValue(decryptedMessage);
});

test('render shift', () => {
  const shift = 1;
  render(<CipherMessage shift={shift} />);
  const textContent = `Anzahl Verschiebungen: ${shift}`;
  expect(screen.getByTestId('shift')).toHaveTextContent(textContent);
});
