import * as React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { App }  from './App';
import { numLatinLetters } from './services/CipherService';

describe('App', () => {
  const message = 'ABC';
  const shift = 1;
  const angleDeg = 360 / numLatinLetters;

  beforeEach(() => render(<App />));
  beforeEach(() => userEvent.type(screen.getByLabelText('Geheime Nachricht'), message));

  describe('click counter-clockwise rotation button once', () => {
    const encryptedMessage = 'BCD';
    const expectedShift = shift;

    beforeEach(() => {
      userEvent.click(screen.getByLabelText('Gegen den Uhrzeigersinn'));
    });

    it('cipher disk should have been rotated counter-clockwise', () => {
      expect(screen.getByRole('img')).toHaveStyle({
        transform: `rotate(-${angleDeg}deg)`
      });
    });

    it(`shift of ${expectedShift} should have been rendered`, () => {
      expect(screen.getByTestId('shift').textContent).toMatch(
        `Anzahl Verschiebungen: ${expectedShift}`
      );
    });

    it(`${message} should have been encrypted to ${encryptedMessage}`, () => {
      expect(screen.getByLabelText('Verschlüsselte Nachricht')).toHaveValue(
        encryptedMessage
      );
    });
  });

  describe('click clockwise rotation button once', () => {
    const encryptedMessage = 'ZAB';
    const expectedShift = numLatinLetters - shift;

    beforeEach(() => {
      userEvent.click(screen.getByLabelText('Im Uhrzeigersinn'));
    });

    it('cipher disk should have been rotated clockwise', () => {
      expect(screen.getByRole('img')).toHaveStyle({
        transform: `rotate(${angleDeg}deg)`
      });
    });

    it(`shift of ${expectedShift} should have been rendered`, () => {
      expect(screen.getByTestId('shift').textContent).toMatch(
        `Anzahl Verschiebungen: ${expectedShift}`
      );
    });

    it(`${message} should have been encrypted to ${encryptedMessage}`, () => {
      expect(screen.getByLabelText('Verschlüsselte Nachricht')).toHaveValue(
        encryptedMessage
      );
    });
  });

  describe('click reset button once', () => {
    const encryptedMessage = message;
    const expectedShift = 0;

    beforeEach(() => {
      userEvent.click(screen.getByLabelText('Im Uhrzeigersinn'));
    });

    beforeEach(() => {
      userEvent.click(screen.getByLabelText('Auf Anfang'));
    });

    it('cipher disk should have been rotated back to zero', () => {
      expect(screen.getByRole('img')).toHaveStyle({
        transform: 'rotate(0deg)'
      });
    });

    it(`shift of ${expectedShift} should have been rendered`, () => {
      expect(screen.getByTestId('shift').textContent).toMatch(
        `Anzahl Verschiebungen: ${expectedShift}`
      );
    });

    it(`${message} should have been encrypted to ${encryptedMessage}`, () => {
      expect(screen.getByLabelText('Verschlüsselte Nachricht')).toHaveValue(
        encryptedMessage
      );
    });
  });

  describe('rotate counter-clockwise rotated cipher disk clockwise', () => {
    const encryptedMessage = message;
    const expectedShift = 0;

    beforeEach(() => {
      userEvent.click(screen.getByLabelText('Gegen den Uhrzeigersinn'));
    });

    beforeEach(() => {
      userEvent.click(screen.getByLabelText('Im Uhrzeigersinn'));
    });

    it('cipher disk should have been rotated back to zero', () => {
      expect(screen.getByRole('img')).toHaveStyle({
        transform: 'rotate(0deg)'
      });
    });

    it(`shift of ${expectedShift} should have been rendered`, () => {
      expect(screen.getByTestId('shift').textContent).toMatch(
        `Anzahl Verschiebungen: ${expectedShift}`
      );
    });

    it(`${message} should have been encrypted to ${encryptedMessage}`, () => {
      expect(screen.getByLabelText('Verschlüsselte Nachricht')).toHaveValue(
        encryptedMessage
      );
    });
  });
});
