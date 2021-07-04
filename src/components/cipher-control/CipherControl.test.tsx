import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { CipherControl }  from './CipherControl';

test('calls onClockwiseRotation', () => {
  const onClockwiseRotation = jest.fn()

  render(
    <CipherControl
      onClockwiseRotation={onClockwiseRotation}
      onCounterClockwiseRotation={() => {}}
      onReset={() => {}}
    />
  );

  fireEvent.click(screen.getByLabelText('Im Uhrzeigersinn'))
  expect(onClockwiseRotation).toBeCalledTimes(1)
});

test('calls onCounterClockwiseRotation', () => {
  const onCounterClockwiseRotation = jest.fn()

  render(
    <CipherControl
      onClockwiseRotation={() => {}}
      onCounterClockwiseRotation={onCounterClockwiseRotation}
      onReset={() => {}}
    />
  );

  fireEvent.click(screen.getByLabelText('Gegen den Uhrzeigersinn'))
  expect(onCounterClockwiseRotation).toBeCalledTimes(1)
});

test('calls onReset', () => {
  const onReset = jest.fn()

  render(
    <CipherControl
      onClockwiseRotation={() => {}}
      onCounterClockwiseRotation={() => {}}
      onReset={onReset}
    />
  );

  fireEvent.click(screen.getByLabelText('Auf Anfang'))
  expect(onReset).toBeCalledTimes(1)
});
