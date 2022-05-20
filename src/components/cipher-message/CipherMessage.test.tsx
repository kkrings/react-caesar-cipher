import * as React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { CipherMessage } from './CipherMessage';
import { CipherService } from '../../services/CipherService';

describe('CipherMessage', () => {
  const shift = 1;

  beforeEach(() => render(<CipherMessage shift={shift} />));

  describe('secret message', () => {
    const message = 'some secret message';

    beforeEach(() => {
      userEvent.type(screen.getByLabelText('Geheime Nachricht'), message);
    });

    it('should be encrypted', () => {
      userEvent.click(screen.getByText('Verschlüsseln'));

      expect(screen.getByLabelText('Verschlüsselte Nachricht')).toHaveValue(
        new CipherService(shift).transformMessage(message),
      );
    });

    it('should be decrypted', () => {
      userEvent.click(screen.getByText('Entschlüsseln'));

      expect(screen.getByLabelText('Entschlüsselte Nachricht')).toHaveValue(
        new CipherService(-shift).transformMessage(message),
      );
    });
  });

  it('shift should be rendered', () => {
    expect(screen.getByTestId('shift').textContent).toMatch(
      `Anzahl Verschiebungen: ${shift}`,
    );
  });
});
