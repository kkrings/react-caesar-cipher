import * as React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { CipherMessageInput } from './CipherMessageInput';
import { CipherService } from '../../../services/CipherService';
import { CipherDirection } from '../../../types/CipherDirection';

describe('CipherMessageInput', () => {
  const shift = 1;
  const message = 'some secret message';

  const renderCipherMessageInput = (direction: CipherDirection) => render(
    <CipherMessageInput
      shift={shift}
      direction={direction}
    />
  );

  const typeSecretMessage = () => userEvent.type(
    screen.getByLabelText('Geheime Nachricht'), message
  );

  const checkForTextField = (label: string) => {
    expect(screen.queryByLabelText(label)).toBeInTheDocument()
  };

  const checkForTransformedMessage = (label: string, service: CipherService) => {
    const value = service.transformMessage(message);
    expect(screen.getByLabelText(label)).toHaveValue(value);
  };

  describe('Encryption', () => {
    const direction = CipherDirection.encrypt;
    const label = 'Verschlüsselte Nachricht';
    const service = new CipherService(shift);

    beforeEach(() => renderCipherMessageInput(direction));
    beforeEach(() => typeSecretMessage());
    beforeEach(() => checkForTextField(label));

    it('TextField should show decrypted message', () => {
      checkForTransformedMessage(label, service);
    });
  });

  describe('Decryption', () => {
    const direction = CipherDirection.decrypt;
    const label = 'Entschlüsselte Nachricht';
    const service = new CipherService(-shift);

    beforeEach(() => renderCipherMessageInput(direction));
    beforeEach(() => typeSecretMessage());
    beforeEach(() => checkForTextField(label));

    it('TextField should show encrypted message', () => {
      checkForTransformedMessage(label, service);
    });
  });
});
