import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CipherMessageInput } from './CipherMessageInput';
import { CipherService } from '../../../services/CipherService';
import { CipherDirection } from '../../../types/CipherDirection';

test('encrypt message', async () => {
  const user = userEvent.setup();
  const shift = 1;
  const direction = CipherDirection.encrypt;
  render(<CipherMessageInput shift={shift} direction={direction} />);
  const message = 'some secret message';
  await user.type(screen.getByLabelText('Geheime Nachricht'), message);
  const textField = screen.getByLabelText('Verschlüsselte Nachricht');
  const encryptedMessage = new CipherService(shift).transformMessage(message);
  expect(textField).toHaveValue(encryptedMessage);
});

test('decrypt message', async () => {
  const user = userEvent.setup();
  const shift = 1;
  const direction = CipherDirection.decrypt;
  render(<CipherMessageInput shift={shift} direction={direction} />);
  const message = 'some secret message';
  await user.type(screen.getByLabelText('Geheime Nachricht'), message);
  const textField = screen.getByLabelText('Entschlüsselte Nachricht');
  const decryptedMessage = new CipherService(-shift).transformMessage(message);
  expect(textField).toHaveValue(decryptedMessage);
});
