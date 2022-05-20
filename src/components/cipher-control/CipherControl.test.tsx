import * as React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { CipherControl } from './CipherControl';

describe('CipherControl', () => {
  it('onClockwiseRotation should have been called', () => {
    const onClockwiseRotation = jest.fn();

    render(
      <CipherControl
        onClockwiseRotation={onClockwiseRotation}
        onCounterClockwiseRotation={() => {}}
        onReset={() => {}}
      />,
    );

    userEvent.click(screen.getByLabelText('Im Uhrzeigersinn'));
    expect(onClockwiseRotation).toBeCalledTimes(1);
  });

  it('onCounterClockwiseRotation should have been called', () => {
    const onCounterClockwiseRotation = jest.fn();

    render(
      <CipherControl
        onClockwiseRotation={() => {}}
        onCounterClockwiseRotation={onCounterClockwiseRotation}
        onReset={() => {}}
      />,
    );

    userEvent.click(screen.getByLabelText('Gegen den Uhrzeigersinn'));
    expect(onCounterClockwiseRotation).toBeCalledTimes(1);
  });

  it('onReset should have been called', () => {
    const onReset = jest.fn();

    render(
      <CipherControl
        onClockwiseRotation={() => {}}
        onCounterClockwiseRotation={() => {}}
        onReset={onReset}
      />,
    );

    userEvent.click(screen.getByLabelText('Auf Anfang'));
    expect(onReset).toBeCalledTimes(1);
  });
});
